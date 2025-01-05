import gql from "graphql-tag";

export const AuthTypeDefs = gql`
  type Query {
    login(email: String!, password: String!): Auth
  }

  type Mutation {
    signup(name: String!, email: String!, password: String!): Auth
    forgotPassword(email: String!): Boolean
    changePassword(token: String!, password: String!): Boolean
  }

  type Auth {
    jwtToken: String
  }
`;
