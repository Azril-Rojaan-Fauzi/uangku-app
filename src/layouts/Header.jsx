import { ChevronsLeft } from "lucide-react";

const Header = ({ collapsed, setCollapsed }) => {
  return (
    <header className="relative z-10 flex h-[60px] items-center justify-between bg-white px-4 shadow-md transition-colors dark:bg-slate-900">
      <div className="flex items-center gap-x-3">
        <button
          className="btn-ghost size-10 cursor-pointer"
          onClick={() => setCollapsed(!collapsed)}
        >
          <ChevronsLeft className={collapsed && "rotate-180"} />
        </button>
        <div className="dompet">
          <p className="text-slate-500 dark:text-slate-300">Rp.</p>
          <p className="text-base text-slate-700 dark:text-slate-50">
            2000000
            {/* Angka untuk saldo */}
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
