const { GraphQLScalarType, Kind } = require("graphql");

export const DateScalar = new GraphQLScalarType({
  name: "Date",
  description: "Custom scalar type for Date",
  serialize(value) {
    // Convert outgoing Date to ISO string
    return value instanceof Date ? value.toISOString() : null;
  },
  parseValue(value) {
    // Convert incoming ISO string to Date
    return value ? new Date(value) : null;
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.STRING) {
      return new Date(ast.value); // Convert hard-coded AST string to Date
    }
    return null; // Invalid hard-coded value
  },
});
