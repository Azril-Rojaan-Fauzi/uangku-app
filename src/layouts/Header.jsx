import { ChevronsLeft, Moon, Sun } from "lucide-react";
import { useTheme } from "../hooks/theme/useTheme";
import BalanceDisplay from "./BalanceDisplay";
import useGetUserInfo from "../hooks/api/useGetUserInfo";
import defaultAvatar from "../assets/img/default-avatar.jpeg";

const Header = ({ collapsed, setCollapsed }) => {
  const { profilePhoto } = useGetUserInfo();
  const { theme, setTheme } = useTheme();

  return (
    <header className="relative z-10 flex h-[60px] items-center justify-between bg-white px-4 shadow-md transition-colors dark:bg-slate-900">
      <div className="flex items-center gap-x-3">
        <button
          className="flex size-10 h-10 flex-shrink-0 cursor-pointer items-center justify-center gap-x-2 rounded-lg p-2 text-slate-400 transition-colors hover:bg-blue-50 hover:text-slate-500 dark:hover:bg-blue-950 dark:hover:text-slate-300"
          onClick={() => setCollapsed(!collapsed)}
        >
          <ChevronsLeft className={collapsed && "rotate-180"} />
        </button>
        <BalanceDisplay />
      </div>
      <div className="flex items-center gap-x-3">
        <button
          className="flex size-10 h-10 flex-shrink-0 cursor-pointer items-center justify-center gap-x-2 rounded-lg p-2 text-slate-400 transition-colors hover:bg-blue-50 hover:text-slate-500 dark:hover:bg-blue-950 dark:hover:text-slate-300"
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
              onError={(e) => {
                e.currentTarget.src = defaultAvatar; // fallback ke default
              }}
            />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
