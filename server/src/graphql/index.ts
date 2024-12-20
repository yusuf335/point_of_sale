import { mergeTypeDefs } from "@graphql-tools/merge";

// Import TypeDefs, Queries and Mutations
import { CompanyTypeDefs } from "./company/company.typeDefs";
import { StoreTypeDefs } from "./store/store.typeDefs";
import { UserTypeDefs } from "./user/user.typeDefs";
import { CategoryTypeDefs } from "./category/category.types";
import { ProductTypeDefs } from "./product/product.types";
import { RegisterTypeDefs } from "./register/register.types";
import { OrderTypeDefs } from "./order/order.types";
import { CartItemTypeDefs } from "./cartItem/cartItem.types";

//  Import Queries
import { companyQueries } from "./company/company.query";
import { storeQueries } from "./store/store.query";

// Import Mutations
import { companyMutations } from "./company/company.mutation";
import { storeMutations } from "./store/store.mutation";

export const typeDefs = mergeTypeDefs([
  CompanyTypeDefs,
  StoreTypeDefs,
  UserTypeDefs,
  CategoryTypeDefs,
  ProductTypeDefs,
  RegisterTypeDefs,
  OrderTypeDefs,
  CartItemTypeDefs,
]);

export const resolvers = {
  Query: {
    ...companyQueries,
    ...storeQueries,
  },
  Mutation: {
    ...companyMutations,
    ...storeMutations,
  },
};
