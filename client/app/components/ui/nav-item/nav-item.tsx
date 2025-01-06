import Link from "next/link";
import styles from "./nav-item.module.scss";

interface NavItemProps {
  label: string;
  href: string;
  icon?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const NavItem = ({ label, href, icon = null, onClick }: NavItemProps) => {
  return (
    <Link href={href} onClick={onClick} className={styles.navItem}>
      {icon && <span className={styles.icon}>{icon}</span>}
      <span className={styles.label}>{label}</span>
    </Link>
  );
};

export default NavItem;
