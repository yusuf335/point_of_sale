"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useLoading } from "../../providers/loading-providers";
import styles from "@/app/styles/layout.module.scss";

// Import Logo
import Logo from "@/public/images/logo-small-white.png";

// Import Nav Item Component
import NavItem from "@/app/components/ui/nav-item/nav-item";

import type { IconType } from "react-icons";

// Import icons
import { RiHome3Fill } from "react-icons/ri";
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
  onClick?: (e: React.MouseEvent) => void;
}

const user: string = "admin";
const cashier: string = "cashier";

const SideBar = () => {
  const router = useRouter();
  const { setIsLoading } = useLoading();

  // Logout handler
  const handleLogout = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsLoading(true);
    document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    router.push("/auth/login");
  };

  const navItems: NavItems[] =
    user === "admin"
      ? [
          { label: "Dashboard", href: "/admin/dashboard", icon: RiHome3Fill },
          { label: "Report", href: "/admin/dashboard", icon: PiChartDonutFill },
          {
            label: "Registers",
            href: "/admin/dashboard",
            icon: FaCashRegister,
          },
          { label: "Categories", href: "/admin/categories", icon: FaBoxes },
          { label: "Orders", href: "/admin/order", icon: FaReceipt },
          { label: "Company", href: "/admin/company", icon: BsBuildingsFill },
          { label: "Users", href: "/admin/users", icon: FaPeopleGroup },
          { label: "Logout", href: "#", icon: IoLogOut, onClick: handleLogout },
        ]
      : [
          {
            label: "Dashboard",
            href: `/${cashier}/dashboard`,
            icon: RiHome3Fill,
          },
          { label: "Shifts", href: `/${cashier}/shift`, icon: MdWorkHistory },
          { label: "Products", href: `/${cashier}/products`, icon: FaBoxes },
          { label: "Logout", href: "#", icon: IoLogOut, onClick: handleLogout },
        ];

  return (
    <>
      {/* Side bar */}
      <div className={styles.sidebar}>
        {/* Logo */}
        <Link href={"/client/dashboard"}>
          <Image src={Logo} alt="Logo" placeholder="empty" />
        </Link>
        {/* Nav */}
        <div className={styles.nav}>
          {navItems.map((item: NavItems, index: number) => (
            <NavItem
              key={index}
              href={item.href}
              label={item.label}
              icon={<item.icon size="1.4rem" />}
              onClick={item.onClick} // Attach onClick for logout
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default SideBar;
