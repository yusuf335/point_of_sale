import { gql } from "graphql-tag";

export const CategoryTypeDefs = gql`
  type Query {
    "Category by ID for a Company"
    category(id: Int!): Category
    "List of Categories for a Company"
    categories: [Category]
  }

  type Mutation {
    "Create a Category for a Company"
    createCategory(
      "Enter the Category Name"
      name: String!
      "Enter the Category Description"
      description: String!
      "Enter the Category Company ID"
      company: Int!
    ): Category

    "Update a Category for a Company"
    updateCategory(
      "Enter Category ID"
      id: Int!
      "Enter the Category Name"
      name: String
      "Enter the Category Name"
      description: String
      "Enter the Category Description"
      company: Int!
    ): Category

    "Delete a Category for a Company"
    deleteCategory(id: Int!): Boolean
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
