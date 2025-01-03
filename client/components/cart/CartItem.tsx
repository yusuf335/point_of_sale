import { IoIosRemoveCircle } from "react-icons/io";
import styles from "./Cart.module.scss";
import QuantityInput from "@/components/ui/quantity/QuantityInput";

interface CartItemProps {
  id: number;
  name: string;
  price: number;
  quantity: number;
  onQuantityChange: (id: number, quantity: number) => void;
  onRemove: (id: number) => void;
}

const CartItem = ({
  id,
  name,
  price,
  quantity,
  onQuantityChange,
  onRemove,
}: CartItemProps) => {
  const handleQuantityChange = (newQuantity: number) => {
    onQuantityChange(id, newQuantity);
  };

  return (
    <div className={styles.cartItem}>
      <div className={styles.cartItemHeader}>
        <IoIosRemoveCircle
          size="1.2rem"
          className={styles.removeicon}
          onClick={() => onRemove(id)}
        />
        <h3>{name}</h3>
      </div>
      <div className={styles.quantityInputContainer}>
        <QuantityInput
          value={quantity}
          min={1}
          max={99}
          onChange={handleQuantityChange}
        />
      </div>

      <p className={styles.price}>${price}</p>
      <p className={styles.totalPrice}>${price * quantity}</p>
    </div>
  );
};

export default CartItem;
