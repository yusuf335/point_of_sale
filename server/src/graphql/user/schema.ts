import { gql } from "graphql-tag";

export const UserTypeDefs = gql`
  type Query {
    "User By ID for Admin"
    user(id: ID!): User
    "All Users for Admin"
    users: [User]
    "User By ID for User and Store"
    userByStore(userId: ID!): [User]
  }

  "User Schema"
  type User {
    "User ID"
    id: ID!
    "User Name"
    name: String
    "User Email"
    email: String
    "User Role"
    role: String
    "User Company"
    company: Company!
    "User Store"
    store: Store
    "User Active Status"
    isActive: Boolean
    "User Verification Status"
    isVerified: Boolean
    "User Created At"
    createdAt: String
    "User Updated At"
    updatedAt: String
  }
`;
