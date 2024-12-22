import { mergeResolvers } from "@graphql-tools/merge";

//  Import Resolvers
import { companyResolver } from "./company/resolvers";
import { storeResolver } from "./store/resolvers";
import { userResolver } from "./user/resolvers";

// Export Resolvers
const resolvers = mergeResolvers([
  companyResolver,
  storeResolver,
  userResolver,
]);

export default resolvers;
