import { forwardRef } from "react";
import { cn } from "../utils/cn";
import logoDark from "../assets/favicon-dark.svg";
import logoLight from "../assets/favicon-light.svg";
import { navbarLinks } from "../constants";
import { NavLink } from "react-router-dom";

const Sidebar = forwardRef(({ collapsed }, ref) => {
  // props collapsed dikirim dari Layout.jsx
  return (
    <aside
      ref={ref}
      className={cn(
        "fixed z-[100] flex h-full w-[240px] flex-col overflow-x-hidden border-r border-slate-300 bg-white transition-[width,left,background-color,border] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] dark:border-slate-700 dark:bg-slate-900",
        collapsed ? "md:w-[70px] md:items-center" : "md:w-[240px]",
        collapsed ? "max-md:-left-full" : "max-md:left-0",
      )}
    >
      <div className="flex gap-x-3 p-3">
        <img src={logoLight} alt="Logo" className="h-6 w-6 dark:hidden" />
        <img src={logoDark} alt="Logo" className="hidden h-6 w-6 dark:block" />
        {!collapsed && (
          <p className="text-lg font-medium text-slate-900 transition-colors dark:text-slate-50">
            Uangku
          </p>
        )}
      </div>
      <div className="[scrollbar-width: thin] flex w-full flex-col gap-y-4 overflow-x-hidden overflow-y-auto p-3">
        {navbarLinks.map((navbarLink) => (
          <nav
            key={navbarLink.title}
            className={cn("sidebar-group", collapsed && "md:items-center")}
          >
            <p
              className={cn("sidebar-group-title", collapsed && "md:w-[45px]")}
            >
              {navbarLink.title}
            </p>
            {navbarLink.links.map((link) => (
              <NavLink
                key={link.label}
                to={link.path}
                className={cn("sidebar-item", collapsed && "md:w-[45px]")}
              >
                <link.icon size={22} className="flex-shrink-0" />
                {!collapsed && (
                  <p className="whitespace-nowrap">{link.label}</p>
                )}
              </NavLink>
            ))}
          </nav>
        ))}
      </div>
    </aside>
  );
});

Sidebar.displayName = "Sidebar";

export default Sidebar;
