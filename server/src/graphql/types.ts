import { GraphQLResolveInfo } from 'graphql';
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
  /** Store ID where the product is located */
  store: Store;
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
  /** Create a new Company */
  createCompany?: Maybe<Company>;
  /** Create a new Store by Admin. */
  createStore?: Maybe<Store>;
  /** Delete Company */
  deleteCompany?: Maybe<Company>;
  /** Update Company */
  updateCompany?: Maybe<Company>;
};


export type MutationCreateCompanyArgs = {
  address: Scalars['String']['input'];
  name: Scalars['String']['input'];
  phone: Scalars['String']['input'];
};


export type MutationCreateStoreArgs = {
  address: Scalars['String']['input'];
  companyId: Scalars['Int']['input'];
  maxRegisters: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  phone: Scalars['String']['input'];
};


export type MutationDeleteCompanyArgs = {
  id: Scalars['Int']['input'];
};


export type MutationUpdateCompanyArgs = {
  address: Scalars['String']['input'];
  id: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  phone: Scalars['String']['input'];
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
  /** Get all cart items */
  cartItems?: Maybe<Array<Maybe<CartItem>>>;
  /** List of Categories for a Company */
  categories?: Maybe<Array<Maybe<Category>>>;
  /** Category by ID for a Company */
  category?: Maybe<Category>;
  /** Get all Companies */
  companies?: Maybe<Array<Maybe<Company>>>;
  /** Get a Company by ID */
  company?: Maybe<Company>;
  /** Order by ID for a Store */
  order?: Maybe<Order>;
  /** List of Orders by Store */
  orders?: Maybe<Array<Maybe<Order>>>;
  /** Product by ID for a Company */
  product?: Maybe<Product>;
  /** List of Products for a Company */
  products?: Maybe<Array<Maybe<Product>>>;
  /** Register by ID for a Store */
  register?: Maybe<Register>;
  /** List of Registers by Store */
  registers?: Maybe<Array<Maybe<Register>>>;
  /** Get a Store by ID */
  store?: Maybe<Store>;
  /** Get all Stores for a Company by Company ID */
  stores?: Maybe<Array<Maybe<Store>>>;
  /** User By ID for Admin */
  user?: Maybe<User>;
  /** All Users for Admin */
  users?: Maybe<Array<Maybe<User>>>;
  /** Get all user by Company ID */
  usersByCompany?: Maybe<Array<Maybe<User>>>;
  /** Get all user by store ID */
  usersByStore?: Maybe<Array<Maybe<User>>>;
};


export type QueryCategoryArgs = {
  id: Scalars['Int']['input'];
};


export type QueryCompanyArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryOrderArgs = {
  id: Scalars['Int']['input'];
};


export type QueryProductArgs = {
  id: Scalars['Int']['input'];
};


export type QueryRegisterArgs = {
  id: Scalars['Int']['input'];
};


export type QueryStoreArgs = {
  id: Scalars['Int']['input'];
};


export type QueryStoresArgs = {
  companyID: Scalars['Int']['input'];
};


export type QueryUserArgs = {
  id: Scalars['Int']['input'];
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
  /** Register Creation Date */
  createdAt?: Maybe<Scalars['String']['output']>;
  /** Register ID */
  id: Scalars['Int']['output'];
  /** List of Orders for Register */
  orders?: Maybe<Array<Maybe<Order>>>;
  /** Register Session Ended */
  sessionEnded?: Maybe<Scalars['String']['output']>;
  /** Register Session Started */
  sessionStarted?: Maybe<Scalars['String']['output']>;
  /** Store ID for Register */
  store: Store;
  /** Register Total Amount */
  total?: Maybe<Scalars['Float']['output']>;
  /** Register Updated Date */
  updatedAt?: Maybe<Scalars['String']['output']>;
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
  isActive?: Maybe<UserStatus>;
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

/** User Status Enum */
export enum UserStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE'
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
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  CartItem: ResolverTypeWrapper<CartItem>;
  Category: ResolverTypeWrapper<Category>;
  Company: ResolverTypeWrapper<Company>;
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
  UserStatus: UserStatus;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  CartItem: CartItem;
  Category: Category;
  Company: Company;
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

export type CartItemResolvers<ContextType = DataSourcesContext, ParentType extends ResolversParentTypes['CartItem'] = ResolversParentTypes['CartItem']> = {
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  order?: Resolver<ResolversTypes['Order'], ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  productId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  quantity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  store?: Resolver<ResolversTypes['Store'], ParentType, ContextType>;
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

export type MutationResolvers<ContextType = DataSourcesContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createCompany?: Resolver<Maybe<ResolversTypes['Company']>, ParentType, ContextType, RequireFields<MutationCreateCompanyArgs, 'address' | 'name' | 'phone'>>;
  createStore?: Resolver<Maybe<ResolversTypes['Store']>, ParentType, ContextType, RequireFields<MutationCreateStoreArgs, 'address' | 'companyId' | 'maxRegisters' | 'name' | 'phone'>>;
  deleteCompany?: Resolver<Maybe<ResolversTypes['Company']>, ParentType, ContextType, RequireFields<MutationDeleteCompanyArgs, 'id'>>;
  updateCompany?: Resolver<Maybe<ResolversTypes['Company']>, ParentType, ContextType, RequireFields<MutationUpdateCompanyArgs, 'address' | 'id' | 'name' | 'phone'>>;
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
  cartItems?: Resolver<Maybe<Array<Maybe<ResolversTypes['CartItem']>>>, ParentType, ContextType>;
  categories?: Resolver<Maybe<Array<Maybe<ResolversTypes['Category']>>>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType, RequireFields<QueryCategoryArgs, 'id'>>;
  companies?: Resolver<Maybe<Array<Maybe<ResolversTypes['Company']>>>, ParentType, ContextType>;
  company?: Resolver<Maybe<ResolversTypes['Company']>, ParentType, ContextType, Partial<QueryCompanyArgs>>;
  order?: Resolver<Maybe<ResolversTypes['Order']>, ParentType, ContextType, RequireFields<QueryOrderArgs, 'id'>>;
  orders?: Resolver<Maybe<Array<Maybe<ResolversTypes['Order']>>>, ParentType, ContextType>;
  product?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<QueryProductArgs, 'id'>>;
  products?: Resolver<Maybe<Array<Maybe<ResolversTypes['Product']>>>, ParentType, ContextType>;
  register?: Resolver<Maybe<ResolversTypes['Register']>, ParentType, ContextType, RequireFields<QueryRegisterArgs, 'id'>>;
  registers?: Resolver<Maybe<Array<Maybe<ResolversTypes['Register']>>>, ParentType, ContextType>;
  store?: Resolver<Maybe<ResolversTypes['Store']>, ParentType, ContextType, RequireFields<QueryStoreArgs, 'id'>>;
  stores?: Resolver<Maybe<Array<Maybe<ResolversTypes['Store']>>>, ParentType, ContextType, RequireFields<QueryStoresArgs, 'companyID'>>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserArgs, 'id'>>;
  users?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
  usersByCompany?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType, RequireFields<QueryUsersByCompanyArgs, 'companyId'>>;
  usersByStore?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType, RequireFields<QueryUsersByStoreArgs, 'storeId'>>;
};

export type RegisterResolvers<ContextType = DataSourcesContext, ParentType extends ResolversParentTypes['Register'] = ResolversParentTypes['Register']> = {
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  orders?: Resolver<Maybe<Array<Maybe<ResolversTypes['Order']>>>, ParentType, ContextType>;
  sessionEnded?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sessionStarted?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  store?: Resolver<ResolversTypes['Store'], ParentType, ContextType>;
  total?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
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
  isActive?: Resolver<Maybe<ResolversTypes['UserStatus']>, ParentType, ContextType>;
  isVerified?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['UserRole']>, ParentType, ContextType>;
  store?: Resolver<Maybe<ResolversTypes['Store']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = DataSourcesContext> = {
  CartItem?: CartItemResolvers<ContextType>;
  Category?: CategoryResolvers<ContextType>;
  Company?: CompanyResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Order?: OrderResolvers<ContextType>;
  Product?: ProductResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Register?: RegisterResolvers<ContextType>;
  Store?: StoreResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};

