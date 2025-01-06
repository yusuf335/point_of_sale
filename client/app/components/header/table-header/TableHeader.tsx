import { FaPlus } from "react-icons/fa";
import Button from "@/app/components/ui/button/Button";
import styles from "./TableHeader.module.scss";

type TableHeaderProps = {
  title: string;
  btnLabel: string;
  onClick?: () => void;
  icon?: React.ReactNode;
};

const TableHeader = ({ title, btnLabel, onClick, icon }: TableHeaderProps) => {
  return (
    <>
      <div className={styles.headerContainer}>
        <div className={styles.header}>
          {icon}
          <h3>{title}</h3>
        </div>
        <Button
          label={btnLabel}
          type="button"
          onClick={onClick}
          icon={<FaPlus />}
          btnStyle={styles.btnAdd}
        />
      </div>
      <hr className={styles.hr} />
    </>
  );
};

export default TableHeader;
