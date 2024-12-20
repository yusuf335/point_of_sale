import { storeResolvers } from "./query/store";

export const resolvers = {
  Query: {
    ...storeResolvers,
  },
};
