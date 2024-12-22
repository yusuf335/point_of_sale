import { mergeResolvers } from "@graphql-tools/merge";

//  Import Resolvers
import { companyResolver } from "./company/resolvers";
import { storeResolver } from "./store/resolvers";
import { userResolver } from "./user/resolvers";
import { registerResolver } from "./register/resolvers";
import { productResolver } from "./product/resolvers";

// Export Resolvers
const resolvers = mergeResolvers([
  companyResolver,
  storeResolver,
  userResolver,
  registerResolver,
  productResolver,
]);

export default resolvers;
