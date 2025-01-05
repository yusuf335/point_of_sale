"use client";

import { IoStorefront } from "react-icons/io5";
import { FaCashRegister, FaBoxes } from "react-icons/fa";
import styles from "@/app/styles/loading.module.scss";
import { createContext, useContext, useState, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

const LoadingContext = createContext({
  isLoading: false,
  setIsLoading: (loading: boolean) => {},
});

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Only reset loading when it's explicitly loading
    if (isLoading) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 500); // Optional: delay for better UX
      return () => clearTimeout(timer);
    }
  }, [pathname, searchParams, isLoading]);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {isLoading && (
        <div className={styles.loadingContainer}>
          <div className={styles.bouncingIcons}>
            <IoStorefront className={styles.icon} />
            <FaCashRegister className={styles.icon} />
            <FaBoxes className={styles.icon} />
          </div>
          <p className={styles.loadingText}>Loading</p>
        </div>
      )}
      {children}
    </LoadingContext.Provider>
  );
}

export const useLoading = () => useContext(LoadingContext);
