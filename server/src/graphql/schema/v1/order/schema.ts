import { gql } from "graphql-tag";

export const OrderTypeDefs = gql`
  type Query {
    "Order by ID for a Store"
    order(id: Int!): Order
    "List of Orders by Store"
    orders: [Order]
  }

  type Mutation {
    "Create an Order for a Store"
    createOrder(
      "Enter the total amount of the order"
      total: Float!
      "Enter the payment method for the order"
      paymentMethod: String!
      "Enter the status of the order"
      status: String!
      "Enter a message for the order"
      message: String!
      "Enter the Store ID for the order"
      store: Int!
      "Enter the Register ID for the order"
      register: Int!
    ): Order

    "Update an Order for a Store"
    updateOrder(
      "Enter Order ID"
      id: Int!
      "Enter the Order ID"
      total: Float
      "Enter the payment method for the order"
      paymentMethod: String
      "Enter the status of the order"
      status: String
      "Enter a message for the order"
      message: String
      "Enter the Store ID for the order"
      store: Int
      "Enter the Register ID for the order"
      register: Int
    ): Order

    "Delete an Order for a Store"
    deleteOrder(id: Int!): Boolean
  }

  "Order Type Definition for a Store Order"
  type Order {
    "Order ID"
    id: Int!
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
