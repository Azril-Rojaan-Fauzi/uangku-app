import {
  incomeDataColors,
  incomePieChartData,
} from "../constants/pieChartData";
import IncomeForm from "./components/income/IncomeForm";
import IncomeHistoryTable from "./components/income/IncomeHistoryTable";
import PieChartGroup from "./components/PieChartGroup";

const IncomePage = () => {
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
      <IncomeHistoryTable />
    </div>
  );
};

export default IncomePage;
