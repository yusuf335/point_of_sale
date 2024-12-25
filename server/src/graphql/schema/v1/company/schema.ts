import { gql } from "graphql-tag";

export const CompanyTypeDefs = gql`
  extend type Query {
    "Get a Company by ID"
    company: Company

    "Get all Companies"
    companies: [Company]
  }

  extend type Mutation {
    "Create a new Company"
    createCompany(
      "Enter Company Name"
      name: String!
      "Enter Company Address"
      address: String!
      "Enter Company Phone"
      phone: String!
    ): Company

    "Update Company"
    updateCompany(
      "Enter Company ID"
      id: Int!
      "Enter Company Name"
      name: String!
      "Enter Company Address"
      address: String!
      "Enter Company Phone"
      phone: String!
    ): Company

    "Delete Company"
    deleteCompany("Enter Company ID" id: Int!): Company
  }

  "Company has many Stores, Users, Products, and Categories."
  type Company {
    "Company ID"
    id: Int!
    "Company Name"
    name: String
    "Company Address"
    address: String
    "Company Phone"
    phone: String
    "Company Stores"
    stores: [Store]
    "Users in Company"
    users: [User]
    "Products in Company"
    products: [Product]
    "Categories in Company"
    categories: [Category]
    "Company Created At"
    createdAt: String
    "Company Updated At"
    updatedAt: String
  }
`;
