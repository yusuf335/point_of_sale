import { gql } from "graphql-tag";

export const StoreTypes = gql`
  type Store {
    id: ID!
    name: String
    address: String
    phone: String
    maxRegisters: Int
    createdAt: String
    updatedAt: String
  }
`;
