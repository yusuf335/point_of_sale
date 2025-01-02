"use client";
import InputField from "@/components/ui/Input/InputField";
import styles from "./page.module.scss";
import { FaShoppingCart } from "react-icons/fa";
import Button from "@/components/ui/button/Button";
import CartItem from "@/components/cart/CartItem";
import useOrientation from "@/app/utils/useOrientation";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const cart: CartItem[] = [
  {
    id: 1,
    name: "Product 1",
    price: 100,
    quantity: 2,
  },
  {
    id: 2,
    name: "Product 2",
    price: 200,
    quantity: 1,
  },
  {
    id: 3,
    name: "Product 3",
    price: 300,
    quantity: 3,
  },
  {
    id: 4,
    name: "Product 4",
    price: 400,
    quantity: 4,
  },
  {
    id: 5,
    name: "Product 5",
    price: 500,
    quantity: 5,
  },
  {
    id: 6,
    name: "Product 6",
    price: 600,
    quantity: 6,
  },
  {
    id: 7,
    name: "Product 7",
    price: 700,
    quantity: 7,
  },
  {
    id: 8,
    name: "Product 8",
    price: 800,
    quantity: 8,
  },
  {
    id: 9,
    name: "Product 9",
    price: 900,
    quantity: 9,
  },
  {
    id: 10,
    name: "Product 10",
    price: 1000,
    quantity: 10,
  },
  {
    id: 11,
    name: "Product 11",
    price: 1100,
    quantity: 11,
  },
  {
    id: 12,
    name: "Product 12",
    price: 1200,
    quantity: 12,
  },
  {
    id: 13,
    name: "Product 13",
    price: 1300,
    quantity: 13,
  },
  {
    id: 14,
    name: "Product 14",
    price: 1400,
    quantity: 14,
  },
  {
    id: 15,
    name: "Product 15",
    price: 1500,
    quantity: 15,
  },
  {
    id: 16,
    name: "Product 16",
    price: 1600,
    quantity: 16,
  },
  {
    id: 17,
    name: "Product 17",
    price: 1700,
    quantity: 17,
  },
  {
    id: 18,
    name: "Product 18",
    price: 1800,
    quantity: 18,
  },
  {
    id: 19,
    name: "Product 19",
    price: 1900,
    quantity: 19,
  },
  {
    id: 20,
    name: "Product 20",
    price: 2000,
    quantity: 20,
  },
];

export default function Home() {
  const isLandscape = useOrientation();

  if (isLandscape) {
    return (
      <div className={styles.container}>
        <h1>Please use the app in portrait mode</h1>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.cartHeader}>
        {/* Search Bar*/}
        <InputField
          name="search-items"
          label="Search Product"
          placeholder="Search Product with name or id"
          type="text"
          value=""
          onChange={() => {}}
        />
      </div>

      {/* Cart Items */}
      <div className={styles.cartItems}>
        <div className={styles.cartItemHeader}>
          <FaShoppingCart size="1.5rem" className={styles.cartIcon} />
          <h2>Cart</h2>
        </div>
        <hr />

        <div className={styles.cartItemsContainer}>
          {/* Cart Items List */}
          <div className={styles.cartItemsList}>
            {cart.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
          </div>

          {/* Cart Total and Payment */}
          <div className={styles.cartTotal}>
            <div className={styles.cartTotalAmount}>
              <h2>Total Items: 10</h2>
              <h2>Total Amount: $300</h2>
            </div>
            <div className={styles.cartTotalActions}>
              <Button label="Empty Cart" variant="danger" />
              <Button label="Pay" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
