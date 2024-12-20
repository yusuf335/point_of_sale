import { gql } from "graphql-tag";

export const OrderTypeDefs = gql`
  type Query {
    # Order
    order: Order
    orders: [Order]
  }

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
