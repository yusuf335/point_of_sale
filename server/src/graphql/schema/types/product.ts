import { gql } from "graphql-tag";

export const Product = gql`
  type Product {
    id: ID!
    name: String
    description: String
    price: Float
    image: String
    stock: Int
    category: Category
    store: Store
    createdAt: String
    updatedAt: String
  }
`;
