"use client";

import { useMemo, useState, useEffect } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from "material-react-table";
import { gql, useQuery } from "@apollo/client";

import styles from "./page.module.scss";

import { FaUserAlt } from "react-icons/fa";
import Loading from "../../loading";

//Data type
type Person = {
  name: string;
  email: string;
  role: string;
  isVerified: boolean;
  storeName: string;
};

const GET_USERS = gql`
  query UsersByCompany {
    usersByCompany {
      name
      email
      role
      isVerified
    }
  }
`;

const UsersPage = () => {
  const { loading, error, data } = useQuery(GET_USERS);

  const columns = useMemo<MRT_ColumnDef<Person>[]>(
    () => [
      {
        accessorKey: "name",
        header: "Name",
        size: 150,
      },
      {
        accessorKey: "email",
        header: "Email",
        size: 200,
      },
      {
        accessorKey: "role",
        header: "Role",
        size: 150,
      },
      {
        accessorKey: "isVerified",
        header: "Verified",
        size: 100,
        Cell: ({ cell }) => (cell.getValue<boolean>() ? "Yes" : "No"),
      },
      {
        id: "view",
        header: "View",
        size: 100,
        Cell: ({ row }) => (
          <button
            onClick={() => alert(`Viewing user: ${row.original.name}`)}
            className={styles.viewButton}
          >
            View
          </button>
        ),
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data: data?.usersByCompany || [],
    enableTopToolbar: false,
    initialState: {
      density: "comfortable",
      pagination: {
        pageIndex: 0,
        pageSize: 5,
      },
    },
  });

  return (
    <div className={styles.container}>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className={styles.header}>
            <FaUserAlt size="1.5rem" className={styles.shiftIcon} />
            <h2>Users</h2>
          </div>
          <hr />
          <MaterialReactTable table={table} />
        </>
      )}
    </div>
  );
};

export default UsersPage;
