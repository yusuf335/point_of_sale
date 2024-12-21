import { gql } from "graphql-tag";

export const CompanyTypeDefs = gql`
  extend type Query {
    "Get a Company by ID"
    company(id: ID!): Company
    "Get all Companies for Super Admin"
    companies: [Company]
  }

  extend type Mutation {
    "Create a new Company by Super Admin"
    createCompany(
      "Enter Company Name"
      name: String!
      "Enter Company Address"
      address: String!
      "Enter Company Phone"
      phone: String!
    ): Company
  }

  "Company has many Stores, Users, Products, and Categories."
  type Company {
    "Company ID"
    id: ID!
    "Company Name"
    name: String
    "Company Address"
    address: String
    "Company Phone"
    phone: String
    "Company Stores"
    stores: [Store]
    "Company Users"
    users: [User]
    "Company Products"
    products: [Product]
    "Company Categories"
    categories: [Category]
    "Company Created At"
    createdAt: String
    "Company Updated At"
    updatedAt: String
  }
`;
