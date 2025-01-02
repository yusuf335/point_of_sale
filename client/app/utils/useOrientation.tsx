import { useEffect, useState } from "react";
import { isMobile, isTablet } from "react-device-detect";

const useOrientation = () => {
  const [isLandscape, setIsLandscape] = useState(false);

  useEffect(() => {
    const checkOrientation = () => {
      if (isMobile || isTablet) {
        // Check if the orientation is landscape
        setIsLandscape(window.matchMedia("(orientation: landscape)").matches);
      } else {
        // Not a mobile or tablet; no need to check orientation
        setIsLandscape(false);
      }
    };

    // Initial check
    checkOrientation();

    // Listen for orientation changes
    window.addEventListener("orientationchange", checkOrientation);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("orientationchange", checkOrientation);
    };
  }, []);

  return isLandscape;
};

export default useOrientation;
