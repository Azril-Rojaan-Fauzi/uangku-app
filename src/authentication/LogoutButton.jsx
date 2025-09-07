import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";
import { NavLink } from "react-router-dom";
import { cn } from "../utils/cn";
import { LogOut, X } from "lucide-react";
import { useState } from "react";

const LogoutButton = ({ collapsed }) => {
  const [showModal, setShowModal] = useState(false);
  const handleLogout = async () => {
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
      <button
        className={cn(
          "flex h-[40px] w-full flex-shrink-0 cursor-pointer items-center gap-x-3 rounded-lg p-3 text-base font-medium text-slate-900 transition-colors hover:bg-blue-50 dark:text-slate-50 dark:hover:bg-blue-950",
          collapsed && "md:w-[45px]",
        )}
        onClick={() => setShowModal(true)}
      >
        <LogOut size={22} className="flex-shrink-0" />
        {!collapsed && <p className="whitespace-nowrap">Logout</p>}
      </button>

      {showModal && (
        <div
          onClick={() => setShowModal(false)}
          className="fixed inset-0 flex items-center justify-center bg-black/50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-65 rounded-xl bg-white p-6 shadow-lg md:w-80 dark:bg-slate-900"
          >
            <div className="flex justify-between">
              <h2 className="mb-4 text-lg font-semibold dark:text-slate-50">
                Konfirmasi
              </h2>
              <X
                size={27}
                className="cursor-pointer items-center dark:text-slate-50"
                onClick={() => setShowModal(false)}
              />
            </div>
            <p className="mb-6 dark:text-slate-50">
              Apakah kamu yakin ingin keluar?
            </p>
            <div className="flex justify-between">
              <button
                onClick={() => setShowModal(false)}
                className="cursor-pointer rounded-lg bg-slate-800 px-4 py-2 text-slate-50 transition-all hover:opacity-80 dark:bg-slate-500"
              >
                Batal
              </button>
              <button
                onClick={handleLogout}
                className="cursor-pointer rounded-lg bg-red-500 px-4 py-2 text-slate-50 hover:bg-red-400"
              >
                Keluar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LogoutButton;
