import { AuthServices } from "../services/auth.services";
import { CompanyServices } from "../services/company.services";
import { StoreServices } from "../services/store.services";
import { UserServices } from "../services/user.services";
import { ProductService } from "../services/product.services";
import { RegisterService } from "../services/register.services";
import { CartItemService } from "../services/cartItem.services";

export type DataSourcesContext = {
  dataSources: {
    authAPI: AuthServices;
    companyAPI: CompanyServices;
    storeAPI: StoreServices;
    userAPI: UserServices;
    productAPI: ProductService;
    registerAPI: RegisterService;
    cartItemAPI: CartItemService;
  };
  userInfo?: {
    // Make userInfo optional
    userId: number;
    role: string;
    isActive: boolean;
  };
  error?: {
    message: string;
    code: string;
    statusCode: number;
  };
};
