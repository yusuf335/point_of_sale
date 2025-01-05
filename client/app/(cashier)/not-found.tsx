"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "@/app/styles/error.module.scss";
import not_found from "@/public/images/not_found.webp";
import Button from "@/app/components/ui/button/Button";

export default function NotFound() {
  const router = useRouter();

  const handleReturnHome = () => {
    // Redirect to the Dashbaord page
    router.push("/client/dashboard");
  };
  return (
    <div className={styles.errorPage}>
      <Image
        src={not_found}
        alt="Not found"
        className={styles.errorImage}
        placeholder="empty"
      />
      <div className={styles.errorContent}>
        <h1>Not Found</h1>
        <p>Could not find requested resource</p>
      </div>
      <Button
        onClick={handleReturnHome}
        label="Return Home"
        variant="primary"
      />
    </div>
  );
}
