import {
  incomeDataColors,
  incomePieChartData,
} from "../constants/pieChartData";
import useFetchTransaction from "../hooks/api/useFetchTransaction";
import IncomeForm from "./components/income/IncomeForm";
import PieChartGroup from "./components/PieChartGroup";
import TransactionTable from "./components/TransactionTable";

const IncomePage = () => {
  const { data: transactions = [] } = useFetchTransaction("transactions");
  return (
    <div className="flex flex-col gap-y-4">
      <h1 className="title">Pemasukan</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-7">
        <IncomeForm />
        <PieChartGroup
          pieChartData={incomePieChartData}
          pieChartCategories="categories"
          pieChartValue="value"
          pieChartColors={incomeDataColors}
        />
      </div>
      <TransactionTable data={transactions} title="Pemasukan" type="income" />
    </div>
  );
};

export default IncomePage;
