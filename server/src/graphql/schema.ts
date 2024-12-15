import { buildSchema } from "graphql";

export const schema = buildSchema(`#graphql
  type Query {
    hello: String
    job: Job
  }

  type Job{
    id: ID!
    title: String!
    company: String!
    location: String!
    description: String!
    date: String!
  }
`);
