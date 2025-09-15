import { incomeDataColors } from "../constants/pieChartData";
import useFetchTransaction from "../hooks/api/useFetchTransaction";
import useFilter from "../hooks/finance/useFilter";
import { groupByCategory } from "../utils/groupByCategory";
import IncomeForm from "./components/income/IncomeForm";
import PieChartGroup from "./components/PieChartGroup";
import TransactionTable from "./components/TransactionTable";

const IncomePage = () => {
  const { transactions } = useFetchTransaction("transactions");
  const { incomePieChartData } = useFilter();

  const groupedIncomeData = groupByCategory(incomePieChartData);
  return (
    <div className="flex flex-col gap-y-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-7">
        <IncomeForm />
        <PieChartGroup
          title="pemasukan"
          pieChartData={groupedIncomeData}
          pieChartCategories="category"
          pieChartValue="amount"
          pieChartColors={incomeDataColors}
        />
      </div>
      <TransactionTable data={transactions} title="Pemasukan" type="income" />
    </div>
  );
};

export default IncomePage;
