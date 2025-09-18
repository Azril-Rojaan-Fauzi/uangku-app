import { useMemo } from "react";
import useFetchTransaction from "../api/useFetchTransaction";
import { monthNames } from "../../constants/monthHistoryData";

export default function useMonthlyTransactions() {
  const { transactions = [] } = useFetchTransaction("transactions");

  const monthlyArray = useMemo(() => {
    const yearlyMap = {};

    transactions.forEach((item) => {
      const d = new Date(item.date);
      const year = d.getFullYear();
      const monthIndex = d.getMonth();

      if (!yearlyMap[year]) {
        yearlyMap[year] = monthNames.map((m) => ({
          month: m,
          year,
          totalIncome: 0,
          totalExpense: 0,
        }));
      }

      if (item.type === "income") {
        yearlyMap[year][monthIndex].totalIncome += item.amount;
      } else if (item.type === "expense") {
        yearlyMap[year][monthIndex].totalExpense += item.amount;
      }
    });

    const full = Object.entries(yearlyMap).map(([year, months]) => ({
      year: Number(year),
      months,
    }));
    const expenseArray = Object.values(yearlyMap).flatMap((months) =>
      months.map((m) => ({
        month: m.month,
        year: m.year,
        total: m.totalExpense,
      })),
    );

    return { full, expense: expenseArray };
  }, [transactions]);

  return { monthlyArray };
}
