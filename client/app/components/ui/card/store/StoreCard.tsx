import { IoStorefront } from "react-icons/io5";
import { FaPhoneAlt, FaRegAddressCard } from "react-icons/fa";
import styles from "./StoreCard.module.scss";

interface StoreCardProps {
  key: number;
  id: number;
  name: string;
  address: string;
  phone: string;
}

const StoreCard = ({ id, name, address, phone }: StoreCardProps) => {
  return (
    <div key={id} className={styles.storeCard}>
      <div className={styles.storeInfo}>
        <h3>{name}</h3>
        <p>
          <FaRegAddressCard />
          {address}
        </p>
        <p>
          <FaPhoneAlt />
          {phone}
        </p>
      </div>
      <div className={styles.storeIcon}>
        <IoStorefront />
      </div>
    </div>
  );
};

export default StoreCard;
