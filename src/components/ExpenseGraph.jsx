import {
  AreaChart,
  Area,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useTheme } from "../hooks/theme/useTheme";
import useMonthlyTransactions from "../hooks/finance/useMonthlyTransaction";
import formatNumber from "../utils/formatNumber";
import { useState } from "react";
import { years } from "../constants/monthHistoryData";

const ExpenseGraph = () => {
  const currentYear = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const { monthlyArray } = useMonthlyTransactions(selectedYear);
  const { theme } = useTheme();
  const isExpenseEmpty =
    !monthlyArray.expense ||
    monthlyArray.expense.length === 0 ||
    monthlyArray.expense.every((item) => item.total === 0);

  return (
    <div className="card col-span-1 md:col-span-2 lg:col-span-7">
      <div className="card-header">
        <div className="card-title">Pengeluaran</div>
        <label className="input-card w-fit">
          <select
            className="rounded-sm border border-slate-300 px-3 py-1 dark:border-slate-50"
            value={selectedYear}
            onChange={(e) => setSelectedYear(Number(e.target.value))}
          >
            {years.map((year) => (
              <option value={year} key={year} className="option-group">
                {year}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="card-body overflow-hidden p-0">
        {isExpenseEmpty ? (
          <div className="flex h-[300px] items-center justify-center">
            <p className="text-center text-2xl text-slate-900 dark:text-slate-50">
              Anda belum membuat pengeluaran tahun ini
            </p>
          </div>
        ) : (
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart
              data={monthlyArray.expense}
              margin={{ top: 10, bottom: 0, right: 0, left: 0 }}
            >
              <defs>
                <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#2563eb" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#2563eb" stopOpacity={0} />
                </linearGradient>
              </defs>
              <Tooltip
                cursor={false}
                formatter={(value) => `Rp ${formatNumber(value)}`}
              />
              <XAxis
                dataKey="month"
                strokeWidth={0}
                stroke={theme === "light" ? "#475569" : "#94a3b8"}
              />
              <YAxis
                dataKey="total"
                strokeWidth={0}
                stroke={theme === "light" ? "#475569" : "#94a3b8"}
                tickFormatter={(value) => `${value / 1000000}jt`}
                tickMargin={6}
              />
              <Area
                type="monotone"
                dataKey="total"
                stroke="#2563eb"
                fillOpacity={1}
                fill="url(#colorTotal)"
              />
            </AreaChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
};

export default ExpenseGraph;
