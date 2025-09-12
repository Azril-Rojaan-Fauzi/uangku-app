import useFetchTransaction from "../api/useFetchTransaction";

export default function useFilter() {
  const { data: transactions = [] } = useFetchTransaction("transactions");

  // filter
  const incomeFilter = transactions.filter((item) => item.type === "income");
  const expenseFilter = transactions.filter((item) => item.type === "expense");

  // amount
  const incomeAmount = incomeFilter.reduce((acc, curr) => acc + curr.amount, 0);
  const expenseAmount = expenseFilter.reduce(
    (acc, curr) => acc + curr.amount,
    0,
  );
  const balance = incomeAmount - expenseAmount;

  // piechart
  const incomePieChartData = incomeFilter.map((data) => ({
    category: data.category,
    amount: data.amount,
  }));
  const expensePieChartData = expenseFilter.map((data) => ({
    category: data.category,
    amount: data.amount,
  }));

  return {
    incomeAmount,
    expenseAmount,
    balance,
    incomePieChartData,
    expensePieChartData,
  };
}
