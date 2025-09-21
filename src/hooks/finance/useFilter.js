import { monthNames } from "../../constants/monthHistoryData";
import useFetchTransaction from "../api/useFetchTransaction";
import useMonthlyTransactions from "./useMonthlyTransaction";

export default function useFilter() {
  const { transactions = [] } = useFetchTransaction("transactions");
  const { monthlyArray } = useMonthlyTransactions();

  const monthReset = monthlyArray.full.flatMap(
    (monthBlock) => monthBlock.months,
  );

  // filter
  const incomeFilter = transactions.filter((item) => item.type === "income");
  const expenseFilter = transactions.filter((item) => item.type === "expense");

  // filter berdasarkan bulan dan tahun
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const currentMonthData = monthReset.find(
    (m) => m.year === currentYear && m.month === monthNames[currentMonth],
  );

  const incomeAmountMonth = currentMonthData?.totalIncome || 0;
  const expenseAmountMonth = currentMonthData?.totalExpense || 0;

  const incomeAmount = incomeFilter.reduce((acc, curr) => acc + curr.amount, 0);
  const expenseAmount = expenseFilter.reduce(
    (acc, curr) => acc + curr.amount,
    0,
  );
  const balance = incomeAmount - expenseAmount;

  // Filter transaksi sesuai bulan berjalan
  const currentMonthTransactions = transactions.filter((t) => {
    const d = new Date(t.date);
    return d.getMonth() === currentMonth && d.getFullYear() === currentYear;
  });

  // Income PieChart Data
  const incomePieChartData = Object.values(
    currentMonthTransactions
      .filter((t) => t.type === "income")
      .reduce((acc, t) => {
        if (!acc[t.category]) {
          acc[t.category] = { category: t.category, amount: 0 };
        }
        acc[t.category].amount += t.amount;
        return acc;
      }, {}),
  );

  // Expense PieChart Data
  const expensePieChartData = Object.values(
    currentMonthTransactions
      .filter((t) => t.type === "expense")
      .reduce((acc, t) => {
        if (!acc[t.category]) {
          acc[t.category] = { category: t.category, amount: 0 };
        }
        acc[t.category].amount += t.amount;
        return acc;
      }, {}),
  );

  return {
    incomeAmountMonth,
    expenseAmountMonth,
    balance,
    incomePieChartData,
    expensePieChartData,
  };
}
