"use client";
import { useState } from "react";
import styles from "@/app/styles/layout.module.scss";

import { FaBars } from "react-icons/fa";

const MobileNav = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <>
      <div className={styles.mobileNav}>
        <FaBars size="1.5rem" onClick={() => setShowSidebar(!showSidebar)} />
        {showSidebar && (
          <div className={styles.sidebar}>
            <nav className={styles.nav}>
              <a href="#home">Home</a>
              <a href="#about">About</a>
            </nav>
          </div>
        )}
      </div>
    </>
  );
};

export default MobileNav;
