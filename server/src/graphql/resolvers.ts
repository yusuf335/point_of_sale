import { mergeResolvers } from "@graphql-tools/merge";

//  Import Resolvers
import { companyResolver } from "./company/resolvers";
import { storeResolver } from "./store/resolvers";

// Export Resolvers
const resolvers = mergeResolvers([companyResolver, storeResolver]);

export default resolvers;
