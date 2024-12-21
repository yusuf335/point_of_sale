import { gql } from "graphql-tag";

export const StoreTypeDefs = gql`
  type Query {
    # Store
    store(id: ID!): Store
    stores: [Store]
    storeUsers(storeId: ID!): [User]
  }

  type Mutation {
    # Store
    createStore(
      name: String!
      address: String!
      phone: String!
      maxRegisters: Int!
      companyId: Int!
    ): Store
  }

  type Store {
    id: ID!
    name: String
    address: String
    phone: String
    maxRegisters: Int
    company: Company!
    createdAt: String
    updatedAt: String
  }
`;
