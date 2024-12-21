import { StoreServices } from "../../services/store.services";
import { Resolvers } from "../types";

const storeInstance = StoreServices.getInstance();

export const storeResolver: Resolvers = {
  Query: {
    // Get a store by id
    store: async (_: any, { id }: { id: string }) => {
      const store = await storeInstance.getStore(Number(id));
      return {
        id: store.id.toString(),
        name: store.name,
        address: store.address,
        phone: store.phone,
        maxRegisters: store.maxRegisters,
        company: store.company,
        createdAt: store.record.createdAt.toISOString(),
        updatedAt: store.record.updatedAt.toISOString(),
      };
    },

    // Get all stores
    stores: async () => {
      const stores = await storeInstance.getStores();
      return stores.map((store) => ({
        id: store.id.toString(),
        name: store.name,
        address: store.address,
        phone: store.phone,
        maxRegisters: store.maxRegisters,
        company: store.company,
        createdAt: store.record.createdAt.toISOString(),
        updatedAt: store.record.updatedAt.toISOString(),
      }));
    },
  },

  Mutation: {
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
  },
};
