import { CustomError } from "./customError";

export const withErrorHandling =
  (resolver: Function) =>
  async (parent: any, args: any, context: any, info: any) => {
    const { error } = context;

    // Automatically handle errors from the context
    if (error) {
      throw new CustomError(error.message, error.code, error.statusCode);
    }

    try {
      // Execute the original resolver
      return await resolver(parent, args, context, info);
    } catch (err) {
      if (err instanceof CustomError) {
        throw err; // Re-throw CustomError directly
      }

      console.error("Unexpected error:", err);
      throw new CustomError(
        "An unexpected error occurred",
        "INTERNAL_SERVER_ERROR",
        500
      );
    }
  };
