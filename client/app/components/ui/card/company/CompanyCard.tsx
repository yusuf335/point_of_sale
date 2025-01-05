import { BsBuildingsFill } from "react-icons/bs";
import styles from "./CompanyCard.module.scss";

interface StoreCardProps {
  name: string;
  address: string;
  phone: string;
}

const CompanyCard = ({ name, address, phone }: StoreCardProps) => {
  return (
    <div className={styles.companyCard}>
      <div className={styles.companyInfo}>
        <h3>{name}</h3>
        <p>{address}</p>
        <p>{phone}</p>
      </div>
      <div className={styles.companyIcon}>
        <BsBuildingsFill />
      </div>
    </div>
  );
};

export default CompanyCard;
