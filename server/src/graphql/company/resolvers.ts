import { CompanyServices } from "../../services/company.services";
import { Resolvers } from "../types";

const companyInstance = CompanyServices.getInstance();

export const companyResolver: Resolvers = {
  Query: {
    // Get a company by id
    company: async (_: any, { id }, { dataSources }) => {
      return dataSources.companyAPI.getCompany(id);
    },

    //   Get all companies
    companies: async (_, __, { dataSources }) => {
      return dataSources.companyAPI.getCompanies();
    },
  },

  Mutation: {
    // Create a new company
    createCompany: async (_, { name, phone, address }, { dataSources }) => {
      return dataSources.companyAPI.createCompany(name, phone, address);
    },
  },
};
