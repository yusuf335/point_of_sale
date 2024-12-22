import { gql } from "graphql-tag";

export const UserTypeDefs = gql`
  type Query {
    "User By ID for Admin"
    user(id: Int!): User
    "All Users for Admin"
    users: [User]
    "Get all user by Company ID"
    usersByCompany(companyId: Int!): [User]
    "Get all user by store ID"
    usersByStore(storeId: Int!): [User]
  }

  "User Role Enum"
  enum UserRole {
    ADMIN
    MANAGER
    CASHIER
  }

  "User Status Enum"
  enum UserStatus {
    ACTIVE
    INACTIVE
  }

  "User Schema"
  type User {
    "User ID"
    id: Int!
    "User Name"
    name: String
    "User Email"
    email: String
    "User Role"
    role: UserRole
    "User Company"
    company: Company
    "User Store"
    store: Store
    "User Active Status"
    isActive: UserStatus
    "User Verification Status"
    isVerified: Boolean
    "User Created At"
    createdAt: String
    "User Updated At"
    updatedAt: String
  }
`;
