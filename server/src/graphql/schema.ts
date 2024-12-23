import { mergeTypeDefs } from "@graphql-tools/merge";

// Import TypeDefs, Queries and Mutations
import { CompanyTypeDefs } from "./schema/v1/company/schema";
import { StoreTypeDefs } from "./schema/v1/store/schema";
import { UserTypeDefs } from "./schema/v1/user/schema";
import { CategoryTypeDefs } from "./schema/v1/category/schema";
import { ProductTypeDefs } from "./schema/v1/product/schema";
import { RegisterTypeDefs } from "./schema/v1/register/schema";
import { OrderTypeDefs } from "./schema/v1/order/schema";
import { CartItemTypeDefs } from "./schema/v1/cartItem/schema";

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
