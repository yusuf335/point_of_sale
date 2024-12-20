import { gql } from "graphql-tag";

export const Category = gql`
  type Category {
    id: ID!
    name: String
    description: String
    store: Store
    createdAt: String
    updatedAt: String
  }
`;
