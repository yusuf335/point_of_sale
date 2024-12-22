import { Resolvers } from "../types";

export const companyResolver: Resolvers = {
  Query: {
    // Get a company by ID
    company: async (_, { id }, { dataSources }) => {
      return dataSources.companyAPI.getCompany(id);
    },

    // Get all companies
    companies: async (_, __, { dataSources }) => {
      return dataSources.companyAPI.getCompanies();
    },
  },

  Mutation: {
    // Create a new company
    createCompany: async (_, { name, phone, address }, { dataSources }) => {
      return dataSources.companyAPI.createCompany(name, phone, address);
    },

    // Update company
    updateCompany: async (_, { id, name, phone, address }, { dataSources }) => {
      return dataSources.companyAPI.updateCompany(id, name, phone, address);
    },

    // Delete company
    deleteCompany: async (_, { id }, { dataSources }) => {
      return dataSources.companyAPI.deleteCompany(id);
    },
  },
};
