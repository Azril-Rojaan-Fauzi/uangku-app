import useFilter from "../hooks/finance/useFilter";
import formatNumber from "../utils/formatNumber";

const BalanceDisplay = () => {
  const { balance } = useFilter();

  return (
    <div className="saldo">
      <p className="text-slate-500 dark:text-slate-300">Rp.</p>
      <p className="text-base text-slate-700 dark:text-slate-50">
        {formatNumber(balance)}
      </p>
    </div>
  );
};

export default BalanceDisplay;
