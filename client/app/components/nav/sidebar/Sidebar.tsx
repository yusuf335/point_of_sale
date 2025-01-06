"use client";

import React, { useEffect, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useLoading } from "../../providers/loading-providers";
import styles from "@/app/styles/layout.module.scss";
import { gql, useQuery } from "@apollo/client";

// Import Logo
import Logo from "@/public/images/logo-small-white.png";

// Import Nav Item Component
import NavItem from "@/app/components/ui/nav-item/nav-item";

import type { IconType } from "react-icons";
import { RiHome3Fill } from "react-icons/ri";
import { FaBoxes, FaReceipt, FaCashRegister } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import { FaPeopleGroup } from "react-icons/fa6";
import { BsBuildingsFill } from "react-icons/bs";
import { MdWorkHistory, MdCategory } from "react-icons/md";

const GET_USER_ROLE = gql`
  query GetUserRoleAndStatus {
    getUserRoleAndStatus {
      role
      isActive
      isVerified
    }
  }
`;

enum UserRole {
  Admin = "admin",
  Cashier = "cashier",
}

interface NavItems {
  label: string;
  href: string;
  icon: IconType;
  onClick?: (e: React.MouseEvent) => void;
}

const SideBar = () => {
  const router = useRouter();
  const { setIsLoading } = useLoading();
  const { loading, data } = useQuery(GET_USER_ROLE);

  let userRole: UserRole = UserRole.Cashier;

  if (data) {
    userRole = data?.getUserRoleAndStatus?.role.toLowerCase() as UserRole;
  }

  useEffect(() => {
    setIsLoading(loading);
  }, [loading]);

  const handleLogout = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsLoading(true);
    document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    router.push("/auth/login");
  };

  const generateNavItems = (role: UserRole): NavItems[] => {
    const commonItems: NavItems[] = [
      {
        label: "Logout",
        href: "#",
        icon: IoLogOut,
        onClick: handleLogout,
      },
    ];

    if (role === UserRole.Admin) {
      return [
        { label: "Dashboard", href: "/admin/dashboard", icon: RiHome3Fill },
        { label: "Registers", href: "/admin/registers", icon: FaCashRegister },
        { label: "Products", href: "/admin/products", icon: FaBoxes },
        { label: "Categories", href: "/admin/categories", icon: MdCategory },
        { label: "Orders", href: "/admin/orders", icon: FaReceipt },
        { label: "Company", href: "/admin/company", icon: BsBuildingsFill },
        { label: "Users", href: "/admin/users", icon: FaPeopleGroup },
        ...commonItems,
      ];
    }

    return [
      { label: "Dashboard", href: "/cashier/dashboard", icon: RiHome3Fill },
      { label: "Registers", href: "/cashier/registers", icon: MdWorkHistory },
      { label: "Products", href: "/cashier/products", icon: FaBoxes },
      { label: "Categories", href: "/cashier/categories", icon: MdCategory },
      ...commonItems,
    ];
  };

  const navItems = useMemo(() => generateNavItems(userRole), [userRole]);

  return (
    <div className={styles.sidebar}>
      {/* Logo */}
      <Link href={"/client/dashboard"}>
        <Image src={Logo} alt="Logo" placeholder="empty" priority />
      </Link>

      {/* Navigation */}
      <div className={styles.nav}>
        {navItems.map((item, index) => (
          <NavItem
            key={index}
            href={item.href}
            label={item.label}
            icon={<item.icon size="1.4rem" />}
            onClick={item.onClick}
          />
        ))}
      </div>
    </div>
  );
};

export default React.memo(SideBar);
