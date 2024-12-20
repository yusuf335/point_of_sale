import { gql } from "graphql-tag";

export const CartItemTypeDefs = gql`
  type Query {
    # CartItem
    cartItems: [CartItem]
  }

  type CartItem {
    id: ID!
    productId: Int
    name: String
    price: Float
    quantity: Int
    store: Store
    order: Order
    createdAt: String
    updatedAt: String
  }
`;