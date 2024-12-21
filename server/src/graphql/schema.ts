import { mergeTypeDefs } from "@graphql-tools/merge";

// Import TypeDefs, Queries and Mutations
import { CompanyTypeDefs } from "./company/schema";
import { StoreTypeDefs } from "./store/store.typeDefs";
import { UserTypeDefs } from "./user/user.typeDefs";
import { CategoryTypeDefs } from "./category/category.typeDefs";
import { ProductTypeDefs } from "./product/product.typeDefs";
import { RegisterTypeDefs } from "./register/register.typeDefs";
import { OrderTypeDefs } from "./order/order.typeDefs";
import { CartItemTypeDefs } from "./cartItem/cartItem.typeDefs";

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

// This ensures typeDefs is a string containing the full schema.
export default typeDefs;
