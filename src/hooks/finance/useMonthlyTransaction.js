import { useMemo } from "react";
import useFetchTransaction from "../api/useFetchTransaction";
import { monthNames } from "../../constants/monthHistoryData";

export default function useMonthlyTransactions() {
  const { transactions = [] } = useFetchTransaction("transactions");

  const monthlyArray = useMemo(() => {
    // buat map awal per bulan biar urut
    const initial = monthNames.map((m) => ({
      month: m,
      totalIncome: 0,
      totalExpense: 0,
    }));

    transactions.forEach((item) => {
      const d = new Date(item.date);
      const monthIndex = d.getMonth(); // 0 - 11
      if (item.type === "income") {
        initial[monthIndex].totalIncome += item.amount;
      } else if (item.type === "expense") {
        initial[monthIndex].totalExpense += item.amount;
      }
    });

    // kalau butuh total expense doang (misalnya buat ExpenseGraph)
    const expenseArray = initial.map((m) => ({
      month: m.month,
      total: m.totalExpense,
    }));

    return { full: initial, expense: expenseArray };
  }, [transactions]);

  return { monthlyArray };
}
