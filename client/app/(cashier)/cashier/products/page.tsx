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
type Product = {
  image: string;
  name: string;
  price: number;
  catergory: string;
  stock: number;
  date: string;
};

//nested data is ok, see accessorKeys in ColumnDef below
const data: Product[] = [
  {
    image: "https://via.placeholder.com/150",
    name: "Product A",
    price: 11.99,
    catergory: "Category A",
    stock: 120,
    date: "2023-01-01",
  },
  {
    image: "https://via.placeholder.com/150",
    name: "Product B",
    price: 16.99,
    catergory: "Category B",
    stock: 60,
    date: "2023-02-01",
  },
  {
    image: "https://via.placeholder.com/150",
    name: "Product C",
    price: 8.99,
    catergory: "Category C",
    stock: 210,
    date: "2023-03-01",
  },
  {
    image: "https://via.placeholder.com/150",
    name: "Product D",
    price: 13.99,
    catergory: "Category D",
    stock: 80,
    date: "2023-04-01",
  },
  {
    image: "https://via.placeholder.com/150",
    name: "Product E",
    price: 10.99,
    catergory: "Category E",
    stock: 160,
    date: "2023-05-01",
  },
];

const CategoryPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  //should be memoized or stable
  const columns = useMemo<MRT_ColumnDef<Product>[]>(
    () => [
      {
        accessorKey: "image",
        header: "Image",
        size: 150,
        Cell: ({ cell }) => (
          <img
            src={cell.getValue<string>()}
            alt="Product"
            width={50}
            height={50}
          />
        ),
      },
      {
        accessorKey: "name",
        header: "Name",
        size: 200,
      },
      {
        accessorKey: "stock",
        header: "Stock",
        size: 100,
      },
      {
        accessorKey: "price",
        header: "Price",
        size: 100,
      },
      {
        accessorKey: "catergory",
        header: "Category",
        size: 150,
      },
      {
        accessorKey: "date",
        header: "Date Updated",
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
        <h2>Products</h2>
      </div>
      <hr />
      <MaterialReactTable table={table} />
    </div>
  );
};

export default CategoryPage;
