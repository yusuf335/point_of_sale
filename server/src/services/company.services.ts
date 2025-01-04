import { Repository } from "typeorm";
import { DataSource } from "apollo-datasource";
import { AppDataSource } from "../utils/database";

// Import Entity
import { CompanyEntity } from "../model/company.entity";
import { CustomError } from "../utils/customError";

export class CompanyServices extends DataSource {
  private static instance: CompanyServices;
  private companyRepo: Repository<CompanyEntity>;

  private constructor() {
    super();
    this.companyRepo = AppDataSource.getRepository(CompanyEntity);
  }

  static getInstance(): CompanyServices {
    if (!this.instance) {
      this.instance = new CompanyServices();
    }
    return this.instance;
  }

  //   Create a new company
  async createCompany(
    name: string,
    phone: string,
    address: string
  ): Promise<CompanyEntity> {
    const existingCompany = await this.companyRepo.findOne({
      where: [{ name }, { phone }],
    });

    // Check if company already exists
    if (existingCompany && existingCompany.name === name) {
      throw new CustomError(
        `A company with the name ${name} already exists.`,
        "CREATE_COMPANY_DUPLICATE",
        400
      );
    }

    // Check if company phone number already exists
    if (existingCompany && existingCompany.phone === phone) {
      console.log(phone);
      throw new CustomError(
        `A company with the phone number ${phone} already exists.`,
        "CREATE_COMPANY_DUPLICATE",
        400
      );
    }

    const company = new CompanyEntity();
    company.name = name;
    company.phone = phone;
    company.address = address;

    try {
      return await this.companyRepo.save(company);
    } catch (error) {
      throw new CustomError(error.message, "CREATE_COMPANY_FAILED", 400);
    }
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

  //  Delete a company
  async deleteCompany(id: number): Promise<CompanyEntity> {
    const company = await this.companyRepo.findOne({ where: { id } });

    if (!company) {
      throw new Error("Company not found");
    }

    await this.companyRepo.delete(company.id);

    return company;
  }

  //   Get a company by id
  async getCompany(id: number): Promise<CompanyEntity> {
    const company = await this.companyRepo
      .createQueryBuilder("company")
      .innerJoin("company.users", "users")
      .where("users.id = :id", { id })
      .getOne();

    // If company not found
    if (!company) {
      throw new Error("Company not found");
    }

    return company;
  }

  //   Get all companies
  async getCompanies(): Promise<CompanyEntity[]> {
    const companies = await this.companyRepo.find();

    if (!companies) {
      throw new Error("Company not found");
    }

    return companies;
  }
}
