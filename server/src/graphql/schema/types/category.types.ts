import { gql } from "graphql-tag";

export const CategoryTypes = gql`
  type Category {
    id: ID!
    name: String
    description: String
    store: Store
    createdAt: String
    updatedAt: String
  }
`;
