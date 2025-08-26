import CardDisplay from "./CardDisplay";
import ExpenseGraph from "./ExpenseGraph";

const DashboardPage = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <h1 className="title">Dashboard</h1>
      <CardDisplay />
      <ExpenseGraph />
    </div>
  );
};

export default DashboardPage;
