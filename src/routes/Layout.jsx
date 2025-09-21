import { Outlet } from "react-router-dom";
import Header from "../layouts/Header";
import Sidebar from "../layouts/Sidebar";
import { cn } from "../utils/cn";
import useCollapsed from "../hooks/useCollapsed";

const Layout = () => {
  const { collapsed, setCollapsed, sidebarRef } = useCollapsed();

  return (
    <div className="min-h-screen bg-slate-100 transition-colors dark:bg-slate-950">
      <div
        className={cn(
          "pointer-events-none fixed inset-0 -z-10 bg-black opacity-0 transition-opacity",
          !collapsed &&
            "max-md:pointer-events-auto max-md:z-50 max-md:opacity-30",
        )}
      />
      <Sidebar ref={sidebarRef} collapsed={collapsed} />
      <div
        className={cn(
          "transition-[margin] duration-300",
          collapsed ? "md:ml-[70px]" : "md:ml-[240px]",
        )}
      >
        <Header collapsed={collapsed} setCollapsed={setCollapsed} />
        <div className="h-[calc(100vh-60px)] overflow-x-hidden overflow-y-auto p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
