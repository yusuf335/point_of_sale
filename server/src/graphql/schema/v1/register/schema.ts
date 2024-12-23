import { gql } from "graphql-tag";

export const RegisterTypeDefs = gql`
  scalar Date

  type Query {
    "Register by ID for a Store"
    registerByID(registerId: Int!): Register
    "List of Registers for a Store"
    registersByStore(storeId: Int!, userId: Int): [Register]
  }

  type Mutation {
    "Create a Register for a Store"
    createRegister(
      "Enter the User ID for the Register"
      user: Int!
      "Enter the Store ID for the Register"
      store: Int!
    ): Register

    "Update a Register for a Store"
    updateRegister(
      "Enter the Register ID"
      id: Int!
      "Enter the Register Session Ended"
      sessionEnded: String
      "Enter the Register Total Amount"
      total: Float
    ): Register

    "Delete a Register for a Store"
    deleteRegister(id: Int!): Register
  }

  "Register Type Definition for a Store Register"
  type Register {
    "Register ID"
    id: Int!
    "Register Session Started"
    sessionStarted: Date
    "Register Session Ended"
    sessionEnded: Date
    "Register Total Amount"
    total: Float
    "User ID for Register"
    user: User!
    "Store ID for Register"
    store: Store!
    "List of Orders for Register"
    orders: [Order]
  }
`;
