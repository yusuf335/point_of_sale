import { Repository } from "typeorm";
import { DataSource } from "apollo-datasource";
import { AppDataSource } from "../utils/database";
import bcrypt from "bcrypt";

// Import Entities
import { UserEntity, UserRole } from "../model/user.entity";
import { CompanyEntity } from "../model/company.entity";
import { StoreEntity } from "../model/store.entity";

// Import Custom Error
import { CustomError } from "../utils/customError";

export class UserServices extends DataSource {
  private static instance: UserServices;
  private userRepo: Repository<UserEntity>;
  private companyRepo: Repository<CompanyEntity>;
  private storeRepo: Repository<StoreEntity>;

  private constructor() {
    super();
    this.userRepo = AppDataSource.getRepository(UserEntity);
    this.companyRepo = AppDataSource.getRepository(CompanyEntity);
    this.storeRepo = AppDataSource.getRepository(StoreEntity);
  }

  static getInstance(): UserServices {
    if (!this.instance) {
      this.instance = new UserServices();
    }
    return this.instance;
  }

  // Create a new user
  // The company ID is retrieved from the database throught the user currently logged in (userInfoId)
  async createUser(
    userInfoId: number,
    name: string,
    email: string,
    password: string,
    role: UserRole,
    storeId: number
  ): Promise<UserEntity> {
    const user = new UserEntity();
    const userCompany = await this.userRepo.findOne({
      where: { id: userInfoId },
      relations: ["company"],
    });

    // Get store by ID in the same company
    const store = await this.storeRepo.findOne({
      where: { id: storeId, company: userCompany.company },
    });

    user.name = name;
    user.email = email;
    user.role = role;
    user.company = userCompany.company;
    user.store = store;

    // Hash password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    try {
      await this.userRepo.save(user);
    } catch (error) {
      throw new CustomError("User already exists", "BAD_REQUEST", 400);
    }

    return user;
  }

  // Update a user
  async updateUser(
    id: number,
    name: string,
    email: string,
    role: UserRole,
    company: number,
    storeId: number
  ): Promise<UserEntity> {
    const user = await this.userRepo.findOne({ where: { id } });

    // Get company and store by ID to update user
    const updateCompany = await this.companyRepo.findOne({
      where: { id: company },
    });
    const updateStore = await this.storeRepo.findOne({
      where: { id: storeId },
    });

    if (!user) {
      throw new CustomError("User not found", "NOT_FOUND", 404);
    }

    user.name = name;
    user.email = email;
    user.role = role;
    user.company = updateCompany;
    user.store = updateStore;

    return await this.userRepo.save(user);
  }

  // Delete a user
  async deleteUser(id: number): Promise<UserEntity> {
    const user = await this.userRepo.findOne({ where: { id } });

    if (!user) {
      throw new Error("User not found");
    }

    await this.userRepo.delete(user.id);

    return user;
  }

  // Get all users
  async getUsers(): Promise<UserEntity[]> {
    return await this.userRepo.find();
  }

  // Get user by ID
  async getUserById(id: number): Promise<UserEntity> {
    const user = await this.userRepo
      .createQueryBuilder("user")
      .where("user.id = :id", { id })
      .innerJoinAndSelect("user.store", "store")
      .innerJoinAndSelect("user.company", "company")
      .getOne();

    if (!user) {
      throw new CustomError("User not found", "NOT_FOUND", 404);
    }

    return user;
  }

  // Get users by Company
  async getUsersByCompany(userId: number): Promise<UserEntity[]> {
    const users = await this.userRepo
      .createQueryBuilder("user")
      .where(
        "user.company = (SELECT u.company_id FROM user u WHERE u.id = :userId)",
        { userId }
      )
      .getMany();

    return users;
  }

  // Get users by Company
  async updateUsersByCompany(
    userId: number,
    companyId: number
  ): Promise<UserEntity> {
    const user = await this.userRepo.findOne({ where: { id: userId } });

    const company = await this.companyRepo.findOne({
      where: { id: companyId },
    });

    if (!user) {
      throw new CustomError("User not found", "NOT_FOUND", 404);
    }

    user.company = company;

    return await this.userRepo.save(user);
  }

  // Get users by store
  async getUsersByStore(storeId: number): Promise<UserEntity[]> {
    return await this.userRepo.find({
      where: { store: { id: storeId } },
    });
  }

  // Get user Role and isActive status
  async getUserRoleAndStatus(id: number): Promise<UserEntity> {
    return await this.userRepo
      .createQueryBuilder("user")
      .select(["user.role", "user.isActive", "user.isVerified"])
      .where("user.id = :id", { id })
      .getOne();
  }
}
