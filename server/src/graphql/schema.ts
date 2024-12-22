import { mergeTypeDefs } from "@graphql-tools/merge";

// Import TypeDefs, Queries and Mutations
import { CompanyTypeDefs } from "./schema/company/schema";
import { StoreTypeDefs } from "./schema/store/schema";
import { UserTypeDefs } from "./schema/user/schema";
import { CategoryTypeDefs } from "./schema/category/schema";
import { ProductTypeDefs } from "./schema/product/schema";
import { RegisterTypeDefs } from "./schema/register/schema";
import { OrderTypeDefs } from "./schema/order/schema";
import { CartItemTypeDefs } from "./schema/cartItem/schema";

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
