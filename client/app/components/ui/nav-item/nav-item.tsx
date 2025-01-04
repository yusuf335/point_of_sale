import Link from "next/link";
import styles from "./nav-item.module.scss";

interface NavItemProps {
  label: string;
  href: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}

const NavItem = ({ label, href, icon, onClick }: NavItemProps) => {
  return (
    <>
      <Link href={href} onClick={onClick}>
        <div className={styles.navItem}>
          {icon}
          {label}
        </div>
      </Link>
    </>
  );
};

export default NavItem;
