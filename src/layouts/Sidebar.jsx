import { forwardRef } from "react";
import { cn } from "../utils/cn";
import logoDark from "../assets/favicon-dark.svg";
import logoLight from "../assets/favicon-light.svg";

const Sidebar = forwardRef(({ collapsed }, ref) => {
  return (
    <aside
      ref={ref}
      className={cn(
        "fixed z-[100] flex h-full w-[240px] flex-col overflow-x-hidden border-r border-slate-300 bg-white transition-[width,left,background-color,border] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] dark:border-slate-700 dark:bg-slate-900",
      )}
    >
      <div className="flex gap-x-3 p-3">
        <img src={logoLight} alt="Logo" className="h-6 w-6 dark:hidden" />
        <img src={logoDark} alt="Logo" className="h-6 w-6 dark:block" />
        {!collapsed && (
          <p className="text-lg font-medium text-slate-900 transition-colors dark:text-slate-50">
            Uangku
          </p>
        )}
      </div>
      <div className="p-3[scrollbar-width: thin] [scrollbar-color: #cbd5e1 transparent] dark:[scrollbar-color: #334155 transparent] flex w-full flex-col gap-y-4 overflow-x-hidden overflow-y-auto"></div>
    </aside>
  );
});

Sidebar.displayName = "Sidebar";

export default Sidebar;
