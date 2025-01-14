"use client";

import { useMemo, useState } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from "material-react-table";
import { useRouter } from "next/navigation";

import styles from "./page.module.scss";

import TableHeader from "@/app/components/header/table-header/TableHeader";

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
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleAddCategory = () => {
    router.push("/admin/categories/add-category");
  };

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
    <>
      <TableHeader
        title="Category"
        btnLabel={"Add Category"}
        onClick={handleAddCategory}
      />
      <MaterialReactTable table={table} />
    </>
  );
};

export default Shift;
