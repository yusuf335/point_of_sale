import { gql } from "graphql-tag";

export const CategoryTypeDefs = gql`
  type Query {
    "Category by ID for a Company"
    category(id: Int!): Category
    "List of Categories for a Company"
    categories: [Category]
  }

  "Category Type Definition for a Company Category"
  type Category {
    "Category ID"
    id: Int!
    "Category Name"
    name: String
    "Category Description"
    description: String
    "Category Company ID that the category belongs to"
    company: Company!
    "Category Creation Date"
    createdAt: String
    "Category Updated Date"
    updatedAt: String
  }
`;
