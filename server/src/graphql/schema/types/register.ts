import { gql } from "graphql-tag";

export const Register = gql`
  type Register {
    id: ID!
    sessionStarted: String
    sessionEnded: String
    total: Float
    user: User
    store: Store
    orders: [Order]
    createdAt: String
    updatedAt: String
  }
`;
