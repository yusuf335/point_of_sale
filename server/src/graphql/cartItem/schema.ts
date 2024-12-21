import { gql } from "graphql-tag";

export const CartItemTypeDefs = gql`
  type Query {
    "Get all cart items"
    cartItems: [CartItem]
  }

  "Cart Item "
  type CartItem {
    "Cart Item ID"
    id: ID!
    "Product ID"
    productId: Int
    "Product Name"
    name: String
    "Product Price"
    price: Float
    "Product Quantity"
    quantity: Int
    "Store ID where the product is located"
    store: Store!
    "Order ID where the cart item belongs"
    order: Order!
    "Date and time when the cart item was created"
    createdAt: String
    "Date and time when the cart item was last updated"
    updatedAt: String
  }
`;
