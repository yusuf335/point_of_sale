import { gql } from "graphql-tag";

export const ProductTypeDefs = gql`
  type Query {
    "Product by ID for a Company"
    product(id: Int!): Product
    "List of Products for a Company"
    products: [Product]
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
