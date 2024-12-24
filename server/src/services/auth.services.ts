import { DataSource } from "apollo-datasource";
import { Repository } from "typeorm";
import { AppDataSource } from "../utils/database";

// Import models
import { UserEntity } from "../model/user.entity";
import { CustomError } from "../utils/customError";
import { hashPassword, comparePassword } from "../utils/auth/bcrypt";
import { generateToken } from "../utils/auth/jwt";

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

  async login(email: string, password: string) {
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
    const token = generateToken({
      userId: user.id,
      role: user.role,
      isActive: user.isActive,
    });

    return { token };
  }

  async signup(name: string, email: string, password: string) {
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

    // Create new user
    const newUser = await this.userRepository
      .createQueryBuilder()
      .insert()
      .into(UserEntity)
      .values({ name, email, password: passwordHash as string })
      .execute();

    // Get new user
    const getNewUser = await this.userRepository
      .createQueryBuilder("user")
      .where("user.id = :id", { id: newUser.identifiers[0].id })
      .getOne();

    // Generate JWT token
    const token = generateToken({
      userId: getNewUser.id,
      role: getNewUser.role,
      isActive: getNewUser.isActive,
    });

    return { token };
  }

  async forgotPassword(email: string) {
    const user = await this.userRepository
      .createQueryBuilder("user")
      .where("user.email = :email", { email })
      .getOne();

    if (!user) {
      throw new Error("User not found");
    }

    return true;
  }
}
