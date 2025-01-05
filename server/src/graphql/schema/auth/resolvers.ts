import { withErrorHandling } from "../../../utils/withErrorHandling";
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

    changePassword: async (_, { token, password }, { dataSources }) => {
      return dataSources.authAPI.changePassword(token, password);
    },
  },
};
