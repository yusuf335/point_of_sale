import { Store } from "../model/store";
import { User } from "../model/user";
import { AppDataSource } from "../utils/database";

export class StoreServices {
  private static instance: StoreServices;
  private storeRepo = AppDataSource.getRepository(Store);
  private userRepo = AppDataSource.getRepository(User);

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
  ): Promise<Store> {
    const store = new Store();

    store.name = name;
    store.address = address;
    store.phone = phone.toString();
    store.maxRegisters = maxRegisters;

    return await this.storeRepo.save(store);
  }

  //   Get a store by id
  async getStore(id: number): Promise<Store> {
    return await this.storeRepo.findOne({ where: { id } });
  }

  //   Get all stores
  async getStores(): Promise<Store[]> {
    return await this.storeRepo.find();
  }

  //   Get store by user
  async getStoreByUser(userId: number): Promise<Store[]> {
    const store = await this.storeRepo
      .createQueryBuilder("store")
      .innerJoin("store.users", "user")
      .where("user.id = :userId", { userId })
      .getMany();

    console.log(userId, store);
    return store;
  }

  //   Fetch all users in a store
  async getUsers(storeId: number): Promise<User[]> {
    const users = this.userRepo
      .createQueryBuilder("user")
      .innerJoin("user.stores", "store")
      .where("store.id = :storeId", { storeId })
      .getMany();

    return users;
  }
}
