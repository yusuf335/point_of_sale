import { Resolvers } from "../types";

export const userResolver: Resolvers = {
  Query: {
    // Get all users
    users: async (_, __, { dataSources }: any) => {
      return dataSources.userAPI.getUsers();
    },

    // Get user by ID
    user: async (_, { id }, { dataSources }) => {
      const user = await dataSources.userAPI.getUserByID(id);
      return user;
    },

    // Get all users by company ID
    usersByCompany: async (_, { companyId }, { dataSources }: any) => {
      return dataSources.userAPI.getUsersByCompany(companyId);
    },

    // Get all users by store ID
    usersByStore: async (_, { storeId }, { dataSources }: any) => {
      return dataSources.userAPI.getUsersByStore(storeId);
    },
  },

  Mutation: {
    // Create a user
    createUser: async (
      _,
      { name, email, role, companyId, storeId },
      { dataSources }
    ) => {
      return dataSources.userAPI.createUser(
        name,
        email,
        role,
        companyId,
        storeId
      );
    },

    // Update a user
    updateUser: async (
      _,
      { id, name, email, role, companyId, storeId },
      { dataSources }
    ) => {
      return dataSources.userAPI.updateUser(
        id,
        name,
        email,
        role,
        companyId,
        storeId
      );
    },

    // Delete a user
    deleteUser: async (_, { id }, { dataSources }: any) => {
      return dataSources.userAPI.deleteUser(id);
    },
  },
};
