import { StoreServices } from "../../../services/store.services";

const storeInstance = StoreServices.getInstance();

export const storeQueries = {
  // Get a store by id
  store: async (_: any, { id }: { id: number }) => {
    const store = await storeInstance.getStore(id);
    return {
      id: store.id,
      name: store.name,
      address: store.address,
      phone: store.phone,
      maxRegisters: store.maxRegisters,
      company: store.company,
      createdAt: store.record.createdAt,
      updatedAt: store.record.updatedAt,
    };
  },

  // Get all stores
  stores: async () => {
    const stores = await storeInstance.getStores();
    return stores.map((store) => ({
      id: store.id,
      name: store.name,
      address: store.address,
      phone: store.phone,
      maxRegisters: store.maxRegisters,
      company: store.company,
      createdAt: store.record.createdAt,
      updatedAt: store.record.updatedAt,
    }));
  },
};
