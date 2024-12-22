import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "./dist/graphql/schema.js",
  generates: {
    "./src/graphql/types.ts": {
      plugins: ["typescript", "typescript-resolvers"],
      config: {
        contextType: "./context#DataSourcesContext",
        scalars: {
          Date: "Date", // Map the custom scalar to a TypeScript type
        },
      },
    },
  },
};

export default config;
