import { StoreServices } from "../services/store.services";

const storeInstance = StoreServices.getInstance();

export const resolvers = {
  Query: {
    store: async (_: any, { id }) => {
      const store = await storeInstance.getStore(id);

      return {
        id: store.id,
        name: store.name,
        address: store.address,
        phone: store.phone,
        maxRegisters: store.maxRegisters,
        createdAt: store.record.createdAt,
        updatedAt: store.record.updatedAt,
      };
    },

    stores: async () => {
      const stores = await storeInstance.getStores();

      return stores.map((store) => ({
        id: store.id,
        name: store.name,
        address: store.address,
        phone: store.phone,
        maxRegisters: store.maxRegisters,
        createdAt: store.record.createdAt,
        updatedAt: store.record.updatedAt,
      }));
    },

    userStores: async (_: any, { userId }) => {
      const stores = await storeInstance.getStoreByUser(userId);

      return stores.map((store) => ({
        id: store.id,
        name: store.name,
        address: store.address,
        phone: store.phone,
        maxRegisters: store.maxRegisters,
        createdAt: store.record.createdAt,
        updatedAt: store.record.updatedAt,
      }));
    },
  },
};
