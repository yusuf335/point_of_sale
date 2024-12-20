import { gql } from "graphql-tag";

export const User = gql`
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
