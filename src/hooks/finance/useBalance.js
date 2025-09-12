import useFetchTransaction from "../api/useFetchTransaction";

export default function useBalance() {
  const { data: transactions = [] } = useFetchTransaction("transactions");

  const incomeAmount = transactions
    .filter((item) => item.type === "income")
    .reduce((acc, curr) => acc + curr.amount, 0);

  const expenseAmount = transactions
    .filter((item) => item.type === "expense")
    .reduce((acc, curr) => acc + curr.amount, 0);

  const balance = incomeAmount - expenseAmount;

  return { incomeAmount, expenseAmount, balance };
}
