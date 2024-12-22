import { CompanyServices } from "../services/company.services";
import { StoreServices } from "../services/store.services";
import { UserServices } from "../services/user.services";

export type DataSourcesContext = {
  dataSources: {
    companyAPI: CompanyServices;
    storeAPI: StoreServices;
    userAPI: UserServices;
  };
};
