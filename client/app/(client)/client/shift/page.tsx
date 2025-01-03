"use client";

import { Suspense, useMemo, useState } from "react";
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
  register: number;
  start: string;
  end: string;
  total: string;
};

//nested data is ok, see accessorKeys in ColumnDef below
const data: Person[] = [
  {
    date: "2021-06-01",
    register: 1,
    start: "06:00",
    end: "14:00",
    total: "8:00",
  },
  {
    date: "2021-06-01",
    register: 2,
    start: "06:00",
    end: "14:00",
    total: "8:00",
  },
  {
    date: "2021-06-01",
    register: 3,
    start: "06:00",
    end: "14:00",
    total: "8:00",
  },
  {
    date: "2021-06-01",
    register: 4,
    start: "06:00",
    end: "14:00",
    total: "8:00",
  },
  {
    date: "2021-06-01",
    register: 5,
    start: "06:00",
    end: "14:00",
    total: "8:00",
  },
  {
    date: "2021-06-01",
    register: 6,
    start: "06:00",
    end: "14:00",
    total: "8:00",
  },
  {
    date: "2021-06-01",
    register: 7,
    start: "06:00",
    end: "14:00",
    total: "8:00",
  },
  {
    date: "2021-06-01",
    register: 8,
    start: "06:00",
    end: "14:00",
    total: "8:00",
  },
  {
    date: "2021-06-01",
    register: 9,
    start: "06:00",
    end: "14:00",
    total: "8:00",
  },
  {
    date: "2021-06-01",
    register: 10,
    start: "06:00",
    end: "14:00",
    total: "8:00",
  },
  {
    date: "2021-06-01",
    register: 11,
    start: "06:00",
    end: "14:00",
    total: "8:00",
  },
];

const Shift = () => {
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
        accessorKey: "register",
        header: "Register",
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
        accessorKey: "total",
        header: "Total",
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
        <h2>Shift</h2>
      </div>
      <hr />
      <MaterialReactTable table={table} />
    </div>
  );
};

export default Shift;
