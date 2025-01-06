// PaymentModal.tsx
import React, { useState, useRef, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import styles from "./PaymentModal.module.scss";

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  totalAmount: number;
  onDashboardSearchFocus?: () => void;
}

const PaymentModal: React.FC<PaymentModalProps> = ({
  isOpen,
  onClose,
  totalAmount,
  onDashboardSearchFocus,
}) => {
  const [amountPaying, setAmountPaying] = useState<string>("");
  const [paymentOption, setPaymentOption] = useState<string>("Cash");

  const inputRef = useRef<HTMLInputElement>(null);

  const popularAmounts = [15.0, 20.0, 50.0, 100.0];
  const numpad = [
    1,
    2,
    3,
    "clear",
    4,
    5,
    6,
    "←",
    7,
    8,
    9,
    "PAY",
    0,
    ".",
    "00",
    "BACK",
  ];

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    } else if (!isOpen && onDashboardSearchFocus) {
      onDashboardSearchFocus(); // Refocus dashboard search when modal closes
    }
  }, [isOpen, onDashboardSearchFocus]);

  //   Check if the user is using keyboard to input the amount
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Allow: backspace, delete, tab, escape, enter, decimal point
    if (
      e.key === "Backspace" ||
      e.key === "Delete" ||
      e.key === "Tab" ||
      e.key === "Escape" ||
      e.key === "Enter" ||
      e.key === "." ||
      e.key === "ArrowLeft" ||
      e.key === "ArrowRight"
    ) {
      // Allow the key
      if (e.key === "Enter") {
        onClose();
      }
      return;
    }

    // Allow numbers 0-9
    if (!/[0-9]/.test(e.key)) {
      e.preventDefault();
    }

    // Prevent multiple decimal points
    if (e.key === "." && amountPaying.includes(".")) {
      e.preventDefault();
    }

    // Prevent more than 2 decimal places
    if (amountPaying.includes(".")) {
      const decimalPlaces = amountPaying.split(".")[1];
      if (decimalPlaces && decimalPlaces.length >= 2) {
        e.preventDefault();
      }
    }
  };

  //   Handle the amount change
  const handleAmountChange = (value: string) => {
    // Remove any non-numeric characters except decimal point
    const sanitizedValue = value.replace(/[^\d.]/g, "");

    // Ensure only one decimal point
    const parts = sanitizedValue.split(".");
    const formattedValue =
      parts.length > 1 ? `${parts[0]}.${parts[1]}` : sanitizedValue;

    // Limit to 2 decimal places
    if (parts.length > 1 && parts[1].length > 2) {
      return;
    }

    setAmountPaying(formattedValue);
  };

  //   Handle the numpad button click
  const handleNumberClick = (num: string): void => {
    if (num === "clear") {
      setAmountPaying("");
      inputRef.current?.focus();
      return;
    }

    if (num === "backspace") {
      setAmountPaying((prev) => prev.slice(0, -1));
      inputRef.current?.focus();
      return;
    }

    let newAmount = amountPaying;
    if (num === "." && amountPaying.includes(".")) {
      return;
    }

    if (num === "00") {
      if (!amountPaying) {
        newAmount = "0";
      } else {
        newAmount = amountPaying + "00";
      }
    } else {
      newAmount = amountPaying + num;
    }

    // Validate decimal places
    const parts = newAmount.split(".");
    if (parts.length > 1 && parts[1].length > 2) {
      return;
    }

    setAmountPaying(newAmount);
    inputRef.current?.focus();
  };

  //   If the modal is not open, return null
  if (!isOpen) return null;

  //   Calculate the change returned
  const chnageReturned =
    (parseFloat(amountPaying) || 0) - totalAmount > 0
      ? (parseFloat(amountPaying) || 0) - totalAmount
      : 0;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h2>Checkout</h2>
          <div className={styles.headerRight}>
            <button onClick={onClose} className={styles.closeButton}>
              <IoClose size={24} />
            </button>
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.totals}>
            <div>
              <p className={styles.label}>Total paying</p>
              <p className={styles.amount}>
                ${(parseFloat(amountPaying) || 0).toFixed(2)}
              </p>
            </div>
            <div>
              <p className={styles.label}>Balance</p>
              <p className={`${styles.amount} ${styles.balance}`}>
                ${totalAmount.toFixed(2)}
              </p>
            </div>
            <div>
              <p className={styles.label}>Change</p>
              <p className={`${styles.amount} ${styles.change}`}>
                ${chnageReturned.toFixed(2)}
              </p>
            </div>
          </div>

          <div className={styles.paymentInput}>
            <label className={styles.label}>Amount paying</label>
            <div className={styles.inputGroup}>
              <input
                ref={inputRef}
                type="text"
                value={amountPaying}
                onChange={(e) => handleAmountChange(e.target.value)}
                onKeyDown={handleKeyDown}
                className={styles.amountInput}
                placeholder="0"
                autoFocus={true}
                onBlur={() => inputRef.current?.focus()}
              />
              <select
                value={paymentOption}
                onChange={(e) => setPaymentOption(e.target.value)}
              >
                <option>Cash</option>
                <option>Card</option>
              </select>
            </div>
          </div>

          <div className={styles.popularAmounts}>
            <p className={styles.label}>Quick input</p>
            <div className={styles.amountGrid}>
              {popularAmounts.map((amount) => (
                <button
                  key={amount}
                  onClick={() => setAmountPaying(amount.toFixed(2))}
                >
                  ${amount.toFixed(2)}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.numpad}>
            {numpad.map((key) => (
              <button
                key={key}
                onClick={() => {
                  if (key === "←") handleNumberClick("backspace");
                  else if (key === "PAY") onClose();
                  else if (key === "BACK") onClose();
                  else if (
                    typeof key === "number" ||
                    key === "." ||
                    key === "00" ||
                    key === "clear"
                  ) {
                    handleNumberClick(key.toString());
                  }
                  inputRef.current?.focus();
                }}
                className={`
                  ${styles.numpadButton}
                  ${key === "PAY" ? styles.payButton : ""}
                  ${key === "BACK" ? styles.backButton : ""}
                `}
              >
                {key}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
