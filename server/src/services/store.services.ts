import { StoreEntity } from "../model/store.entity";
import { UserEntity } from "../model/user.entity";
import { AppDataSource } from "../utils/database";

export class StoreServices {
  private static instance: StoreServices;
  private storeRepo = AppDataSource.getRepository(StoreEntity);
  private userRepo = AppDataSource.getRepository(UserEntity);

  private constructor() {}

  //   Singleton pattern
  static getInstance(): StoreServices {
    if (!StoreServices.instance) {
      StoreServices.instance = new StoreServices();
    }

    return StoreServices.instance;
  }

  //   Create a new store
  async createStore(
    name: string,
    address: string,
    phone: number,
    maxRegisters: number
  ): Promise<StoreEntity> {
    const store = new StoreEntity();

    store.name = name;
    store.address = address;
    store.phone = phone.toString();
    store.maxRegisters = maxRegisters;

    return await this.storeRepo.save(store);
  }

  //   Get a store by id
  async getStore(id: number): Promise<StoreEntity> {
    return await this.storeRepo.findOne({ where: { id } });
  }

  //   Get all stores
  async getStores(): Promise<StoreEntity[]> {
    return await this.storeRepo.find();
  }

  //   Get store by user
  async getStoreByUser(userId: number): Promise<StoreEntity[]> {
    const store = await this.storeRepo
      .createQueryBuilder("store")
      .innerJoin("store.users", "user")
      .where("user.id = :userId", { userId })
      .getMany();

    console.log(userId, store);
    return store;
  }

  //   Fetch all users in a store
  async getUsersByStore(storeId: number): Promise<UserEntity[]> {
    const users = this.userRepo
      .createQueryBuilder("user")
      .innerJoin("user.stores", "store")
      .where("store.id = :storeId", { storeId })
      .getMany();

    return users;
  }
}
