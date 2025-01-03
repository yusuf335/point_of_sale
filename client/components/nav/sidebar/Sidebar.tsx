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
import { IoLogOut, IoStorefront } from "react-icons/io5";
import { FaPeopleGroup } from "react-icons/fa6";
import { BsBuildingsFill } from "react-icons/bs";
import { MdWorkHistory } from "react-icons/md";

interface NavItems {
  label: string;
  href: string;
  icon: IconType;
}

const user: string = "cashier";

const navItems: NavItems[] =
  user === "manager"
    ? [
        { label: "Dashboard", href: "/admin/dashboard", icon: RiHome3Fill },
        { label: "Report", href: "/admin/dashboard", icon: PiChartDonutFill },
        { label: "Registers", href: "/admin/dashboard", icon: FaCashRegister },
        { label: "Products", href: "/admin/products", icon: FaBoxes },
        { label: "Orders", href: "/admin/orders", icon: FaReceipt },
        { label: "Company", href: "/admin/orders", icon: BsBuildingsFill },
        { label: "Stores", href: "/admin/orders", icon: IoStorefront },
        { label: "Employee", href: "/admin/orders", icon: FaPeopleGroup },
        { label: "Profile", href: "/client/settings", icon: RiUser3Fill },
        { label: "Logout", href: "/client/settings", icon: IoLogOut },
      ]
    : [
        { label: "Dashboard", href: "/client/dashboard", icon: RiHome3Fill },
        { label: "Shifts", href: "/client/shift", icon: MdWorkHistory },
        { label: "Products", href: "/client/products", icon: FaBoxes },
        { label: "Orders", href: "/client/orders", icon: FaReceipt },
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
