import { DataSource } from "apollo-datasource";
import { Repository } from "typeorm";
import { AppDataSource } from "../utils/database";

// Import models
import { UserEntity } from "../model/user.entity";
import { CustomError } from "../utils/customError";
import { hashPassword } from "../utils/auth/bcrypt";
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

    if (!user) {
      throw new CustomError("User not found", "NOT_FOUND", 404);
    }

    if (user.password !== password) {
      throw new CustomError("Invalid password", "UNAUTHORIZED", 401);
    }

    return user;
  }

  async signup(name: string, email: string, password: string) {
    const user = await this.userRepository
      .createQueryBuilder("user")
      .where("user.email = :email", { email })
      .getOne();

    if (user) {
      throw new CustomError("User already exists", "CONFLICT", 409);
    }

    const passwordHash = await hashPassword(password);

    if (passwordHash instanceof CustomError) {
      throw passwordHash;
    }

    const newUser = await this.userRepository
      .createQueryBuilder()
      .insert()
      .into(UserEntity)
      .values({ name, email, password: passwordHash as string })
      .execute();

    // Access the generated identifiers
    console.log("Generated Identifiers:", newUser.identifiers);

    // Access the generated maps (e.g., auto-generated fields like `id`)
    console.log("Generated Maps:", newUser.generatedMaps);

    // Database-specific raw output
    console.log("Raw Result:", newUser.raw);

    return true;
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
