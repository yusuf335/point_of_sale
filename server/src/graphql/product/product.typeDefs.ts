import { gql } from "graphql-tag";

export const ProductTypeDefs = gql`
  type Query {
    # Product
    product: Product
  }

  type Product {
    id: ID!
    name: String
    description: String
    price: Float
    image: String
    stock: Int
    category: Category!
    store: Store!
    createdAt: String
    updatedAt: String
  }
`;
