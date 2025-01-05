import styles from "./Statistics.module.scss";

interface StatisticsProps {
  title: string;
  value: number;
  icon: React.ReactNode;
}

const Statistics = ({ title, value, icon }: StatisticsProps) => {
  return (
    <div className={styles.statContainer}>
      <div className={styles.statCard}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.value}>{value}</p>
      </div>
      <div className={styles.iconContainer}>{icon}</div>
    </div>
  );
};

export default Statistics;
