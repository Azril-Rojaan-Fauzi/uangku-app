import {
  AreaChart,
  Area,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { overviewData } from "../../constants/overviewData";
import { useTheme } from "../../hooks/theme/useTheme";

const ExpenseGraph = () => {
  const { theme } = useTheme();
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-7">
      <div className="card col-span-1 md:col-span-2 lg:col-span-4">
        <div className="card-header">
          <div className="card-title">Ringkasan Pengeluaran</div>
        </div>
        <div className="card-body overflow-hidden p-0">
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart
              data={overviewData}
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
                formatter={(value) =>
                  // agar setiap 3 angka ada titiknya
                  new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                    minimumFractionDigits: 0, // biar ga ada ,00
                  }).format(value)
                }
              />
              <XAxis
                dataKey="name"
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
        </div>
      </div>
      <div className="card col-span-1 md:col-span-2 lg:col-span-3"></div>
    </div>
  );
};

export default ExpenseGraph;
