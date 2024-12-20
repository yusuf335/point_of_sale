import { gql } from "graphql-tag";

export const UserTypeDefs = gql`
  type Query {
    # User
    user: User
    users: [User]
    userStores(userId: ID!): [Store]
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
`;
