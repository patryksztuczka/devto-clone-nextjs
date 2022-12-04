import { useState, useEffect } from "react";

import { BREAKPOINTS } from "../constants/constants";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const handleWindowSizeChange = () => {
    setIsMobile(window.innerWidth <= BREAKPOINTS.mobile);
  };

  useEffect(() => {
    handleWindowSizeChange();
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);
  return isMobile;
};
export default useIsMobile;
