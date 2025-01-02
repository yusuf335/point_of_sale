import { IoIosRemoveCircle } from "react-icons/io";
import styles from "./Cart.module.scss";

interface CartItemProps {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const CartItem = ({ id, name, price, quantity }: CartItemProps) => {
  return (
    <div>
      <div className={styles.cartItem}>
        <div className={styles.cartItemHeader}>
          <IoIosRemoveCircle size="1.2rem" className={styles.removeicon} />
          <h3>{name}</h3>
        </div>
        <p>Quantity: {quantity}</p>
        <p>Price: ${price}</p>
        <p>Total: ${price * quantity}</p>
      </div>
    </div>
  );
};

export default CartItem;
