import { Resolvers } from "../../types";

export const authResolver: Resolvers = {
  Query: {
    category: async (_, { id }, { dataSources }) => {
      return null;
    },

    categories: async (_, __, { dataSources, userInfo }) => {
      return null;
    },
  },

  Mutation: {
    createCategory: async (_, { name, description }, { dataSources }) => {
      return null;
    },

    updateCategory: async (
      _,
      { id, name, description, company },
      { dataSources }
    ) => {
      return null;
    },
  },
};
