import {
  Cell,
  Legend,
  Pie,
  ResponsiveContainer,
  Tooltip,
  PieChart,
} from "recharts";

const PieChartGroup = ({
  title,
  pieChartData,
  pieChartValue,
  pieChartCategories,
  pieChartColors,
}) => {
  return (
    <div className="card order-1 col-span-1 md:order-1 md:col-span-2 lg:order-2 lg:col-span-3">
      <div className="card-header">
        <p className="card-title">Ringkasan {title} bulan ini</p>
      </div>

      <div className="card-body p-0">
        <ResponsiveContainer width="100%" height={300}>
          {pieChartData.reduce((acc, cur) => acc + cur.amount, 0) === 0 ? (
            <p className="flex items-center justify-center text-base font-medium text-blue-500 transition-colors dark:text-blue-600">
              Buat {title} terlebih dahulu
            </p>
          ) : (
            <PieChart width={500} height={200}>
              <Pie
                data={pieChartData}
                dataKey={pieChartValue}
                nameKey={pieChartCategories}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#82ca9d"
                label={false}
              >
                {pieChartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={pieChartColors[entry.category]} // warna sesuai kategori
                  />
                ))}
              </Pie>
              <Tooltip
                cursor={false}
                formatter={(amount, categories) => {
                  const total = pieChartData.reduce(
                    (acc, cur) => acc + cur.amount,
                    0,
                  );
                  const percent = ((amount / total) * 100).toFixed(1);
                  return [
                    `Rp ${amount.toLocaleString("id-ID")} (${percent}%)`,
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

export default PieChartGroup;
