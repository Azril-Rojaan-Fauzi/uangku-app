import {
  Cell,
  Legend,
  Pie,
  ResponsiveContainer,
  Tooltip,
  PieChart,
} from "recharts";
import {
  dataColors,
  expensePieChartData,
} from "../../../constants/pieChartData";

const ExpensePieChart = () => {
  return (
    <div className="card col-span-1 md:col-span-2 lg:col-span-3">
      <div className="card-header">
        <p className="card-title">Ringkasan Pengeluaran</p>
      </div>

      <div className="card-body p-0">
        <ResponsiveContainer width="100%" height={300}>
          {expensePieChartData.reduce((acc, cur) => acc + cur.value, 0) ===
          0 ? (
            <p className="flex items-center justify-center text-base font-medium text-blue-500 transition-colors dark:text-blue-600">
              Tidak ada data pengeluaran untuk ditampilkan
            </p>
          ) : (
            <PieChart width={500} height={200}>
              <Pie
                data={expensePieChartData}
                dataKey="value"
                nameKey="categories"
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#82ca9d"
                label={false}
              >
                {expensePieChartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={dataColors[entry.categories]} // warna sesuai kategori
                  />
                ))}
              </Pie>
              <Tooltip
                cursor={false}
                formatter={(value, categories) => {
                  const total = expensePieChartData.reduce(
                    (acc, cur) => acc + cur.value,
                    0,
                  );
                  const percent = ((value / total) * 100).toFixed(1);
                  return [
                    `Rp ${value.toLocaleString("id-ID")} (${percent}%)`,
                    categories,
                  ];
                }}
              />
              <Legend verticalAlign="bottom" />
            </PieChart>
          )}
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ExpensePieChart;
