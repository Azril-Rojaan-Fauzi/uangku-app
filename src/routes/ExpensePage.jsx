import {
  expenseDataColors,
  expensePieChartData,
} from "../constants/pieChartData";
import ExpenseForm from "./components/expenses/ExpenseForm";
import ExpenseHistoryTable from "./components/expenses/ExpenseHistoryTable";
import PieChartGroup from "./components/PieChartGroup";

const ExpensePage = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <h1 className="title">Pengeluaran</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-7">
        <ExpenseForm />
        <PieChartGroup
          pieChartData={expensePieChartData}
          pieChartCategories="categories"
          pieChartValue="value"
          pieChartColors={expenseDataColors}
        />
      </div>
      <ExpenseHistoryTable />
    </div>
  );
};

export default ExpensePage;
