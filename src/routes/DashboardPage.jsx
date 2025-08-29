import CardDisplay from "./components/dashboard/CardDisplay";
import ExpenseGraph from "./components/dashboard/ExpenseGraph";
import ExpensePieChart from "./components/dashboard/ExpensePieChart";
import HistoryTable from "./components/dashboard/HistoryTable";

const DashboardPage = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <h1 className="title">Dashboard</h1>
      <CardDisplay />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-7">
        <ExpenseGraph />
        {/* <ExpensePieChart /> */}
      </div>
      <HistoryTable />
    </div>
  );
};

export default DashboardPage;
