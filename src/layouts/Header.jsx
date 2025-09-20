import { ChevronsLeft, Moon, Sun } from "lucide-react";
import { useTheme } from "../hooks/theme/useTheme";
import BalanceDisplay from "./BalanceDisplay";
import useGetUserInfo from "../hooks/api/useGetUserInfo";
import defaultAvatar from "../assets/img/default-avatar.png";

const Header = ({ collapsed, setCollapsed }) => {
  const { profilePhoto } = useGetUserInfo();
  const { theme, setTheme } = useTheme();

  return (
    <header className="relative z-10 flex h-[60px] items-center justify-between bg-white px-4 shadow-md transition-colors dark:bg-slate-900">
      <div className="flex items-center gap-x-3">
        <button
          className="btn-ghost size-10 cursor-pointer"
          onClick={() => setCollapsed(!collapsed)}
        >
          <ChevronsLeft className={collapsed && "rotate-180"} />
        </button>
        <BalanceDisplay />
      </div>
      <div className="flex items-center gap-x-3">
        <button
          className="btn-ghost size-10 cursor-pointer"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          <Sun size={20} className="dark:hidden" />
          <Moon size={20} className="hidden dark:block" />
        </button>
        {profilePhoto && (
          <div className="size-9 overflow-hidden rounded-full">
            <img
              src={profilePhoto || defaultAvatar}
              alt="tes"
              className="h-full w-full object-cover"
            />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
