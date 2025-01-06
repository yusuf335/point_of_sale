import styles from "./Header.module.scss";

type TableHeaderProps = {
  title: string;
  icon?: React.ReactNode;
};

const Header = ({ title, icon }: TableHeaderProps) => {
  return (
    <>
      <div className={styles.headerContainer}>
        <div className={styles.header}>
          {icon}
          <h3>{title}</h3>
        </div>
      </div>
      <hr className={styles.hr} />
    </>
  );
};

export default Header;
