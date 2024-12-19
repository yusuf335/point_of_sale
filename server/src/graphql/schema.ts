import gql from "graphql-tag";

export const typeDefs = gql`
  type Query {
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

  type Store {
    id: ID!
    name: String
    address: String
    phone: String
    maxRegisters: Int
    createdAt: String
    updatedAt: String
  }

  type User {
    id: ID!
    name: String
    email: String
    role: String
    store: [Store]
    isActive: Boolean
    isVerified: Boolean
    createdAt: String
    updatedAt: String
  }

  type Category {
    id: ID!
    name: String
    description: String
    store: Store
    createdAt: String
    updatedAt: String
  }

  type Product {
    id: ID!
    name: String
    description: String
    price: Float
    image: String
    stock: Int
    category: Category
    store: Store
    createdAt: String
    updatedAt: String
  }

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
