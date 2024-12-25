import { mergeResolvers } from "@graphql-tools/merge";

//  Import Resolvers
import { authResolver } from "./schema/auth/resolvers";
import { companyResolver } from "./schema/company/resolvers";
import { storeResolver } from "./schema/store/resolvers";
import { userResolver } from "./schema/user/resolvers";
import { registerResolver } from "./schema/register/resolvers";
import { productResolver } from "./schema/product/resolvers";

// Export Resolvers
const resolvers = mergeResolvers([
  authResolver,
  companyResolver,
  storeResolver,
  userResolver,
  registerResolver,
  productResolver,
]);

export default resolvers;
