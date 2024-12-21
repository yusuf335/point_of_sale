import { StoreServices } from "../../services/store.services";
import { Resolvers } from "../types";

const storeInstance = StoreServices.getInstance();

export const storeResolver: Resolvers = {
  Query: {
    // Get a store by id
    store: async (_, { id }, { dataSources }) => {
      return dataSources.storeAPI.getStore(id);
    },

    // Get all stores
    stores: async (_, __, { dataSources }) => {
      return dataSources.storeAPI.getStores();
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
  },
};
