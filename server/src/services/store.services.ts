import { Store } from "../model/store";
import { AppDataSource } from "../utils/database";

export class StoreServices {
  private static instance: StoreServices;
  private storeRepo = AppDataSource.getRepository(Store);

  private constructor() {}

  public static getInstance(): StoreServices {
    if (!StoreServices.instance) {
      StoreServices.instance = new StoreServices();
    }
    return StoreServices.instance;
  }

  async createStore(store: Store): Promise<Store> {
    return await this.storeRepo.save(store);
  }

  async getStore(id: number): Promise<Store> {
    return await this.storeRepo.findOne({ where: { id } });
  }

  async getStores(): Promise<Store[]> {
    return await this.storeRepo.find();
  }
}
