import { Resolvers } from "../../types";
import { withErrorHandling } from "../../../utils/withErrorHandling";

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
      async (_, { name, phone, address }, { dataSources }) => {
        return dataSources.companyAPI.createCompany(name, phone, address);
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
