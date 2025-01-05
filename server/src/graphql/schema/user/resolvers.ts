import { CustomError } from "../../../utils/customError";
import { withErrorHandling } from "../../../utils/withErrorHandling";
import { Resolvers } from "../../types";

export const userResolver: Resolvers = {
  Query: {
    // Get all users
    users: withErrorHandling(async (_, __, { dataSources }) => {
      return dataSources.userAPI.getUsers();
    }),

    // Get user by ID
    userById: withErrorHandling(
      async (_, { id }, { userInfo, dataSources }) => {
        // If ID is provided, get user by ID
        if (id) {
          return await dataSources.userAPI.getUserById(id);
        }

        // If no ID is provided, get user by token
        return await dataSources.userAPI.getUserById(userInfo.userId);
      }
    ),

    // Get all users by company ID
    usersByCompany: withErrorHandling(
      async (_, __, { dataSources, userInfo }) => {
        return dataSources.userAPI.getUsersByCompany(userInfo.userId);
      }
    ),

    // Get all users by store ID
    usersByStore: withErrorHandling(
      async (_, { storeId }, { dataSources }: any) => {
        return dataSources.userAPI.getUsersByStore(storeId);
      }
    ),

    // Get user role and status
    getUserRoleAndStatus: withErrorHandling(
      async (_, __, { userInfo, dataSources }) => {
        return dataSources.userAPI.getUserRoleAndStatus(userInfo.userId);
      }
    ),
  },

  Mutation: {
    // Create a user
    createUser: withErrorHandling(
      async (
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
      }
    ),

    // Update a user
    updateUser: withErrorHandling(
      async (
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
      }
    ),

    // Delete a user
    deleteUser: withErrorHandling(async (_, { id }, { dataSources }: any) => {
      return dataSources.userAPI.deleteUser(id);
    }),
  },
};
