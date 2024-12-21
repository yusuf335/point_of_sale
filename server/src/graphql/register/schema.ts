import { gql } from "graphql-tag";

export const RegisterTypeDefs = gql`
  type Query {
    "Register by ID for a Store"
    register(id: ID!): Register
    "List of Registers by Store"
    registers: [Register]
  }

  "Register Type Definition for a Store Register"
  type Register {
    "Register ID"
    id: ID!
    "Register Session Started"
    sessionStarted: String
    "Register Session Ended"
    sessionEnded: String
    "Register Total Amount"
    total: Float
    "User ID for Register"
    user: User!
    "Store ID for Register"
    store: Store!
    "List of Orders for Register"
    orders: [Order]
    "Register Creation Date"
    createdAt: String
    "Register Updated Date"
    updatedAt: String
  }
`;
