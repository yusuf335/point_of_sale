import { gql } from "graphql-tag";

export const CategoryTypeDefs = gql`
  type Query {
    # Category
    category: Category
    categories: [Category]
  }

  type Category {
    id: ID!
    name: String
    description: String
    store: Store!
    createdAt: String
    updatedAt: String
  }
`;
