import { storeQueryResolvers } from "./query/store.query";

export const resolvers = {
  Query: {
    ...storeQueryResolvers,
  },
};
