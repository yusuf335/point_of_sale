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

  type Mutation {
    "Create User for Admin"
    createUser(
      "Enter User Name"
      name: String!
      "Enter User Email"
      email: String!
      "Enter User Role"
      role: UserRole!
      "Enter User Company"
      companyId: Int!
      "Enter User Store"
      storeId: Int!
    ): User

    "Update User for Admin"
    updateUser(
      "Enter User ID"
      id: Int!
      "Enter User Name"
      name: String!
      "Enter User Email"
      email: String!
      "Enter User Role"
      role: UserRole!
      "Enter User Company"
      companyId: Int!
      "Enter User Store"
      storeId: Int!
    ): User

    "Delete User for Admin"
    deleteUser(id: Int!): User
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
