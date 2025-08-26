import React from "react";

const BalanceDisplay = () => {
  return (
    <div className="saldo">
      <p className="text-slate-500 dark:text-slate-300">Rp.</p>
      <p className="text-base text-slate-700 dark:text-slate-50">
        {/* Angka untuk saldo */}
        2000000
      </p>
    </div>
  );
};

export default BalanceDisplay;
