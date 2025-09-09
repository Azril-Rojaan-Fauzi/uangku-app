import React from "react";
import { expensePieChartData } from "../../../constants/pieChartData";

const ExpenseForm = () => {
  return (
    <div className="card order-2 col-span-1 md:order-2 md:col-span-2 lg:order-1 lg:col-span-4">
      <div className="card-header">
        <div className="card-title">Form Pengeluaran</div>
      </div>
      <div className="card-body overflow-hidden px-2 py-0">
        <form className="grid grid-cols-1 gap-8 md:grid-cols-4 lg:grid-cols-4">
          <label className="input-card">
            Nominal
            <input type="number" className="input-group" placeholder="100000" />
          </label>

          <label className="input-card">
            Kategori
            <select
              name=""
              id=""
              className="rounded-sm border border-slate-300 px-3 py-1 dark:border-slate-50"
            >
              {expensePieChartData.map(({ categories, value }) => (
                <option
                  value={categories}
                  key={value}
                  className="dark:bg-slate-900 dark:text-slate-50"
                >
                  {categories}
                </option>
              ))}
            </select>
          </label>

          <label className="input-card">
            Tanggal
            <input type="date" className="input-group" placeholder="100000" />
          </label>

          <label className="input-card">
            Catatan
            <input
              type="text"
              className="input-group"
              placeholder="Beli Padang"
            />
          </label>

          <div className="col-span-1 flex justify-between md:col-span-4 xl:mt-10 xl:px-1">
            <button className="w-fit cursor-pointer rounded-md bg-slate-300 px-5 py-1 text-slate-700 transition-colors hover:opacity-80 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600">
              Batal
            </button>
            <button className="w-fit cursor-pointer rounded-md bg-green-600 px-5 py-1 text-white hover:bg-green-700">
              Simpan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ExpenseForm;
