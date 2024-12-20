//  Import Queries
import { companyQueries } from "./query/company.query";
import { storeQueries } from "./query/store.query";

// Import Mutations
import { companyMutations } from "./mutation/company.mutation";
import { storeMutations } from "./mutation/store.mutation";

export const resolvers = {
  Query: {
    ...companyQueries,
    ...storeQueries,
  },
  Mutation: {
    ...companyMutations,
    ...storeMutations,
  },
};
