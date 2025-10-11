import CardDisplay from "../components/CardDisplay";
import ExpenseGraph from "../components/ExpenseGraph";
import MonthHistoryTable from "../components/MonthHistoryTable";

const DashboardPage = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <CardDisplay />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-7">
        <ExpenseGraph />
      </div>
      <MonthHistoryTable />
    </div>
  );
};

export default DashboardPage;
