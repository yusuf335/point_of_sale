import { Resolvers } from "../../types";

export const productResolver: Resolvers = {
  Query: {
    product: async (_, { id }, { dataSources }) => {
      return await dataSources.productAPI.getProduct(id);
    },
    products: async (_, __, { dataSources }) => {
      return await dataSources.productAPI.getProducts();
    },
  },
  Mutation: {
    createProduct: async (
      _,
      { name, description, price, image, category, company },
      { dataSources }
    ) => {
      return await dataSources.productAPI.createProduct(
        name,
        description,
        price,

        image,
        category,
        company
      );
    },
    updateProduct: async (
      _,
      { id, name, description, price, image, category, company },
      { dataSources }
    ) => {
      return await dataSources.productAPI.updateProduct(
        id,
        name,
        description,
        price,
        image,
        category,
        company
      );
    },

    deleteProduct: async (_, { id }, { dataSources }) => {
      return await dataSources.productAPI.deleteProduct(id);
    },
  },
};
