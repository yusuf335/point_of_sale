import { gql } from "graphql-tag";

export const Query = gql`
  type Query {
    # Company
    company(id: ID!): Company
    companies: [Company]
    # Store
    store(id: ID!): Store
    stores: [Store]
    storeUsers(storeId: ID!): [User]
    # User
    user: User
    users: [User]
    userStores(userId: ID!): [Store]
    # Category
    category: Category
    categories: [Category]
    # Product
    product: Product
    # Register
    register: Register
    registers: [Register]
    # Order
    order: Order
    orders: [Order]
    # CartItem
    cartItems: [CartItem]
  }
`;
