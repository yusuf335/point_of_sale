import { Resolvers } from "../../types";
import { withErrorHandling } from "../../../utils/withErrorHandling";
import { CustomError } from "../../../utils/customError";

export const companyResolver: Resolvers = {
  Query: {
    // Get a company by ID
    company: withErrorHandling(async (_, __, { userInfo, dataSources }) => {
      return dataSources.companyAPI.getCompany(userInfo.userId);
    }),

    // Get all companies
    companies: withErrorHandling(async (_, __, { dataSources }) => {
      return await dataSources.companyAPI.getCompanies();
    }),
  },

  Mutation: {
    // Create a new company
    createCompany: withErrorHandling(
      async (_, { name, phone, address }, { userInfo, dataSources }) => {
        try {
          const company = await dataSources.companyAPI.createCompany(
            name,
            phone,
            address
          );

          // Update user with company ID
          const user = await dataSources.userAPI.updateUser(
            userInfo.userId,
            userInfo.name,
            userInfo.email,
            userInfo.role,
            company.id,
            userInfo.storeId
          );

          return company;
        } catch (error) {
          throw new CustomError(error.message, error.code, error.statusCode);
        }
      }
    ),

    // Update company
    updateCompany: withErrorHandling(
      async (_, { id, name, phone, address }, { dataSources }) => {
        return dataSources.companyAPI.updateCompany(id, name, phone, address);
      }
    ),

    // Delete company
    deleteCompany: withErrorHandling(async (_, { id }, { dataSources }) => {
      return dataSources.companyAPI.deleteCompany(id);
    }),
  },
};
