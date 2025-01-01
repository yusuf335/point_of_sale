import Link from "next/link";
import styles from "./nav-item.module.scss";

interface NavItemProps {
  label: string;
  href: string;
  icon?: React.ReactNode;
}

const NavItem = ({ label, href, icon }: NavItemProps) => {
  return (
    <>
      <Link href={href}>
        <div className={styles.navItem}>
          {icon}
          {label}
        </div>
      </Link>
    </>
  );
};

export default NavItem;
