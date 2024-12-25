import { Resolvers } from "../../types";
import { DateScalar } from "../../../scalars/DateScalar";

export const registerResolver: Resolvers = {
  Date: DateScalar,
  Query: {
    // Get a Register by ID
    registerByID: async (_, { registerId }, { dataSources }) => {
      return dataSources.registerAPI.getRegisterById(registerId);
    },

    // Get all Registers for a Store or User
    registersByStore: async (_, { storeId, userId }, { dataSources }) => {
      return dataSources.registerAPI.getRegistersByStore(storeId, userId);
    },
  },
  Mutation: {
    // Create a Register for a Store and User
    createRegister: async (_, { user, store }, { dataSources }) => {
      return dataSources.registerAPI.createRegister(user, store);
    },

    // Update a Register by ID
    updateRegister: async (_, { id, sessionEnded, total }, { dataSources }) => {
      return dataSources.registerAPI.updateRegister(id, sessionEnded, total);
    },

    // Delete a Register by ID
    deleteRegister: async (_, { id }, { dataSources }) => {
      return dataSources.registerAPI.deleteRegister(id);
    },
  },
};
