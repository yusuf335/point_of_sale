import { StoreServices } from "../../../services/store.services";

const storeInstance = StoreServices.getInstance();

export const storeMutations = {
  // Create a new store
  createStore: async (
    _: any,
    {
      name,
      address,
      phone,
      maxRegisters,
      companyId,
    }: {
      name: string;
      address: string;
      phone: string;
      maxRegisters: number;
      companyId: number;
    }
  ) => {
    const store = await storeInstance.createStore(
      name,
      address,
      phone,
      maxRegisters,
      companyId
    );
    console.log(store);
    return {
      id: store.id,
      name: store.name,
      address: store.address,
      phone: store.phone,
      company: store.company,
      maxRegisters: store.maxRegisters,
      createdAt: store.record.createdAt,
      updatedAt: store.record.updatedAt,
    };
  },
};
