import { mergeResolvers } from "@graphql-tools/merge";

//  Import Resolvers
import { companyResolver } from "./company/resolvers";

// Export Resolvers
const resolvers = mergeResolvers([companyResolver]);

export default resolvers;
