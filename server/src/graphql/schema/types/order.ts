import { gql } from "graphql-tag";

export const Order = gql`
  type Order {
    id: ID!
    total: Float
    paymentMethod: String
    status: String
    message: String
    store: Store
    register: Register
    createdAt: String
    updatedAt: String
  }
`;
