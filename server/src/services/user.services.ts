import { Repository } from "typeorm";
import { DataSource } from "apollo-datasource";
import { AppDataSource } from "../utils/database";

import { UserEntity, UserRole } from "../model/user.entity";

export class UserServices extends DataSource {
  private static instance: UserServices;
  private userRepo: Repository<UserEntity>;

  private constructor() {
    super();
    this.userRepo = AppDataSource.getRepository(UserEntity);
  }

  static getInstance(): UserServices {
    if (!UserServices.instance) {
      UserServices.instance = new UserServices();
    }
    return UserServices.instance;
  }

  // Create a new user
  async createUser(
    name: string,
    email: string,
    role: UserRole,
    storeId: number
  ): Promise<UserEntity> {
    const user = new UserEntity();
    user.name = name;
    user.email = email;
    user.role = role;
    user.store.id = storeId;

    return await this.userRepo.save(user);
  }

  // Update a user
  async updateUser(
    id: number,
    name: string,
    email: string,
    role: UserRole,
    storeId: number
  ): Promise<UserEntity> {
    const user = await this.userRepo.findOne({ where: { id } });

    if (!user) {
      throw new Error("User not found");
    }

    user.name = name;
    user.email = email;
    user.role = role;
    user.store.id = storeId;

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
  async getUserByID(id: number): Promise<UserEntity> {
    const user = await this.userRepo.findOne({
      where: { id },
      relations: ["company", "store"],
    });

    if (!user) {
      throw new Error("User not found");
    }

    return user;
  }

  // Get users by Company
  async getUsersByCompany(companyId: number): Promise<UserEntity[]> {
    return await this.userRepo.find({
      where: { company: { id: companyId } },
    });
  }

  // Get users by store
  async getUsersByStore(storeId: number): Promise<UserEntity[]> {
    return await this.userRepo.find({
      where: { store: { id: storeId } },
    });
  }
}
