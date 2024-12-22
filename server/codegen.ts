import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "./dist/graphql/schema.js",
  generates: {
    "./src/graphql/types.ts": {
      plugins: ["typescript", "typescript-resolvers"],
      config: {
        contextType: "./context#DataSourcesContext",
      },
    },
  },
};

export default config;
