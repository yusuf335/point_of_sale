import gql from "graphql-tag";

export const typeDefs = gql`
  type Query {
    hello: String
    job: Job
  }

  type Job {
    id: ID!
    title: String!
    company: String!
    location: String!
    description: String!
    date: String!
  }
`;
