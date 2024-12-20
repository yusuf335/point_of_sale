import { mergeTypeDefs } from "@graphql-tools/merge";

import { Query } from "./query";
import { CompanyTypes } from "./types/company.types";
import { StoreTypes } from "./types/store.types";
import { UserTypes } from "./types/user.types";
import { CategoryTypes } from "./types/category.types";
import { ProductTypes } from "./types/product.types";
import { RegisterTypes } from "./types/register.types";
import { OrderTypes } from "./types/order.types";
import { CartItemTypes } from "./types/cartItem.types";

const typeDefs = mergeTypeDefs([
  Query,
  CompanyTypes,
  StoreTypes,
  UserTypes,
  CategoryTypes,
  ProductTypes,
  RegisterTypes,
  OrderTypes,
  CartItemTypes,
]);

export default typeDefs;
