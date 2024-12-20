import { CompanyServices } from "../../../services/company.services";

const companyInstance = CompanyServices.getInstance();

export const companyQueries = {
  // Get a company by id
  company: async (_: any, { id }: { id: number }) => {
    const company = await companyInstance.getCompany(id);
    return {
      id: company.id,
      name: company.name,
      address: company.address,
      phone: company.phone,
      createdAt: company.record.createdAt,
      updatedAt: company.record.updatedAt,
    };
  },

  //   Get all companies
  companies: async () => {
    const companies = await companyInstance.getCompanies();
    return companies.map((company) => ({
      id: company.id,
      name: company.name,
      address: company.address,
      phone: company.phone,
      createdAt: company.record.createdAt,
      updatedAt: company.record.updatedAt,
    }));
  },
};
