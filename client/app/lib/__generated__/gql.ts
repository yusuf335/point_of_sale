/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
const documents = {
    "\n  mutation CreateCategory($name: String!, $description: String!) {\n    createCategory(name: $name, description: $description) {\n      id\n    }\n  }\n": types.CreateCategoryDocument,
    "\n  query Company {\n    company {\n      id\n      name\n      address\n      phone\n    }\n  }\n": types.CompanyDocument,
    "\n  query Stores {\n    stores {\n      id\n      name\n      address\n      phone\n    }\n  }\n": types.StoresDocument,
    "\n  query UsersByCompany {\n    usersByCompany {\n      name\n      email\n      role\n      isVerified\n    }\n  }\n": types.UsersByCompanyDocument,
    "\n  mutation ChangePassword($token: String!, $password: String!) {\n    changePassword(token: $token, password: $password)\n  }\n": types.ChangePasswordDocument,
    "\n  mutation ForgotPassword($email: String!) {\n    forgotPassword(email: $email)\n  }\n": types.ForgotPasswordDocument,
    "\n  query Login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      jwtToken\n    }\n  }\n": types.LoginDocument,
    "\n  mutation SingUp($name: String!, $email: String!, $password: String!) {\n    signup(name: $name, email: $email, password: $password) {\n      jwtToken\n    }\n  }\n": types.SingUpDocument,
    "\n  query GetUserRoleAndStatus {\n    getUserRoleAndStatus {\n      role\n      isActive\n      isVerified\n    }\n  }\n": types.GetUserRoleAndStatusDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation CreateCategory($name: String!, $description: String!) {\n    createCategory(name: $name, description: $description) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation CreateCategory($name: String!, $description: String!) {\n    createCategory(name: $name, description: $description) {\n      id\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Company {\n    company {\n      id\n      name\n      address\n      phone\n    }\n  }\n"): (typeof documents)["\n  query Company {\n    company {\n      id\n      name\n      address\n      phone\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Stores {\n    stores {\n      id\n      name\n      address\n      phone\n    }\n  }\n"): (typeof documents)["\n  query Stores {\n    stores {\n      id\n      name\n      address\n      phone\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query UsersByCompany {\n    usersByCompany {\n      name\n      email\n      role\n      isVerified\n    }\n  }\n"): (typeof documents)["\n  query UsersByCompany {\n    usersByCompany {\n      name\n      email\n      role\n      isVerified\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation ChangePassword($token: String!, $password: String!) {\n    changePassword(token: $token, password: $password)\n  }\n"): (typeof documents)["\n  mutation ChangePassword($token: String!, $password: String!) {\n    changePassword(token: $token, password: $password)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation ForgotPassword($email: String!) {\n    forgotPassword(email: $email)\n  }\n"): (typeof documents)["\n  mutation ForgotPassword($email: String!) {\n    forgotPassword(email: $email)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      jwtToken\n    }\n  }\n"): (typeof documents)["\n  query Login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      jwtToken\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation SingUp($name: String!, $email: String!, $password: String!) {\n    signup(name: $name, email: $email, password: $password) {\n      jwtToken\n    }\n  }\n"): (typeof documents)["\n  mutation SingUp($name: String!, $email: String!, $password: String!) {\n    signup(name: $name, email: $email, password: $password) {\n      jwtToken\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetUserRoleAndStatus {\n    getUserRoleAndStatus {\n      role\n      isActive\n      isVerified\n    }\n  }\n"): (typeof documents)["\n  query GetUserRoleAndStatus {\n    getUserRoleAndStatus {\n      role\n      isActive\n      isVerified\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;