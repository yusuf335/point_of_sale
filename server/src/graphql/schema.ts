import { mergeTypeDefs } from "@graphql-tools/merge";

// Import TypeDefs, Queries and Mutations
import { CompanyTypeDefs } from "./company/schema";
import { StoreTypeDefs } from "./store/schema";
import { UserTypeDefs } from "./user/schema";
import { CategoryTypeDefs } from "./category/schema";
import { ProductTypeDefs } from "./product/schema";
import { RegisterTypeDefs } from "./register/schema";
import { OrderTypeDefs } from "./order/schema";
import { CartItemTypeDefs } from "./cartItem/schema";

const typeDefs = mergeTypeDefs([
  CompanyTypeDefs,
  StoreTypeDefs,
  UserTypeDefs,
  CategoryTypeDefs,
  ProductTypeDefs,
  RegisterTypeDefs,
  OrderTypeDefs,
  CartItemTypeDefs,
]);

export default typeDefs;
