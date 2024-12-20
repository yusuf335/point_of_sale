import { gql } from "graphql-tag";

export const Mutation = gql`
  type Mutation {
    # Company
    createCompany(name: String!, address: String!, phone: String!): Company

    # Store
    createStore(
      name: String!
      address: String!
      phone: String!
      maxRegisters: Int!
      companyId: Int!
    ): Store
  }
`;
