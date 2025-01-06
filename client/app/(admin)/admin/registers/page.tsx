"use client";

import { useMemo, useState } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from "material-react-table";

import styles from "./page.module.scss";

import { MdWorkHistory } from "react-icons/md";

//example data type
type Person = {
  date: string;
  user: string;
  start: string;
  end: string;
  total_amount: number;
};

//nested data is ok, see accessorKeys in ColumnDef below
const data: Person[] = [
  {
    date: "2021-06-01",
    user: "User 1",
    start: "06:00",
    end: "14:00",
    total_amount: 8,
  },
  {
    date: "2021-06-01",
    user: "User 2",
    start: "06:00",
    end: "14:00",
    total_amount: 8,
  },
  {
    date: "2021-06-01",
    user: "User 3",
    start: "06:00",
    end: "14:00",
    total_amount: 8,
  },
  {
    date: "2021-06-01",
    user: "User 4",
    start: "06:00",
    end: "14:00",
    total_amount: 8,
  },
  {
    date: "2021-06-01",
    user: "User 5",
    start: "06:00",
    end: "14:00",
    total_amount: 8,
  },
  {
    date: "2021-06-01",
    user: "User 6",
    start: "06:00",
    end: "14:00",
    total_amount: 8,
  },
  {
    date: "2021-06-01",
    user: "User 7",
    start: "06:00",
    end: "14:00",
    total_amount: 8,
  },
  {
    date: "2021-06-01",
    user: "User 8",
    start: "06:00",
    end: "14:00",
    total_amount: 8,
  },
  {
    date: "2021-06-01",
    user: "User 9",
    start: "06:00",
    end: "14:00",
    total_amount: 8,
  },
  {
    date: "2021-06-01",
    user: "User 10",
    start: "06:00",
    end: "14:00",
    total_amount: 8,
  },
  {
    date: "2021-06-01",
    user: "User 11",
    start: "06:00",
    end: "14:00",
    total_amount: 8,
  },
];

const RegisterPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  //should be memoized or stable
  const columns = useMemo<MRT_ColumnDef<Person>[]>(
    () => [
      {
        accessorKey: "date", //access nested data with dot notation
        header: "Date",
        size: 150,
      },
      {
        accessorKey: "user",
        header: "User",
        size: 150,
      },
      {
        accessorKey: "start", //normal accessorKey
        header: "Start",
        size: 200,
      },
      {
        accessorKey: "end",
        header: "End",
        size: 150,
      },
      {
        accessorKey: "total_amount",
        header: "Total Sales",
        size: 150,
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data, //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
    enableTopToolbar: false,
    initialState: {
      density: "compact",
      isLoading,
      pagination: {
        pageIndex: 0,
        pageSize: 5,
      },
    },
  });

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <MdWorkHistory size="1.5rem" className={styles.shiftIcon} />
        <h2>Register</h2>
      </div>
      <hr />
      <MaterialReactTable table={table} />
    </div>
  );
};

export default RegisterPage;
