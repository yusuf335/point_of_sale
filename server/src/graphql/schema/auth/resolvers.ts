import { CustomError } from "../../../utils/customError";
import { Resolvers } from "../../types";

export const authResolver: Resolvers = {
  Query: {
    login: async (_, { email, password }, { dataSources }) => {
      return dataSources.authAPI.login(email, password);
    },
  },

  Mutation: {
    signup: async (
      _,
      { name, email, password, companyName, companyAddress, companyPhone },
      { dataSources, error }
    ) => {
      try {
        // Step 1: Sign up the user
        const user = await dataSources.authAPI.signup(name, email, password);

        if (!user) {
          throw new CustomError("Failed to create user.", "SIGNUP_FAILED", 400);
        }

        // Step 2: Create the company
        const company = await dataSources.companyAPI.createCompany(
          companyName,
          companyAddress,
          companyPhone
        );

        if (!company) {
          throw new CustomError(
            "Failed to create company.",
            "SIGNUP_FAILED",
            400
          );
        }

        // Step 3: Assign the user to the company
        await dataSources.userAPI.updateUsersByCompany(user.id, company.id);

        // Step 4: Return the user (or Auth object) as needed
        return {
          jwtToken: user.jwtToken,
        };
      } catch (error) {
        console.error("Error during signup:", error);
        throw new CustomError(error.message, error.code, error.statusCode);
      }
    },

    forgotPassword: async (_, { email }, { dataSources }) => {
      return dataSources.authAPI.forgotPassword(email);
    },
  },
};
