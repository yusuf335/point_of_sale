import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { DataSourcesContext } from './context';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: Date; output: Date; }
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
  changePassword?: Maybe<Scalars['Boolean']['output']>;
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


export type MutationChangePasswordArgs = {
  password: Scalars['String']['input'];
  token: Scalars['String']['input'];
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
  /** Get user role and status */
  getUserRoleAndStatus?: Maybe<User>;
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


export type QueryUserByIdArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
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



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Auth: ResolverTypeWrapper<Auth>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  CartItem: ResolverTypeWrapper<CartItem>;
  Category: ResolverTypeWrapper<Category>;
  Company: ResolverTypeWrapper<Company>;
  Date: ResolverTypeWrapper<Scalars['Date']['output']>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  Order: ResolverTypeWrapper<Order>;
  Product: ResolverTypeWrapper<Product>;
  Query: ResolverTypeWrapper<{}>;
  Register: ResolverTypeWrapper<Register>;
  Store: ResolverTypeWrapper<Store>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  User: ResolverTypeWrapper<User>;
  UserRole: UserRole;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Auth: Auth;
  Boolean: Scalars['Boolean']['output'];
  CartItem: CartItem;
  Category: Category;
  Company: Company;
  Date: Scalars['Date']['output'];
  Float: Scalars['Float']['output'];
  Int: Scalars['Int']['output'];
  Mutation: {};
  Order: Order;
  Product: Product;
  Query: {};
  Register: Register;
  Store: Store;
  String: Scalars['String']['output'];
  User: User;
};

export type AuthResolvers<ContextType = DataSourcesContext, ParentType extends ResolversParentTypes['Auth'] = ResolversParentTypes['Auth']> = {
  jwtToken?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CartItemResolvers<ContextType = DataSourcesContext, ParentType extends ResolversParentTypes['CartItem'] = ResolversParentTypes['CartItem']> = {
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  order?: Resolver<ResolversTypes['Order'], ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  productId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  quantity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  totalPrice?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryResolvers<ContextType = DataSourcesContext, ParentType extends ResolversParentTypes['Category'] = ResolversParentTypes['Category']> = {
  company?: Resolver<ResolversTypes['Company'], ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CompanyResolvers<ContextType = DataSourcesContext, ParentType extends ResolversParentTypes['Company'] = ResolversParentTypes['Company']> = {
  address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  categories?: Resolver<Maybe<Array<Maybe<ResolversTypes['Category']>>>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  products?: Resolver<Maybe<Array<Maybe<ResolversTypes['Product']>>>, ParentType, ContextType>;
  stores?: Resolver<Maybe<Array<Maybe<ResolversTypes['Store']>>>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  users?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type MutationResolvers<ContextType = DataSourcesContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  changePassword?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationChangePasswordArgs, 'password' | 'token'>>;
  createCartItem?: Resolver<Maybe<ResolversTypes['CartItem']>, ParentType, ContextType, RequireFields<MutationCreateCartItemArgs, 'name' | 'order' | 'price' | 'productId' | 'quantity' | 'store'>>;
  createCategory?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType, RequireFields<MutationCreateCategoryArgs, 'company' | 'description' | 'name'>>;
  createCompany?: Resolver<Maybe<ResolversTypes['Company']>, ParentType, ContextType, RequireFields<MutationCreateCompanyArgs, 'address' | 'name' | 'phone'>>;
  createOrder?: Resolver<Maybe<ResolversTypes['Order']>, ParentType, ContextType, RequireFields<MutationCreateOrderArgs, 'message' | 'paymentMethod' | 'register' | 'status' | 'store' | 'total'>>;
  createProduct?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<MutationCreateProductArgs, 'category' | 'company' | 'description' | 'image' | 'name' | 'price'>>;
  createRegister?: Resolver<Maybe<ResolversTypes['Register']>, ParentType, ContextType, RequireFields<MutationCreateRegisterArgs, 'store' | 'user'>>;
  createStore?: Resolver<Maybe<ResolversTypes['Store']>, ParentType, ContextType, RequireFields<MutationCreateStoreArgs, 'address' | 'companyId' | 'maxRegisters' | 'name' | 'phone'>>;
  createUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'email' | 'name' | 'password' | 'role'>>;
  deleteCartItem?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationDeleteCartItemArgs, 'id'>>;
  deleteCategory?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationDeleteCategoryArgs, 'id'>>;
  deleteCompany?: Resolver<Maybe<ResolversTypes['Company']>, ParentType, ContextType, RequireFields<MutationDeleteCompanyArgs, 'id'>>;
  deleteOrder?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationDeleteOrderArgs, 'id'>>;
  deleteProduct?: Resolver<Maybe<ResolversTypes['Company']>, ParentType, ContextType, RequireFields<MutationDeleteProductArgs, 'id'>>;
  deleteRegister?: Resolver<Maybe<ResolversTypes['Register']>, ParentType, ContextType, RequireFields<MutationDeleteRegisterArgs, 'id'>>;
  deleteStore?: Resolver<Maybe<ResolversTypes['Store']>, ParentType, ContextType, RequireFields<MutationDeleteStoreArgs, 'id'>>;
  deleteUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationDeleteUserArgs, 'id'>>;
  forgotPassword?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationForgotPasswordArgs, 'email'>>;
  signup?: Resolver<Maybe<ResolversTypes['Auth']>, ParentType, ContextType, RequireFields<MutationSignupArgs, 'email' | 'name' | 'password'>>;
  updateCartItem?: Resolver<Maybe<ResolversTypes['CartItem']>, ParentType, ContextType, RequireFields<MutationUpdateCartItemArgs, 'id' | 'name' | 'order' | 'price' | 'quantity' | 'store'>>;
  updateCategory?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType, RequireFields<MutationUpdateCategoryArgs, 'company' | 'id'>>;
  updateCompany?: Resolver<Maybe<ResolversTypes['Company']>, ParentType, ContextType, RequireFields<MutationUpdateCompanyArgs, 'address' | 'id' | 'name' | 'phone'>>;
  updateOrder?: Resolver<Maybe<ResolversTypes['Order']>, ParentType, ContextType, RequireFields<MutationUpdateOrderArgs, 'id'>>;
  updateProduct?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<MutationUpdateProductArgs, 'id'>>;
  updateRegister?: Resolver<Maybe<ResolversTypes['Register']>, ParentType, ContextType, RequireFields<MutationUpdateRegisterArgs, 'id'>>;
  updateStore?: Resolver<Maybe<ResolversTypes['Store']>, ParentType, ContextType, RequireFields<MutationUpdateStoreArgs, 'address' | 'id' | 'maxRegisters' | 'name' | 'phone'>>;
  updateUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationUpdateUserArgs, 'companyId' | 'email' | 'name' | 'role' | 'storeId'>>;
};

export type OrderResolvers<ContextType = DataSourcesContext, ParentType extends ResolversParentTypes['Order'] = ResolversParentTypes['Order']> = {
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  paymentMethod?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  register?: Resolver<ResolversTypes['Register'], ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  store?: Resolver<ResolversTypes['Store'], ParentType, ContextType>;
  total?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductResolvers<ContextType = DataSourcesContext, ParentType extends ResolversParentTypes['Product'] = ResolversParentTypes['Product']> = {
  category?: Resolver<ResolversTypes['Category'], ParentType, ContextType>;
  company?: Resolver<ResolversTypes['Company'], ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = DataSourcesContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  cartItemsByOrder?: Resolver<Maybe<Array<Maybe<ResolversTypes['CartItem']>>>, ParentType, ContextType, RequireFields<QueryCartItemsByOrderArgs, 'orderId'>>;
  categories?: Resolver<Maybe<Array<Maybe<ResolversTypes['Category']>>>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType, RequireFields<QueryCategoryArgs, 'id'>>;
  companies?: Resolver<Maybe<Array<Maybe<ResolversTypes['Company']>>>, ParentType, ContextType>;
  company?: Resolver<Maybe<ResolversTypes['Company']>, ParentType, ContextType>;
  getUserRoleAndStatus?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  login?: Resolver<Maybe<ResolversTypes['Auth']>, ParentType, ContextType, RequireFields<QueryLoginArgs, 'email' | 'password'>>;
  order?: Resolver<Maybe<ResolversTypes['Order']>, ParentType, ContextType, RequireFields<QueryOrderArgs, 'id'>>;
  orders?: Resolver<Maybe<Array<Maybe<ResolversTypes['Order']>>>, ParentType, ContextType>;
  product?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<QueryProductArgs, 'id'>>;
  products?: Resolver<Maybe<Array<Maybe<ResolversTypes['Product']>>>, ParentType, ContextType>;
  registerByID?: Resolver<Maybe<ResolversTypes['Register']>, ParentType, ContextType, RequireFields<QueryRegisterByIdArgs, 'registerId'>>;
  registersByStore?: Resolver<Maybe<Array<Maybe<ResolversTypes['Register']>>>, ParentType, ContextType, RequireFields<QueryRegistersByStoreArgs, 'storeId'>>;
  store?: Resolver<Maybe<ResolversTypes['Store']>, ParentType, ContextType, RequireFields<QueryStoreArgs, 'id'>>;
  stores?: Resolver<Maybe<Array<Maybe<ResolversTypes['Store']>>>, ParentType, ContextType>;
  userById?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, Partial<QueryUserByIdArgs>>;
  users?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
  usersByCompany?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
  usersByStore?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType, RequireFields<QueryUsersByStoreArgs, 'storeId'>>;
};

export type RegisterResolvers<ContextType = DataSourcesContext, ParentType extends ResolversParentTypes['Register'] = ResolversParentTypes['Register']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  orders?: Resolver<Maybe<Array<Maybe<ResolversTypes['Order']>>>, ParentType, ContextType>;
  sessionEnded?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  sessionStarted?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  store?: Resolver<ResolversTypes['Store'], ParentType, ContextType>;
  total?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StoreResolvers<ContextType = DataSourcesContext, ParentType extends ResolversParentTypes['Store'] = ResolversParentTypes['Store']> = {
  address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  company?: Resolver<ResolversTypes['Company'], ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  maxRegisters?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = DataSourcesContext, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  company?: Resolver<Maybe<ResolversTypes['Company']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  isActive?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isVerified?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['UserRole']>, ParentType, ContextType>;
  store?: Resolver<Maybe<ResolversTypes['Store']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = DataSourcesContext> = {
  Auth?: AuthResolvers<ContextType>;
  CartItem?: CartItemResolvers<ContextType>;
  Category?: CategoryResolvers<ContextType>;
  Company?: CompanyResolvers<ContextType>;
  Date?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  Order?: OrderResolvers<ContextType>;
  Product?: ProductResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Register?: RegisterResolvers<ContextType>;
  Store?: StoreResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};

