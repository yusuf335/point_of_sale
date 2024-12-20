import { CompanyEntity } from "../model/company.entity";
import { StoreEntity } from "../model/store.entity";
import { UserEntity } from "../model/user.entity";
import { AppDataSource } from "../utils/database";

export class StoreServices {
  private static instance: StoreServices;
  private companyRepo = AppDataSource.getRepository(CompanyEntity);
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
    phone: string,
    maxRegisters: number,
    companyId: number
  ): Promise<StoreEntity> {
    const store = new StoreEntity();

    store.name = name;
    store.address = address;
    store.phone = phone;
    store.maxRegisters = maxRegisters;
    store.company = await this.companyRepo.findOne({
      where: { id: companyId },
    });

    return await this.storeRepo.save(store);
  }

  //   Get a store by id
  async getStore(id: number): Promise<StoreEntity> {
    return await this.storeRepo.findOne({
      where: { id },
      relations: ["company"],
    });
  }

  //   Get all stores
  async getStores(): Promise<StoreEntity[]> {
    return await this.storeRepo.find({ relations: ["company"] });
  }
}
