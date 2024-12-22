import { verifyToken } from "./auth/jwt";
import { CustomError } from "./customError";

// Import DataSources
import { CompanyServices } from "../services/company.services";
import { StoreServices } from "../services/store.services";
import { UserServices } from "../services/user.services";
import { ProductService } from "../services/product.services";
import { RegisterService } from "../services/register.services";
import { CartItemService } from "../services/cartItem.services";

// Graphql DataSources
const dataSources = {
  companyAPI: CompanyServices.getInstance(),
  storeAPI: StoreServices.getInstance(),
  userAPI: UserServices.getInstance(),
  productAPI: ProductService.getInstance(),
  registerAPI: RegisterService.getInstance(),
  cartAPI: CartItemService.getInstance(),
};

export const graphQLContext = async ({ req }) => {
  const token = req.headers.authorization?.split(" ")[1];

  // Check if token is provided
  if (!token) throw new Error("No token provided");

  try {
    // Verify token
    const user = verifyToken(token) as {
      userId: string;
      role: string;
      isActive: boolean;
    };

    // Check if user is active in the token before proceeding to query the database
    if (!user.isActive)
      throw new CustomError("No token provided", "NO_TOKEN", 401);

    // Get User active info from database using the userId
    // In production Memory Database can be used and replace the real database for example Redis
    const userIsActive = await UserServices.getInstance().getUserRoleAndStatus(
      +user.userId
    );

    // Check if user is active or not from the database response
    if (!userIsActive.isActive)
      throw new CustomError("Account is inactive", "ACCOUNT_INACTIVE", 403);

    return {
      user,
      dataSources,
    };
  } catch (error) {
    if (error instanceof CustomError) {
      throw error; // Let Apollo handle this
    }
    throw new CustomError("Invalid token", "INVALID_TOKEN", 401);
  }
};
