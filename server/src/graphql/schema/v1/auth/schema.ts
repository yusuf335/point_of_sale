import gql from "graphql-tag";

export const AuthTypeDefs = gql`
  type Query {
    login(email: String!, password: String!): Auth
  }

  type Mutation {
    signup(name: String!, email: String!, password: String!): Boolean
    forgotPassword(email: String!): Boolean
  }

  type AuthUser {
    userId: Int!
    role: String!
    isActive: Boolean!
  }

  type Auth {
    token: String
    user: AuthUser
  }
`;
