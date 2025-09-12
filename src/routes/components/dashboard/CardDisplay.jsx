import { Banknote, BanknoteArrowDown, BanknoteArrowUp } from "lucide-react";
import CardInfo from "./CardInfo";
import useFilter from "../../../hooks/finance/useFilter";

const CardDisplay = () => {
  const { incomeAmount, expenseAmount, balance } = useFilter();
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {/* Card Pemasukan Start */}
      {/* value diambil dari database */}
      <CardInfo
        icon={<BanknoteArrowUp size={26} />}
        title="Pemasukan Bulan Ini"
        value={incomeAmount}
        percentage={25}
        trendUp={true}
        iconColor="text-green-400"
      />
      {/* Card Pemasukan End */}

      {/* Card Pengeluaran Start */}
      <CardInfo
        icon={<BanknoteArrowDown size={26} />}
        title="Pengeluaran Bulan Ini"
        value={expenseAmount}
        percentage={10}
        trendUp={false}
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
