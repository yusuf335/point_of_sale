"use client";

import { Suspense } from "react";
import { EmblaOptionsType } from "embla-carousel";
import Image, { StaticImageData } from "next/image";

// Import Styles
import styles from "./layout.module.scss";

// Import AuthSlide Component
import AuthSlide from "../../components/slides/authPage/AuthSlide";

// Images
import store from "../../public/authSlide/store.webp";
import product from "../../public/authSlide/product.webp";
import analytics from "../../public/authSlide/analytics.webp";
import logo from "../../public/images/logo-small.png";

interface SlideType {
  image: StaticImageData;
  alt: string;
  text: string;
}

const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDES: SlideType[] = [
  {
    image: store,
    alt: "store",
    text: "Suitable for any kind of business, the app is designed to help you grow",
  },
  {
    image: product,
    alt: "product",
    text: "Manage your products, track your sales, and grow your business online",
  },
  {
    image: analytics,
    alt: "analytics",
    text: "Get insights on your business, track your sales, and grow your business online",
  },
];

const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        {/* left Side */}
        <div className={styles.leftSide}>
          <div className={styles.authSlide}>
            <AuthSlide slides={SLIDES} options={OPTIONS} />
          </div>
        </div>

        {/* right Side */}
        <div className={styles.rightSide}>
          {/* Logo */}
          <div className={styles.logoContainer}>
            <Image src={logo} alt="logo" className={styles.logo} />
          </div>
          <div className={styles.form}>
            <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
