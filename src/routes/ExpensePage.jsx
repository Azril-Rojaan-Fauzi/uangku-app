import {
  expenseDataColors,
  expensePieChartData,
} from "../constants/pieChartData";
import PieChartGroup from "./components/PieChartGroup";

const ExpensePage = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <h1 className="title">Pengeluaran</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="card col-span-1 md:col-span-2 lg:col-span-4"></div>
        <PieChartGroup
          pieChartData={expensePieChartData}
          pieChartCategories="categories"
          pieChartValue="value"
          pieChartColors={expenseDataColors}
        />
      </div>
    </div>
  );
};

export default ExpensePage;
