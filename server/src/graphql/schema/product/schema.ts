import { gql } from "graphql-tag";

export const ProductTypeDefs = gql`
  type Query {
    "Product by ID for a Company"
    product(id: Int!): Product
    "List of Products for a Company"
    products: [Product]
  }

  type Mutation {
    "Create a Product for a Company"
    createProduct(
      "Enter the Product Name"
      name: String!
      "Enter the Product Description"
      description: String!
      "Enter the Product Price"
      price: Float!
      "Enter the Product Image"
      image: String!
      "Enter the Product Category"
      category: Int!
      "Enter the Product Company ID"
      company: Int!
    ): Product

    "Update a Product for a Company"
    updateProduct(
      "Enter the Product ID"
      id: Int!
      "Enter the Product Name"
      name: String
      "Enter the Product Description"
      description: String
      "Enter the Product Price"
      price: Float
      "Enter the Product Image"
      image: String
      "Enter the Product Category"
      category: Int
      "Enter the Product Company ID"
      company: Int
    ): Product

    "Delete a Product for a Company"
    deleteProduct(id: Int!): Company
  }
  "Product Type Definition for a Company Product"
  type Product {
    "Product ID"
    id: Int!
    "Product Name"
    name: String
    "Product Description"
    description: String
    "Product Price"
    price: Float
    "Product Image"
    image: String
    "Product Category"
    category: Category!
    "Product Company ID "
    company: Company!
    "Product creation Date"
    createdAt: String
    "Product Updated Date"
    updatedAt: String
  }
`;
