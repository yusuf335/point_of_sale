"use client";

import { useState, useMemo, useRef } from "react";
import InputField from "@/app/components/ui/Input/InputField";
import styles from "./page.module.scss";
import Button from "@/app/components/ui/button/Button";
import CartItem from "@/app/components/cart/CartItem";
import PaymentModal from "@/app/components/payment/PaymentModal";

import { MdShoppingCart, MdRemoveShoppingCart } from "react-icons/md";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const initialCart: CartItem[] = [
  { id: 1, name: "Product 1", price: 100, quantity: 2 },
  { id: 2, name: "Product 2", price: 200, quantity: 1 },
  { id: 3, name: "Product 3", price: 300, quantity: 3 },
];

export default function Home() {
  const [search, setSearch] = useState("");
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [cart, setCart] = useState(initialCart);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleQuantityChange = (id: number, quantity: number) => {
    setCart((prevCart) =>
      prevCart.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const handleRemoveItem = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const handlePaymentModalClose = () => {
    setIsPaymentModalOpen(false);
    searchInputRef.current?.focus(); // Refocus the search bar when the modal is closed
  };

  const filteredCart = useMemo(
    () =>
      cart.filter(
        (item) =>
          item.name.toLowerCase().includes(search.toLowerCase()) ||
          item.id.toString().includes(search)
      ),
    [search, cart]
  );

  const totalItems = useMemo(
    () => cart.reduce((acc, item) => acc + item.quantity, 0),
    [cart]
  );

  const totalAmount = useMemo(
    () => cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
    [cart]
  );

  return (
    <div className={styles.container}>
      {/* Search Bar */}
      <div className={styles.cartHeader}>
        <InputField
          name="search-items"
          label="Search Product"
          placeholder="Search Product with name or id"
          type="text"
          value={search}
          onChange={handleSearchChange}
          inputRef={searchInputRef}
          autoFocus={!isPaymentModalOpen}
        />
      </div>

      {/* Cart Items */}
      <div className={styles.cartItems}>
        <div className={styles.cartItemHeader}>
          <div className={styles.cartHeaderTitle}>
            <MdShoppingCart size="1.6rem" className={styles.cartIcon} />
            <h2>Cart Items</h2>
          </div>
          <div onClick={() => setCart([])}>
            <MdRemoveShoppingCart
              size="1.6rem"
              className={styles.emptyCartIcon}
            />
          </div>
        </div>
        <hr />

        <div className={styles.cartItemsContainer}>
          {/* Cart Items List */}
          <div className={styles.cartItemsList}>
            {filteredCart.map((item) => (
              <CartItem
                key={item.id}
                {...item}
                onQuantityChange={handleQuantityChange}
                onRemove={handleRemoveItem}
              />
            ))}
          </div>

          {/* Cart Total and Payment */}
          <div className={styles.cartTotal}>
            <div className={styles.cartTotalAmount}>
              <h2>Total Items: {totalItems}</h2>
              <hr />
              <h2>Total Amount: ${totalAmount}</h2>
            </div>
            <div
              className={styles.cartTotalActions}
              onClick={() => setIsPaymentModalOpen(true)}
            >
              <Button label="Pay" size="medium" />
            </div>
            <PaymentModal
              isOpen={isPaymentModalOpen}
              onClose={handlePaymentModalClose}
              totalAmount={totalAmount}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
