import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "http://localhost:4000/graphql",
  documents: ["app/**/*.tsx"],
  generates: {
    "./app/lib/__generated__/": {
      preset: "client",
      presetConfig: {
        gqlTagName: "gql",
      },
    },
    "./app/lib/__generated__/types.ts": {
      plugins: ["typescript", "typescript-operations"],
    },
  },
  ignoreNoDocuments: true,
};

export default config;
