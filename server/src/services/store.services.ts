import { Repository } from "typeorm";
import { DataSource } from "apollo-datasource";
import { AppDataSource } from "../utils/database";

// Import Entity
import { CompanyEntity } from "../model/company.entity";
import { StoreEntity } from "../model/store.entity";
import { UserEntity } from "../model/user.entity";

export class StoreServices extends DataSource {
  private static instance: StoreServices;
  private companyRepo: Repository<CompanyEntity>;
  private storeRepo: Repository<StoreEntity>;
  private userRepo: Repository<UserEntity>;

  private constructor() {
    super();
    this.companyRepo = AppDataSource.getRepository(CompanyEntity);
    this.storeRepo = AppDataSource.getRepository(StoreEntity);
    this.userRepo = AppDataSource.getRepository(UserEntity);
  }

  //   Singleton pattern
  static getInstance(): StoreServices {
    if (!this.instance) {
      this.instance = new StoreServices();
    }

    return this.instance;
  }

  //   Create a new store
  async createStore(
    name: string,
    address: string,
    phone: string,
    maxRegisters: number,
    companyId: number
  ): Promise<StoreEntity> {
    const store = new StoreEntity();

    store.name = name;
    store.address = address;
    store.phone = phone;
    store.company = await this.companyRepo.findOne({
      where: { id: companyId },
    });

    return await this.storeRepo.save(store);
  }

  // Update a store
  async updateStore(
    id: number,
    name: string,
    address: string,
    phone: string,
    maxRegisters: number
  ): Promise<StoreEntity> {
    const store = await this.storeRepo.findOne({
      where: { id },
    });

    store.name = name;
    store.address = address;
    store.phone = phone;

    return await this.storeRepo.save(store);
  }

  //  Delete a store
  async deleteStore(id: number): Promise<StoreEntity> {
    const store = await this.storeRepo.findOne({ where: { id } });

    if (!store) {
      throw new Error("Store not found");
    }

    await this.storeRepo.delete(store.id);

    return store;
  }

  //   Get a store by id
  async getStoreByID(id: number): Promise<StoreEntity> {
    const store = await this.storeRepo.findOne({
      where: { id },
      relations: ["company"],
    });

    return store;
  }

  //   Get all stores
  async getStores(userId: number): Promise<StoreEntity[]> {
    return await this.storeRepo
      .createQueryBuilder("store")
      .innerJoin("store.company", "company")
      .innerJoin("company.users", "users")
      .where("users.id = :id", { id: userId })
      .getMany();
  }
}
