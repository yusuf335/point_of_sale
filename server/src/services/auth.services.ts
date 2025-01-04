import validator from "validator";
import { v4 as uuidv4 } from "uuid";
import { DataSource } from "apollo-datasource";
import { Repository } from "typeorm";
import { AppDataSource } from "../utils/database";

// Import models
import { UserEntity } from "../model/user.entity";
import { CustomError } from "../utils/customError";

// Import utils
import { hashPassword, comparePassword } from "../utils/auth/bcrypt";
import { generateToken } from "../utils/auth/jwt";

// Import Email Service
import { sendAccountVerificationEmail } from "../templates/verifyAccount";
import { sendChangePasswordEmail } from "../templates/changePassword";

export class AuthServices extends DataSource {
  private static instance: AuthServices;
  private userRepository: Repository<UserEntity>;

  constructor() {
    super();
    this.userRepository = AppDataSource.getRepository(UserEntity);
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new AuthServices();
    }

    return this.instance;
  }

  // Login
  async login(email: string, password: string) {
    // Validate email
    if (!validator.isEmail(email)) {
      throw new Error("Invalid email address");
    }

    // Check if user exists
    const user = await this.userRepository
      .createQueryBuilder("user")
      .where("user.email = :email", { email })
      .getOne();

    // Check if user exists
    if (!user) {
      throw new CustomError("User not found", "NOT_FOUND", 404);
    }

    // Check if password is correct by matching the input password with the stored password
    if (!(await comparePassword(password, user.password))) {
      throw new CustomError("Invalid password", "UNAUTHORIZED", 401);
    }

    // Generate JWT token
    const jwtToken = generateToken({
      userId: user.id,
      role: user.role,
      isActive: user.isActive,
    });

    return { jwtToken };
  }

  // Signup
  async signup(name: string, email: string, password: string) {
    // Validate email
    if (!validator.isEmail(email)) {
      throw new Error("Invalid email address");
    }

    // Check if user already exists
    const user = await this.userRepository
      .createQueryBuilder("user")
      .where("user.email = :email", { email })
      .getOne();

    // Check if user already exists
    if (user) {
      throw new CustomError("User already exists", "CONFLICT", 409);
    }

    // Hash password
    const passwordHash = await hashPassword(password);

    // Check if password hash was successful
    if (passwordHash instanceof CustomError) {
      throw passwordHash;
    }

    // Generate token
    const verificationToken = uuidv4();

    // Create new user
    const createNewUser = await this.userRepository
      .createQueryBuilder()
      .insert()
      .into(UserEntity)
      .values({
        name,
        email,
        password: passwordHash as string,
        accountVerificationToken: verificationToken,
      })
      .execute();

    // Send email to user
    sendAccountVerificationEmail(
      email,
      `Welcome to Our Platform! Please Verify Your Account.`,
      verificationToken
    );

    // Get user
    const newUser = await this.userRepository
      .createQueryBuilder("user")
      .where("user.id = :id", { id: createNewUser.identifiers[0].id })
      .getOne();

    // Generate JWT token
    const jwtToken = generateToken({
      userId: newUser.id,
      role: newUser.role,
      isActive: newUser.isActive,
    });

    return { jwtToken, ...newUser };
  }

  // Resend verification email
  async resendVerificationEmail(id: number) {
    const user = await this.userRepository
      .createQueryBuilder("user")
      .where("user.id = :id", { id })
      .getOne();

    // Check if user exists
    if (!user) {
      throw new CustomError("User not found", "NOT_FOUND", 404);
    }

    // Generate token
    const verificationToken = uuidv4();

    // Generate token and update user
    await this.userRepository
      .createQueryBuilder()
      .update(UserEntity)
      .set({
        accountVerificationToken: verificationToken,
      })
      .where("id = :id", { id: user.id })
      .execute();

    // Send email to user
    sendAccountVerificationEmail(
      user.email,
      `Welcome to Our Platform! Please Verify Your Account.`,
      verificationToken
    );

    return true;
  }

  // Verify account
  async verifyAccount(token: string) {
    const user = await this.userRepository
      .createQueryBuilder("user")
      .where("user.accountVerificationToken = :token", { token })
      .getOne();

    // Check if user exists
    if (!user) {
      throw new CustomError("Invalid token", "UNAUTHORIZED", 401);
    }

    // Update user
    await this.userRepository
      .createQueryBuilder()
      .update(UserEntity)
      .set({
        isVerified: true,
        accountVerificationToken: null,
      })
      .where("id = :id", { id: user.id })
      .execute();

    // Send email to user
    sendAccountVerificationEmail(
      user.email,
      `Thank you for verifying your account!`,
      user.accountVerificationToken
    );

    return true;
  }

  // Forgot password
  async forgotPassword(email: string) {
    const user = await this.userRepository
      .createQueryBuilder("user")
      .where("user.email = :email", { email })
      .getOne();

    // Check if user exists
    if (!user) {
      throw new Error("User not found");
    }

    // Generate token
    const passwordResetToken = uuidv4();

    // Generate token and update user
    await this.userRepository
      .createQueryBuilder()
      .update(UserEntity)
      .set({
        resetPasswordToken: passwordResetToken,
        resetPasswordTokenGeneratedAt: new Date(),
      })
      .where("id = :id", { id: user.id })
      .execute();

    sendChangePasswordEmail(email, `Reset Your Password`, passwordResetToken);

    return true;
  }

  // Reset password
  async resetPassword(token: string, password: string) {
    const user = await this.userRepository
      .createQueryBuilder("user")
      .where("user.resetPasswordToken = :token", { token })
      .getOne();

    // Check if user exists
    if (!user) {
      throw new CustomError("Invalid token", "UNAUTHORIZED", 401);
    }

    // Hash password
    const passwordHash = await hashPassword(password);

    // Check if password hash was successful
    if (passwordHash instanceof CustomError) {
      throw passwordHash;
    }

    // Update user
    await this.userRepository
      .createQueryBuilder()
      .update(UserEntity)
      .set({
        password: passwordHash as string,
        resetPasswordToken: null,
        resetPasswordTokenGeneratedAt: null,
      })
      .where("id = :id", { id: user.id })
      .execute();

    return true;
  }
}
