import styles from "./layout.module.scss";

interface CompanyLayoutProps {
  children: React.ReactNode;
  company: React.ReactNode;
  stores: React.ReactNode;
}

const CompanyLayout = ({ children, company, stores }: CompanyLayoutProps) => {
  return (
    <>
      <div>{company}</div>
      <h2 className={styles.h2Centered}>Stores</h2>
      <div>{stores}</div>
    </>
  );
};

export default CompanyLayout;
