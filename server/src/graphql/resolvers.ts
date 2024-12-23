import { mergeResolvers } from "@graphql-tools/merge";

//  Import Resolvers
import { authResolver } from "./schema/v1/auth/resolvers";
import { companyResolver } from "./schema/v1/company/resolvers";
import { storeResolver } from "./schema/v1/store/resolvers";
import { userResolver } from "./schema/v1/user/resolvers";
import { registerResolver } from "./schema/v1/register/resolvers";
import { productResolver } from "./schema/v1/product/resolvers";

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
