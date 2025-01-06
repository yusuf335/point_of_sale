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
type Orders = {
  date: string;
  total: string;
  status: string;
  paymentMethod: string;
  note: string;
  store: boolean;
  register: string;
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

//nested data is ok, see accessorKeys in ColumnDef below
const data: Orders[] = [
  {
    date: "2023-10-01",
    total: "$100.00",
    status: "Completed",
    paymentMethod: "Credit Card",
    note: "First order",
    store: true,
    register: "Register 1",
  },
  {
    date: "2023-10-02",
    total: "$150.00",
    status: "Pending",
    paymentMethod: "Cash",
    note: "Second order",
    store: false,
    register: "Register 2",
  },
  {
    date: "2023-10-03",
    total: "$200.00",
    status: "Cancelled",
    paymentMethod: "PayPal",
    note: "Third order",
    store: true,
    register: "Register 3",
  },
];

const OrdersPage = () => {
  const { loading } = useQuery(GET_USERS);

  const columns = useMemo<MRT_ColumnDef<Orders>[]>(
    () => [
      {
        accessorKey: "date",
        header: "Date",
        size: 150,
      },
      {
        accessorKey: "total",
        header: "Total",
        size: 100,
      },
      {
        accessorKey: "status",
        header: "Status",
        size: 150,
      },
      {
        accessorKey: "paymentMethod",
        header: "Payment Method",
        size: 150,
      },
      {
        accessorKey: "note",
        header: "Note",
        size: 200,
      },
      {
        accessorKey: "store",
        header: "Store",
        size: 100,
        Cell: ({ cell }) => (cell.getValue<boolean>() ? "Yes" : "No"),
      },
      {
        accessorKey: "register",
        header: "Register",
        size: 150,
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data: data || [],
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
            <h2>Orders</h2>
          </div>
          <hr />
          <MaterialReactTable table={table} />
        </>
      )}
    </div>
  );
};

export default OrdersPage;
