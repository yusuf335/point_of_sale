import Link from "next/link";
import Image from "next/image";
import styles from "@/app/styles/layout.module.scss";

// Import Logo
import Logo from "@/public/images/logo-small-white.png";

// Import Nav Item Component
import NavItem from "@/components/ui/nav-item/nav-item";

import type { IconType } from "react-icons";

//Import icon
import { RiHome3Fill, RiUser3Fill } from "react-icons/ri";
import { FaBoxes, FaReceipt, FaCashRegister } from "react-icons/fa";
import { PiChartDonutFill } from "react-icons/pi";
import { IoLogOut } from "react-icons/io5";

interface NavItems {
  label: string;
  href: string;
  icon: IconType;
}

const navItems: NavItems[] = [
  { label: "Dashboard", href: "/client/dashboard", icon: RiHome3Fill },
  { label: "Report", href: "/client/dashboard", icon: PiChartDonutFill },
  { label: "Register", href: "/client/dashboard", icon: FaCashRegister },
  { label: "Products", href: "/client/products", icon: FaBoxes },
  { label: "Orders", href: "/client/orders", icon: FaReceipt },
  { label: "Profile", href: "/client/settings", icon: RiUser3Fill },
  { label: "Logout", href: "/client/settings", icon: IoLogOut },
];

const SideBar = () => {
  return (
    <>
      {/* Side bar */}
      <div className={styles.sidebar}>
        {/* Logo */}
        <Link href={"/client/dashboard"}>
          <Image src={Logo} alt="Logo" />
        </Link>
        {/* Nav */}
        <div className={styles.nav}>
          {navItems.map((item: NavItems, index: number) => (
            <NavItem
              key={index}
              href={item.href}
              label={item.label}
              icon={<item.icon size="1.4rem" />}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default SideBar;
