import { gql } from "graphql-tag";

export const CompanyTypes = gql`
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
