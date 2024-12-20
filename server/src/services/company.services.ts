import { AppDataSource } from "../utils/database";
import { CompanyEntity } from "../model/company.entity";

export class CompanyServices {
  private static instance: CompanyServices;
  private companyRepo = AppDataSource.getRepository(CompanyEntity);

  private constructor() {}

  static getInstance(): CompanyServices {
    if (!CompanyServices.instance) {
      CompanyServices.instance = new CompanyServices();
    }
    return CompanyServices.instance;
  }

  //   Create a new company
  async createCompany(
    name: string,
    phone: string,
    address: string
  ): Promise<CompanyEntity> {
    const company = new CompanyEntity();
    company.name = name;
    company.phone = phone;
    company.address = address;

    return await this.companyRepo.save(company);
  }

  //   Update a company details
  async updateCompany(
    id: number,
    name: string,
    phone: string,
    address: string
  ): Promise<CompanyEntity> {
    const company = await this.companyRepo.findOne({ where: { id } });

    if (!company) {
      throw new Error("Company not found");
    }

    company.name = name;
    company.phone = phone;
    company.address = address;

    return await this.companyRepo.save(company);
  }

  //   Get a company by id
  async getCompany(id: number): Promise<CompanyEntity> {
    const company = await this.companyRepo.findOne({ where: { id } });

    if (!company) {
      throw new Error("Company not found");
    }

    return company;
  }

  //   Get all companies
  async getCompanies(): Promise<CompanyEntity[]> {
    return await this.companyRepo.find();
  }
}
