import { useMediaQuery } from "@uidotdev/usehooks";
import React, { useEffect, useRef, useState } from "react";
import useClickOutside from "./theme/useClickOutside";

const useCollapsed = () => {
  const isDesktopDevice = useMediaQuery("(min-width: 768px)");
  const [collapsed, setCollapsed] = useState(!isDesktopDevice);

  const sidebarRef = useRef(null);

  useEffect(() => {
    setCollapsed(!isDesktopDevice);
  }, [isDesktopDevice]);

  useClickOutside([sidebarRef], () => {
    if (!isDesktopDevice && !collapsed) {
      setCollapsed(true);
    }
  });
  return { collapsed, setCollapsed, sidebarRef };
};

export default useCollapsed;
