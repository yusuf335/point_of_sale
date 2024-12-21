import { gql } from "graphql-tag";

export const OrderTypeDefs = gql`
  type Query {
    "Order by ID for a Store"
    order(id: ID!): Order
    "List of Orders by Store"
    orders: [Order]
  }

  "Order Type Definition for a Store Order"
  type Order {
    "Order ID"
    id: ID!
    "Total Amount of Order"
    total: Float
    "Payment Method"
    paymentMethod: String
    "Order Status"
    status: String
    "Order Message for payment or status"
    message: String
    "Store ID for Order"
    store: Store!
    "Register ID for Order "
    register: Register!
    "Order Creation Date"
    createdAt: String
    "Order Updated Date"
    updatedAt: String
  }
`;
