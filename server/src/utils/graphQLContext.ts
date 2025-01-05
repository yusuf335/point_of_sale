import { verifyToken } from "./auth/jwt";
import { CustomError } from "./customError";

// Import DataSources
import { AuthServices } from "../services/auth.services";
import { CompanyServices } from "../services/company.services";
import { StoreServices } from "../services/store.services";
import { UserServices } from "../services/user.services";
import { ProductService } from "../services/product.services";
import { RegisterService } from "../services/register.services";
import { CartItemService } from "../services/cartItem.services";
import { error } from "console";
import { userInfo } from "os";
import e from "express";

// Graphql DataSources
const dataSources = {
  authAPI: AuthServices.getInstance(),
  companyAPI: CompanyServices.getInstance(),
  storeAPI: StoreServices.getInstance(),
  userAPI: UserServices.getInstance(),
  productAPI: ProductService.getInstance(),
  registerAPI: RegisterService.getInstance(),
  cartAPI: CartItemService.getInstance(),
};

// Pulic GraphQL DataSources
const publicDataSources = {
  authAPI: AuthServices.getInstance(),
};

export const graphQLContext = async ({ req }) => {
  // Get token from the request cookies
  let token = undefined;

  if (req.cookies) {
    token = req.cookies.token;
  } else {
    token = req.headers.authorization?.split(" ")[1];
  }

  if (!token) {
    return {
      userInfo: null,
      dataSources: publicDataSources,
      error: new CustomError(
        "Authorization token is required",
        "TOKEN_MISSING",
        401
      ),
    };
  }

  try {
    // Verify token
    const user = verifyToken(token) as {
      userId: string;
      role: string;
      isActive: boolean;
    };

    // Check if user is active from the token
    if (!user.isActive) {
      throw new CustomError("Account is inactive", "ACCOUNT_INACTIVE", 403);
    }

    // Verify user status from the database
    const userIsActive = await UserServices.getInstance().getUserRoleAndStatus(
      +user.userId
    );

    if (!userIsActive.isActive) {
      throw new CustomError("Account is inactive", "ACCOUNT_INACTIVE", 403);
    }

    return {
      userInfo: user,
      dataSources,
      error: null,
    };
  } catch (error) {
    if (error instanceof CustomError) {
      return {
        dataSources: publicDataSources,
        error, // Include the error for unprotected API clients
      };
    }

    console.error("Token verification error:", error.message);

    return {
      userInfo: null,
      dataSources: publicDataSources,
      error: new CustomError(
        "Invalid authorization token",
        "TOKEN_INVALID",
        401
      ),
    };
  }
};
