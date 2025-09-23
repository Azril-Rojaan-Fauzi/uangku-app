import { expenseDataColors } from "../constants/pieChartData";
import useFetchTransaction from "../hooks/api/useFetchTransaction";
import ExpenseForm from "./components/expenses/ExpenseForm";
import PieChartGroup from "./components/PieChartGroup";
import TransactionTable from "./components/TransactionTable";

import useFilter from "../hooks/finance/useFilter";
import { groupByCategory } from "../utils/groupByCategory";

const ExpensePage = () => {
  const { transactions } = useFetchTransaction("transactions");
  const { expensePieChartData } = useFilter();

  const groupedExpenseData = groupByCategory(expensePieChartData);

  return (
    <div className="flex flex-col gap-y-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-7">
        <ExpenseForm />
        <PieChartGroup
          title="pengeluaran"
          pieChartData={groupedExpenseData}
          pieChartCategories="category"
          pieChartValue="amount"
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
