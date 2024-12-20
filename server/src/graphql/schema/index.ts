import { mergeTypeDefs } from "@graphql-tools/merge";

import { Query } from "./query";
import { Company } from "./types/company";
import { Store } from "./types/store";
import { User } from "./types/user";
import { Category } from "./types/category";
import { Product } from "./types/product";
import { Register } from "./types/register";
import { Order } from "./types/order";
import { CartItem } from "./types/cartItem";

const typeDefs = mergeTypeDefs([
  Query,
  Company,
  Store,
  User,
  Category,
  Product,
  Register,
  Order,
  CartItem,
]);

export default typeDefs;
