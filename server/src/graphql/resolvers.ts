import { StoreServices } from "../services/store.services";

const s = StoreServices.getInstance();

export const resolvers = {
  Query: {
    store: async (_: any, { id }) => {
      const store = await s.getStore(id);

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
      const stores = await s.getStores();

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
