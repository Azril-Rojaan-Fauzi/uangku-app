import { Cell, Legend, Pie, ResponsiveContainer, Tooltip } from "recharts";

import { PieChart } from "lucide-react";
import {
  dataColors,
  expensePieChartData,
} from "../../../constants/pieChartData";

const ExpensePieChart = () => {
  return (
    <div className="card col-span-1 md:col-span-2 lg:col-span-3">
      <div className="card-header">
        <p className="card-title">Pie Chart</p>
      </div>

      <div className="card-body p-0">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart width={500} height={200}>
            <Pie
              data={expensePieChartData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#82ca9d"
              label={({ name }) => `${name}`}
            >
              {expensePieChartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={dataColors[entry.name]} // warna sesuai kategori
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ExpensePieChart;
