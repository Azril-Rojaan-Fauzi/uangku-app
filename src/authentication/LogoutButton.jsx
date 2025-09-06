import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";
import { NavLink } from "react-router-dom";
import { cn } from "../utils/cn";
import { LogOut } from "lucide-react";

const LogoutButton = ({ collapsed }) => {
  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <nav className={cn("sidebar-group", collapsed && "md:items-center")}>
        <p className={cn("sidebar-group-title", collapsed && "md:w-[45px]")}>
          Akun
        </p>
      </nav>
      <NavLink
        className={cn(
          "flex h-[40px] w-full flex-shrink-0 items-center gap-x-3 rounded-lg p-3 text-base font-medium text-slate-900 transition-colors hover:bg-blue-50 dark:text-slate-50 dark:hover:bg-blue-950",
          collapsed && "md:w-[45px]",
        )}
        onClick={logout}
      >
        <LogOut size={22} className="flex-shrink-0" />
        {!collapsed && <p className="whitespace-nowrap">Logout</p>}
      </NavLink>
    </>
  );
};

export default LogoutButton;
