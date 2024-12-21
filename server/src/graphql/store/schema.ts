import { gql } from "graphql-tag";

export const StoreTypeDefs = gql`
  type Query {
    "Get a Store by ID"
    store(id: ID!): Store
    "Get all Stores for a Company by Company ID"
    stores(companyID: ID!): [Store]
    "Get all Users in a Store"
    storeUsers(storeId: ID!): [User]
  }

  type Mutation {
    "Create a new Store by Admin."
    createStore(
      "Enter Store Name"
      name: String!
      "Enter Store Address"
      address: String!
      "Enter Store Phone"
      phone: String!
      "Enter Store Max Registers. Which is the maximum number of registers that can be created in the store."
      maxRegisters: Int!
      "Enter Company ID that the store belongs to"
      companyId: Int!
    ): Store
  }

  "Store belongs to a Company and has many Users, Products, Categories, Registers, Orders, and CartItems."
  type Store {
    "Store ID"
    id: ID!
    "Store Name"
    name: String
    "Store Address"
    address: String
    "Store Phone"
    phone: String
    "Store Max Registers. Which is the maximum number of registers that can be created in the store."
    maxRegisters: Int
    "Store Company ID that the store belongs to"
    company: Company!
    "Store Created At"
    createdAt: String
    "Store Updated At"
    updatedAt: String
  }
`;
