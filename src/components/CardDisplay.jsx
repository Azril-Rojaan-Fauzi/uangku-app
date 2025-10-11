import { Banknote, BanknoteArrowDown, BanknoteArrowUp } from "lucide-react";
import CardInfo from "./CardInfo";
import useFilter from "../hooks/finance/useFilter";
import useMonthlyTransactions from "../hooks/finance/useMonthlyTransaction";

const CardDisplay = () => {
  const { incomeAmountMonth, expenseAmountMonth, balance } = useFilter();
  const { monthlyArray } = useMonthlyTransactions();
  const { lastMonthData } = monthlyArray;

  const incomeLastMonth = lastMonthData.totalIncome;
  const expenseLastMonth = lastMonthData.totalExpense;

  const incomePercentage =
    incomeLastMonth > 0
      ? ((incomeAmountMonth - incomeLastMonth) / incomeLastMonth) * 100
      : null;

  const expensePercentage =
    expenseLastMonth > 0
      ? ((expenseAmountMonth - expenseLastMonth) / expenseLastMonth) * 100
      : null;

  const trendIncome =
    incomeAmountMonth > incomeLastMonth
      ? "up"
      : incomeAmountMonth < incomeLastMonth
        ? "down"
        : "equal";

  const trendExpense =
    expenseAmountMonth > expenseLastMonth
      ? "up"
      : expenseAmountMonth < expenseLastMonth
        ? "down"
        : "equal";

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {/* Card Pemasukan Start */}
      {/* value diambil dari database */}
      <CardInfo
        icon={<BanknoteArrowUp size={26} />}
        title="Pemasukan Bulan Ini"
        value={incomeAmountMonth}
        percentage={Math.round(Math.abs(incomePercentage))}
        trendUp={trendIncome}
        iconColor="text-green-400"
      />
      {/* Card Pemasukan End */}

      {/* Card Pengeluaran Start */}
      <CardInfo
        icon={<BanknoteArrowDown size={26} />}
        title="Pengeluaran Bulan Ini"
        value={expenseAmountMonth}
        percentage={Math.round(Math.abs(expensePercentage))}
        trendUp={trendExpense}
        iconColor="text-red-600"
      />
      {/* Card Pengeluaran End */}

      {/* Card Saldo Start */}
      <CardInfo
        icon={<Banknote size={26} />}
        title="Saldo"
        value={balance}
        showTrend={false}
        iconColor="text-blue-600"
      />
      {/* Card Saldo End */}
    </div>
  );
};

export default CardDisplay;
