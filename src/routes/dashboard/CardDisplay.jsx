import { Banknote, BanknoteArrowDown, BanknoteArrowUp } from "lucide-react";
import CardInfo from "./CardInfo";

const CardDisplay = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {/* Card Pemasukan Start */}
      {/* value diambil dari database */}
      <CardInfo
        icon={<BanknoteArrowUp size={26} />}
        title="Pemasukan"
        value="2.000.000"
        percentage={25}
        trendUp={true}
        iconColor="text-green-400"
      />
      {/* Card Pemasukan End */}

      {/* Card Pengeluaran Start */}
      <CardInfo
        icon={<BanknoteArrowDown size={26} />}
        title="Pengeluaran"
        value="2.000.000"
        percentage={10}
        trendUp={false}
        iconColor="text-red-600"
      />
      {/* Card Pengeluaran End */}

      {/* Card Saldo Start */}
      <CardInfo
        icon={<Banknote size={26} />}
        title="Saldo"
        value="2.000.000"
        showTrend={false}
        iconColor="text-blue-600"
      />
      {/* Card Saldo End */}
    </div>
  );
};

export default CardDisplay;
