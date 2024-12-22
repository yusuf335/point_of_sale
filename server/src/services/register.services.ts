import { Repository } from "typeorm";
import { DataSource } from "apollo-datasource";
import { AppDataSource } from "../utils/database";

import { RegisterEntity } from "../model/register.entity";
import { OrderEntity } from "../model/order.entity";
import { UserEntity } from "../model/user.entity";
import { StoreEntity } from "../model/store.entity";

export class RegisterService extends DataSource {
  private static instance: RegisterService;
  private registerRepo: Repository<RegisterEntity>;
  private orderRepo: Repository<OrderEntity>;
  private userRepo: Repository<UserEntity>;
  private storeRepo: Repository<StoreEntity>;

  constructor() {
    super();
    this.registerRepo = AppDataSource.getRepository(RegisterEntity);
    this.orderRepo = AppDataSource.getRepository(OrderEntity);
    this.userRepo = AppDataSource.getRepository(UserEntity);
    this.storeRepo = AppDataSource.getRepository(StoreEntity);
  }

  public static getInstance(): RegisterService {
    if (!this.instance) {
      this.instance = new RegisterService();
    }

    return this.instance;
  }

  // Create a Register
  async createRegister(user: number, store: number): Promise<RegisterEntity> {
    const register = new RegisterEntity();
    const userEntity = await this.userRepo.findOne({ where: { id: user } });
    register.user = userEntity;
    const storeEntity = await this.storeRepo.findOne({ where: { id: store } });
    register.store = storeEntity;
    register.sessionStarted = new Date();

    return this.registerRepo.save(register);
  }

  // Update a Register
  async updateRegister(
    id: number,
    sessionEnded: string,
    total: number
  ): Promise<RegisterEntity> {
    const register = await this.registerRepo.findOne({ where: { id } });
    if (!register) {
      throw new Error("Register not found");
    }

    register.sessionEnded = new Date(sessionEnded);
    register.total = total;

    return this.registerRepo.save(register);
  }

  // Delete a Register
  async deleteRegister(id: number): Promise<RegisterEntity> {
    const register = await this.registerRepo.findOne({ where: { id } });
    if (!register) {
      throw new Error("Register not found");
    }

    return this.registerRepo.remove(register);
  }

  // Get all Registers
  async getRegisters(): Promise<RegisterEntity[]> {
    const register = await this.registerRepo.find({
      relations: ["user", "store", "orders"],
    });

    if (!register) {
      throw new Error("Register not found");
    }
    console.log(register);
    return register;
  }

  // Get a Register by ID
  async getRegisterById(id: number): Promise<RegisterEntity> {
    const register = await this.registerRepo.findOne({
      where: { id },
      relations: ["user", "store", "orders"],
    });

    if (!register) {
      throw new Error("Register not found");
    }

    return register;
  }

  // Get Registers by Store Or User
  async getRegistersByStore(
    storeId: number,
    userId?: number
  ): Promise<RegisterEntity[]> {
    const registers = await this.registerRepo.find({
      where: { store: { id: storeId }, user: { id: userId } },
      relations: ["user", "store", "orders"],
    });

    if (!registers) {
      throw new Error("Store not found");
    }

    return registers;
  }
}
