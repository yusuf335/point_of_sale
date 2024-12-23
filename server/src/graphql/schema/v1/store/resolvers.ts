import { Resolvers } from "../../../types";

export const storeResolver: Resolvers = {
  Query: {
    // Get a store by id
    store: async (_, { id }, { dataSources }) => {
      const store = await dataSources.storeAPI.getStoreByID(id);

      return {
        ...store,
        createdAt: store.record?.createdAt.toISOString(),
        updatedAt: store.record?.updatedAt.toISOString(),
      };
    },
    // Get all stores
    stores: async (_, __, { dataSources }) => {
      const stores = await dataSources.storeAPI.getStores();

      return stores.map((store) => ({
        ...store,
        createdAt: store.record?.createdAt.toISOString(),
        updatedAt: store.record?.updatedAt.toISOString(),
      }));
    },
  },

  Mutation: {
    // Create a new store
    createStore: async (
      _,
      { name, address, phone, maxRegisters, companyId },
      { dataSources }
    ) => {
      return dataSources.storeAPI.createStore(
        name,
        address,
        phone,
        maxRegisters,
        companyId
      );
    },

    // Update a store
    updateStore: async (
      _,
      { id, name, address, phone, maxRegisters },
      { dataSources }
    ) => {
      return dataSources.storeAPI.updateStore(
        id,
        name,
        address,
        phone,
        maxRegisters
      );
    },

    // Delete a store
    deleteStore: async (_, { id }, { dataSources }) => {
      return dataSources.storeAPI.deleteStore(id);
    },
  },
};
