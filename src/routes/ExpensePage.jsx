import {
  expenseDataColors,
  expensePieChartData,
} from "../constants/pieChartData";
import useFetchTransaction from "../hooks/api/useFetchTransaction";
import ExpenseForm from "./components/expenses/ExpenseForm";
import PieChartGroup from "./components/PieChartGroup";
import TransactionTable from "./components/TransactionTable";

const ExpensePage = () => {
  const { data: transactions = [] } = useFetchTransaction("transactions");
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
      <TransactionTable
        data={transactions}
        title="Pengeluaran"
        type="expense"
      />
    </div>
  );
};

export default ExpensePage;
