import { CustomError } from "../../../../utils/customError";
import { Resolvers } from "../../../types";

export const userResolver: Resolvers = {
  Query: {
    // Get all users
    users: async (_, __, { dataSources }) => {
      return dataSources.userAPI.getUsers();
    },

    // Get user by ID
    userById: async (_, __, { userInfo, dataSources }) => {
      const user = await dataSources.userAPI.getUserById(userInfo.userId);
      return user;
    },

    // Get all users by company ID
    usersByCompany: async (_, { companyId }, { dataSources }) => {
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
      { name, email, password, role, storeId },
      { userInfo, dataSources }
    ) => {
      if (userInfo.role !== "ADMIN" && userInfo.role !== "MANAGER")
        throw new CustomError("Permission Denied", "UNAUTHORIZED", 401);

      return dataSources.userAPI.createUser(
        userInfo.userId,
        name,
        email,
        password,
        role,
        storeId
      );
    },

    // Update a user
    updateUser: async (
      _,
      { name, email, role, companyId, storeId },
      { userInfo, dataSources }
    ) => {
      return dataSources.userAPI.updateUser(
        userInfo.userId,
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
