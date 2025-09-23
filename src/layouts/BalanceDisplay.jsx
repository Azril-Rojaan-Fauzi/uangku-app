import useFilter from "../hooks/finance/useFilter";
import formatNumber from "../utils/formatNumber";

const BalanceDisplay = () => {
  const { balance } = useFilter();

  return (
    <div className="flex h-10 flex-shrink-0 items-center gap-x-2 rounded-lg border border-slate-300 px-4 text-sm transition-colors text-shadow-slate-900 md:flex md:w-fit md:text-base lg:w-fit dark:border-slate-700 dark:text-slate-50">
      <p className="text-slate-500 dark:text-slate-300">Rp.</p>
      <p className="text-slate-700 dark:text-slate-50">
        {formatNumber(balance)}
      </p>
    </div>
  );
};

export default BalanceDisplay;
