import { CompanyServices } from "../../services/company.services";
import { Resolvers } from "../types";

const companyInstance = CompanyServices.getInstance();

export const companyResolver: Resolvers = {
  Query: {
    // Get a company by id
    company: async (_: any, { id }: { id: string }) => {
      const company = await companyInstance.getCompany(Number(id));
      return {
        id: company.id.toString(),
        name: company.name,
        address: company.address,
        phone: company.phone,
        createdAt: company.record.createdAt.toISOString(),
        updatedAt: company.record.updatedAt.toISOString(),
      };
    },

    //   Get all companies
    companies: async () => {
      const companies = await companyInstance.getCompanies();
      return companies.map((company) => ({
        id: company.id.toString(),
        name: company.name,
        address: company.address,
        phone: company.phone,
        createdAt: company.record.createdAt.toISOString(),
        updatedAt: company.record.updatedAt.toISOString(),
      }));
    },
  },

  Mutation: {
    // Create a new company
    createCompany: async (
      _: any,
      { name, phone, address }: { name: string; phone: string; address: string }
    ) => {
      const company = await companyInstance.createCompany(name, phone, address);
      return {
        id: company.id.toString(),
        name: company.name,
        address: company.address,
        phone: company.phone,
        createdAt: company.record.createdAt.toISOString(),
        updatedAt: company.record.updatedAt.toISOString(),
      };
    },
  },
};
