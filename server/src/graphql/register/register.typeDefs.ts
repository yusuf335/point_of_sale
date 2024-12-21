import { gql } from "graphql-tag";

export const RegisterTypeDefs = gql`
  type Query {
    # Register
    register: Register
    registers: [Register]
  }

  type Register {
    id: ID!
    sessionStarted: String
    sessionEnded: String
    total: Float
    user: User!
    store: Store!
    orders: [Order]
    createdAt: String
    updatedAt: String
  }
`;
