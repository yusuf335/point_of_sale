/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** Custom scalar type for Date */
  Date: { input: any; output: any; }
};

export type Auth = {
  __typename?: 'Auth';
  jwtToken?: Maybe<Scalars['String']['output']>;
};

/** Cart Item  */
export type CartItem = {
  __typename?: 'CartItem';
  /** Date and time when the cart item was created */
  createdAt?: Maybe<Scalars['String']['output']>;
  /** Cart Item ID */
  id: Scalars['Int']['output'];
  /** Product Name */
  name?: Maybe<Scalars['String']['output']>;
  /** Order ID where the cart item belongs */
  order: Order;
  /** Product Price */
  price?: Maybe<Scalars['Float']['output']>;
  /** Product ID */
  productId?: Maybe<Scalars['Int']['output']>;
  /** Product Quantity */
  quantity?: Maybe<Scalars['Int']['output']>;
  /** Total Price */
  totalPrice?: Maybe<Scalars['Float']['output']>;
  /** Date and time when the cart item was last updated */
  updatedAt?: Maybe<Scalars['String']['output']>;
};

/** Category Type Definition for a Company Category */
export type Category = {
  __typename?: 'Category';
  /** Category Company ID that the category belongs to */
  company: Company;
  /** Category Creation Date */
  createdAt?: Maybe<Scalars['String']['output']>;
  /** Category Description */
  description?: Maybe<Scalars['String']['output']>;
  /** Category ID */
  id: Scalars['Int']['output'];
  /** Category Name */
  name?: Maybe<Scalars['String']['output']>;
  /** Category Updated Date */
  updatedAt?: Maybe<Scalars['String']['output']>;
};

/** Company has many Stores, Users, Products, and Categories. */
export type Company = {
  __typename?: 'Company';
  /** Company Address */
  address?: Maybe<Scalars['String']['output']>;
  /** Categories in Company */
  categories?: Maybe<Array<Maybe<Category>>>;
  /** Company Created At */
  createdAt?: Maybe<Scalars['String']['output']>;
  /** Company ID */
  id: Scalars['Int']['output'];
  /** Company Name */
  name?: Maybe<Scalars['String']['output']>;
  /** Company Phone */
  phone?: Maybe<Scalars['String']['output']>;
  /** Products in Company */
  products?: Maybe<Array<Maybe<Product>>>;
  /** Company Stores */
  stores?: Maybe<Array<Maybe<Store>>>;
  /** Company Updated At */
  updatedAt?: Maybe<Scalars['String']['output']>;
  /** Users in Company */
  users?: Maybe<Array<Maybe<User>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Create a Cart Item */
  createCartItem?: Maybe<CartItem>;
  /** Create a Category for a Company */
  createCategory?: Maybe<Category>;
  /** Create a new Company */
  createCompany?: Maybe<Company>;
  /** Create an Order for a Store */
  createOrder?: Maybe<Order>;
  /** Create a Product for a Company */
  createProduct?: Maybe<Product>;
  /** Create a Register for a Store */
  createRegister?: Maybe<Register>;
  /** Create a new Store by Admin. */
  createStore?: Maybe<Store>;
  /** Create User for Admin */
  createUser?: Maybe<User>;
  /** Delete a Cart Item */
  deleteCartItem?: Maybe<Scalars['Boolean']['output']>;
  /** Delete a Category for a Company */
  deleteCategory?: Maybe<Scalars['Boolean']['output']>;
  /** Delete Company */
  deleteCompany?: Maybe<Company>;
  /** Delete an Order for a Store */
  deleteOrder?: Maybe<Scalars['Boolean']['output']>;
  /** Delete a Product for a Company */
  deleteProduct?: Maybe<Company>;
  /** Delete a Register for a Store */
  deleteRegister?: Maybe<Register>;
  /** Delete a Store by Admin. */
  deleteStore?: Maybe<Store>;
  /** Delete User for Admin */
  deleteUser?: Maybe<User>;
  forgotPassword?: Maybe<Scalars['Boolean']['output']>;
  signup?: Maybe<Auth>;
  /** Update a Cart Item */
  updateCartItem?: Maybe<CartItem>;
  /** Update a Category for a Company */
  updateCategory?: Maybe<Category>;
  /** Update Company */
  updateCompany?: Maybe<Company>;
  /** Update an Order for a Store */
  updateOrder?: Maybe<Order>;
  /** Update a Product for a Company */
  updateProduct?: Maybe<Product>;
  /** Update a Register for a Store */
  updateRegister?: Maybe<Register>;
  /** Update a Store by Admin. */
  updateStore?: Maybe<Store>;
  /** Update User for Admin */
  updateUser?: Maybe<User>;
};


export type MutationCreateCartItemArgs = {
  name: Scalars['String']['input'];
  order: Scalars['Int']['input'];
  price: Scalars['Float']['input'];
  productId: Scalars['Int']['input'];
  quantity: Scalars['Int']['input'];
  store: Scalars['Int']['input'];
};


export type MutationCreateCategoryArgs = {
  company: Scalars['Int']['input'];
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
};


export type MutationCreateCompanyArgs = {
  address: Scalars['String']['input'];
  name: Scalars['String']['input'];
  phone: Scalars['String']['input'];
};


export type MutationCreateOrderArgs = {
  message: Scalars['String']['input'];
  paymentMethod: Scalars['String']['input'];
  register: Scalars['Int']['input'];
  status: Scalars['String']['input'];
  store: Scalars['Int']['input'];
  total: Scalars['Float']['input'];
};


export type MutationCreateProductArgs = {
  category: Scalars['Int']['input'];
  company: Scalars['Int']['input'];
  description: Scalars['String']['input'];
  image: Scalars['String']['input'];
  name: Scalars['String']['input'];
  price: Scalars['Float']['input'];
};


export type MutationCreateRegisterArgs = {
  store: Scalars['Int']['input'];
  user: Scalars['Int']['input'];
};


export type MutationCreateStoreArgs = {
  address: Scalars['String']['input'];
  companyId: Scalars['Int']['input'];
  maxRegisters: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  phone: Scalars['String']['input'];
};


export type MutationCreateUserArgs = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  role: UserRole;
  storeId?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationDeleteCartItemArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteCompanyArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteOrderArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteProductArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteRegisterArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteStoreArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['Int']['input'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String']['input'];
};


export type MutationSignupArgs = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationUpdateCartItemArgs = {
  id: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  order: Scalars['Int']['input'];
  price: Scalars['Float']['input'];
  quantity: Scalars['Int']['input'];
  store: Scalars['Int']['input'];
};


export type MutationUpdateCategoryArgs = {
  company: Scalars['Int']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateCompanyArgs = {
  address: Scalars['String']['input'];
  id: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  phone: Scalars['String']['input'];
};


export type MutationUpdateOrderArgs = {
  id: Scalars['Int']['input'];
  message?: InputMaybe<Scalars['String']['input']>;
  paymentMethod?: InputMaybe<Scalars['String']['input']>;
  register?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  store?: InputMaybe<Scalars['Int']['input']>;
  total?: InputMaybe<Scalars['Float']['input']>;
};


export type MutationUpdateProductArgs = {
  category?: InputMaybe<Scalars['Int']['input']>;
  company?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
};


export type MutationUpdateRegisterArgs = {
  id: Scalars['Int']['input'];
  sessionEnded?: InputMaybe<Scalars['String']['input']>;
  total?: InputMaybe<Scalars['Float']['input']>;
};


export type MutationUpdateStoreArgs = {
  address: Scalars['String']['input'];
  id: Scalars['Int']['input'];
  maxRegisters: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  phone: Scalars['String']['input'];
};


export type MutationUpdateUserArgs = {
  companyId: Scalars['Int']['input'];
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  role: UserRole;
  storeId: Scalars['Int']['input'];
};

/** Order Type Definition for a Store Order */
export type Order = {
  __typename?: 'Order';
  /** Order Creation Date */
  createdAt?: Maybe<Scalars['String']['output']>;
  /** Order ID */
  id: Scalars['Int']['output'];
  /** Order Message for payment or status */
  message?: Maybe<Scalars['String']['output']>;
  /** Payment Method */
  paymentMethod?: Maybe<Scalars['String']['output']>;
  /** Register ID for Order  */
  register: Register;
  /** Order Status */
  status?: Maybe<Scalars['String']['output']>;
  /** Store ID for Order */
  store: Store;
  /** Total Amount of Order */
  total?: Maybe<Scalars['Float']['output']>;
  /** Order Updated Date */
  updatedAt?: Maybe<Scalars['String']['output']>;
};

/** Product Type Definition for a Company Product */
export type Product = {
  __typename?: 'Product';
  /** Product Category */
  category: Category;
  /** Product Company ID  */
  company: Company;
  /** Product creation Date */
  createdAt?: Maybe<Scalars['String']['output']>;
  /** Product Description */
  description?: Maybe<Scalars['String']['output']>;
  /** Product ID */
  id: Scalars['Int']['output'];
  /** Product Image */
  image?: Maybe<Scalars['String']['output']>;
  /** Product Name */
  name?: Maybe<Scalars['String']['output']>;
  /** Product Price */
  price?: Maybe<Scalars['Float']['output']>;
  /** Product Updated Date */
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  /** Get all cart items by order ID */
  cartItemsByOrder?: Maybe<Array<Maybe<CartItem>>>;
  /** List of Categories for a Company */
  categories?: Maybe<Array<Maybe<Category>>>;
  /** Category by ID for a Company */
  category?: Maybe<Category>;
  /** Get all Companies */
  companies?: Maybe<Array<Maybe<Company>>>;
  /** Get a Company by ID */
  company?: Maybe<Company>;
  login?: Maybe<Auth>;
  /** Order by ID for a Store */
  order?: Maybe<Order>;
  /** List of Orders by Store */
  orders?: Maybe<Array<Maybe<Order>>>;
  /** Product by ID for a Company */
  product?: Maybe<Product>;
  /** List of Products for a Company */
  products?: Maybe<Array<Maybe<Product>>>;
  /** Register by ID for a Store */
  registerByID?: Maybe<Register>;
  /** List of Registers for a Store */
  registersByStore?: Maybe<Array<Maybe<Register>>>;
  /** Get a Store by ID */
  store?: Maybe<Store>;
  /** Get all Stores for a Company by Company ID */
  stores?: Maybe<Array<Maybe<Store>>>;
  /** User By ID for User */
  userById?: Maybe<User>;
  /** All Users for Admin */
  users?: Maybe<Array<Maybe<User>>>;
  /** Get all user by Company ID */
  usersByCompany?: Maybe<Array<Maybe<User>>>;
  /** Get all user by store ID */
  usersByStore?: Maybe<Array<Maybe<User>>>;
};


export type QueryCartItemsByOrderArgs = {
  orderId: Scalars['Int']['input'];
};


export type QueryCategoryArgs = {
  id: Scalars['Int']['input'];
};


export type QueryLoginArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type QueryOrderArgs = {
  id: Scalars['Int']['input'];
};


export type QueryProductArgs = {
  id: Scalars['Int']['input'];
};


export type QueryRegisterByIdArgs = {
  registerId: Scalars['Int']['input'];
};


export type QueryRegistersByStoreArgs = {
  storeId: Scalars['Int']['input'];
  userId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryStoreArgs = {
  id: Scalars['Int']['input'];
};


export type QueryStoresArgs = {
  companyID: Scalars['Int']['input'];
};


export type QueryUserByIdArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryUsersByCompanyArgs = {
  companyId: Scalars['Int']['input'];
};


export type QueryUsersByStoreArgs = {
  storeId: Scalars['Int']['input'];
};

/** Register Type Definition for a Store Register */
export type Register = {
  __typename?: 'Register';
  /** Register ID */
  id: Scalars['Int']['output'];
  /** List of Orders for Register */
  orders?: Maybe<Array<Maybe<Order>>>;
  /** Register Session Ended */
  sessionEnded?: Maybe<Scalars['Date']['output']>;
  /** Register Session Started */
  sessionStarted?: Maybe<Scalars['Date']['output']>;
  /** Store ID for Register */
  store: Store;
  /** Register Total Amount */
  total?: Maybe<Scalars['Float']['output']>;
  /** User ID for Register */
  user: User;
};

/** Store belongs to a Company and has many Users, Products, Categories, Registers, Orders, and CartItems. */
export type Store = {
  __typename?: 'Store';
  /** Store Address */
  address?: Maybe<Scalars['String']['output']>;
  /** Store Company ID that the store belongs to */
  company: Company;
  /** Store Created At */
  createdAt?: Maybe<Scalars['String']['output']>;
  /** Store ID */
  id: Scalars['Int']['output'];
  /** Store Max Registers. Which is the maximum number of registers that can be created in the store. */
  maxRegisters?: Maybe<Scalars['Int']['output']>;
  /** Store Name */
  name?: Maybe<Scalars['String']['output']>;
  /** Store Phone */
  phone?: Maybe<Scalars['String']['output']>;
  /** Store Updated At */
  updatedAt?: Maybe<Scalars['String']['output']>;
};

/** User Schema */
export type User = {
  __typename?: 'User';
  /** User Company */
  company?: Maybe<Company>;
  /** User Created At */
  createdAt?: Maybe<Scalars['String']['output']>;
  /** User Email */
  email?: Maybe<Scalars['String']['output']>;
  /** User ID */
  id: Scalars['Int']['output'];
  /** User Active Status */
  isActive?: Maybe<Scalars['Boolean']['output']>;
  /** User Verification Status */
  isVerified?: Maybe<Scalars['Boolean']['output']>;
  /** User Name */
  name?: Maybe<Scalars['String']['output']>;
  /** User Role */
  role?: Maybe<UserRole>;
  /** User Store */
  store?: Maybe<Store>;
  /** User Updated At */
  updatedAt?: Maybe<Scalars['String']['output']>;
};

/** User Role Enum */
export enum UserRole {
  Admin = 'ADMIN',
  Cashier = 'CASHIER',
  Manager = 'MANAGER'
}

export type ForgotPasswordMutationVariables = Exact<{
  email: Scalars['String']['input'];
}>;


export type ForgotPasswordMutation = { __typename?: 'Mutation', forgotPassword?: boolean | null };

export type LoginQueryVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginQuery = { __typename?: 'Query', login?: { __typename?: 'Auth', jwtToken?: string | null } | null };

export type SingUpMutationVariables = Exact<{
  name: Scalars['String']['input'];
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type SingUpMutation = { __typename?: 'Mutation', signup?: { __typename?: 'Auth', jwtToken?: string | null } | null };


export const ForgotPasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ForgotPassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"forgotPassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}}]}]}}]} as unknown as DocumentNode<ForgotPasswordMutation, ForgotPasswordMutationVariables>;
export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"jwtToken"}}]}}]}}]} as unknown as DocumentNode<LoginQuery, LoginQueryVariables>;
export const SingUpDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SingUp"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signup"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"jwtToken"}}]}}]}}]} as unknown as DocumentNode<SingUpMutation, SingUpMutationVariables>;