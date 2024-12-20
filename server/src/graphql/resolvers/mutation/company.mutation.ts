import { CompanyServices } from "../../../services/company.services";

const companyInstance = CompanyServices.getInstance();

export const companyMutations = {
  // Create a new company
  createCompany: async (
    _: any,
    { name, phone, address }: { name: string; phone: string; address: string }
  ) => {
    const company = await companyInstance.createCompany(name, phone, address);
    return {
      id: company.id,
      name: company.name,
      address: company.address,
      phone: company.phone,
      createdAt: company.record.createdAt,
      updatedAt: company.record.updatedAt,
    };
  },
};
