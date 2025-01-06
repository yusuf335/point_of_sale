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
type Category = {
  name: string;
  description: string;
  date: string;
};

//nested data is ok, see accessorKeys in ColumnDef below
const data: Category[] = [
  {
    name: "Electronics",
    description: "Devices and gadgets",
    date: "2023-01-01",
  },
  {
    name: "Clothing",
    description: "Apparel and accessories",
    date: "2023-01-02",
  },
  {
    name: "Groceries",
    description: "Food and beverages",
    date: "2023-01-03",
  },
  {
    name: "Books",
    description: "Printed and digital books",
    date: "2023-01-04",
  },
  {
    name: "Furniture",
    description: "Home and office furniture",
    date: "2023-01-05",
  },
];

const Shift = () => {
  const [isLoading, setIsLoading] = useState(false);

  //should be memoized or stable
  const columns = useMemo<MRT_ColumnDef<Category>[]>(
    () => [
      {
        accessorKey: "name",
        header: "Name",
        size: 150,
      },
      {
        accessorKey: "description",
        header: "Description",
        size: 300,
      },
      {
        accessorKey: "date",
        header: "Date",
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
        <h2>Categories</h2>
      </div>
      <hr />
      <MaterialReactTable table={table} />
    </div>
  );
};

export default Shift;
