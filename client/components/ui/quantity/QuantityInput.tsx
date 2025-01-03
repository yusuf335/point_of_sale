import React, { useState } from "react";
import styles from "./QuantityInput.module.scss";

interface QuantityInputProps {
  value?: number;
  min?: number;
  max?: number;
  onChange?: (value: number) => void;
}

const QuantityInput: React.FC<QuantityInputProps> = ({
  value = 1,
  min = 1,
  max = 99,
  onChange,
}) => {
  const [quantity, setQuantity] = useState(value);

  const handleDecrement = () => {
    if (quantity > min) {
      const newValue = quantity - 1;
      setQuantity(newValue);
      onChange?.(newValue);
    }
  };

  const handleIncrement = () => {
    if (quantity < max) {
      const newValue = quantity + 1;
      setQuantity(newValue);
      onChange?.(newValue);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value, 10);
    if (!isNaN(newValue) && newValue >= min && newValue <= max) {
      setQuantity(newValue);
      onChange?.(newValue);
    }
  };

  return (
    <div className={styles.quantityInput}>
      <button
        type="button"
        onClick={handleDecrement}
        className={styles.decrement}
        disabled={quantity <= min}
      >
        -
      </button>
      <input
        type="number"
        value={quantity}
        onChange={handleInputChange}
        className={styles.input}
      />
      <button
        type="button"
        onClick={handleIncrement}
        className={styles.increment}
        disabled={quantity >= max}
      >
        +
      </button>
    </div>
  );
};

export default QuantityInput;
