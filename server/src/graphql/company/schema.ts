import { gql } from "graphql-tag";

export const CompanyTypeDefs = gql`
  extend type Query {
    # Company
    company(id: ID!): Company
    companies: [Company]
  }

  extend type Mutation {
    # Company
    createCompany(name: String!, address: String!, phone: String!): Company
  }

  type Company {
    id: ID!
    name: String
    address: String
    phone: String
    stores: [Store]
    users: [User]
    products: [Product]
    categories: [Category]
    createdAt: String
    updatedAt: String
  }
`;
