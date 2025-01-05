import { IoStorefront } from "react-icons/io5";
import { FaCashRegister, FaBoxes } from "react-icons/fa";
import styles from "@/app/styles/loading.module.scss";

const Loading = () => {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.bouncingIcons}>
        <IoStorefront className={styles.icon} />
        <FaCashRegister className={styles.icon} />
        <FaBoxes className={styles.icon} />
      </div>
      <p className={styles.loadingText}>Loading</p>
    </div>
  );
};

export default Loading;
