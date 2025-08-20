import { Outlet } from "react-router-dom";
import Header from "../layouts/Header";
import Sidebar from "../layouts/Sidebar";
import { cn } from "../utils/cn";
import { useMediaQuery } from "@uidotdev/usehooks";
import { useRef, useState } from "react";

const Layout = () => {
  const isDesktopDevice = useMediaQuery("(min-width: 768px)");
  const [collapsed, setCollapsed] = useState(!isDesktopDevice);

  const sidebarRef = useRef(null);

  return (
    <div className="min-h-screen bg-slate-100 transition-colors dark:bg-slate-900">
      <Sidebar ref={sidebarRef} collapsed={collapsed} />
      <div className={cn("transition-[margin] duration-300")}>
        <Header />
        <div className="h-[calc(100vh-60px)] overflow-x-hidden overflow-y-auto p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
