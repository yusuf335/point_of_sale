import { gql } from "graphql-tag";

export const CartItemTypeDefs = gql`
  type Query {
    "Get all cart items by order ID"
    cartItemsByOrder(orderId: Int!): [CartItem]
  }

  type Mutation {
    "Create a Cart Item"
    createCartItem(
      "Product ID"
      productId: Int!
      "Product Name"
      name: String!
      "Product Price"
      price: Float!
      "Product Quantity"
      quantity: Int!
      "Store ID"
      store: Int!
      "Order ID"
      order: Int!
    ): CartItem

    "Update a Cart Item"
    updateCartItem(
      "Cart Item ID"
      id: Int!
      "Product Name"
      name: String!
      "Product Price"
      price: Float!
      "Product Quantity"
      quantity: Int!
      "Store ID"
      store: Int!
      "Order ID"
      order: Int!
    ): CartItem

    "Delete a Cart Item"
    deleteCartItem(id: Int!): Boolean
  }

  "Cart Item "
  type CartItem {
    "Cart Item ID"
    id: Int!
    "Product ID"
    productId: Int
    "Product Name"
    name: String
    "Product Price"
    price: Float
    "Product Quantity"
    quantity: Int
    "Total Price"
    totalPrice: Float
    "Order ID where the cart item belongs"
    order: Order!
    "Date and time when the cart item was created"
    createdAt: String
    "Date and time when the cart item was last updated"
    updatedAt: String
  }
`;
