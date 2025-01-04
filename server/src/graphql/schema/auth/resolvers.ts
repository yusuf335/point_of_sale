import { Resolvers } from "../../types";

export const authResolver: Resolvers = {
  Query: {
    login: async (_, { email, password }, { dataSources }) => {
      return dataSources.authAPI.login(email, password);
    },
  },

  Mutation: {
    signup: async (_, { name, email, password }, { dataSources }) => {
      return dataSources.authAPI.signup(name, email, password);
    },

    forgotPassword: async (_, { email }, { dataSources }) => {
      return dataSources.authAPI.forgotPassword(email);
    },
  },
};
