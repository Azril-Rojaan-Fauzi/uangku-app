import { TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "../../utils/cn";

const CardInfo = ({
  icon,
  title,
  value,
  percentage,
  trendUp,
  iconColor,
  showTrend = true,
}) => {
  return (
    <div className="card">
      <div className="card-header">
        <div
          className={cn(
            "w-fit rounded-lg bg-blue-500/20 p-2 transition-colors dark:bg-blue-600/20",
            iconColor,
          )}
        >
          {icon}
        </div>
        <p className="card-title">{title}</p>
      </div>
      <div className="card-body bg-slate-100 transition-colors dark:bg-slate-950">
        <p className="text-3xl font-bold transition-colors text-shadow-slate-900 dark:text-slate-50">
          {value}
        </p>
        {showTrend && (
          <span
            className={cn(
              "font-base flex w-fit items-center gap-x-2 rounded-full border px-2 py-1",
              trendUp
                ? "border-green-400 text-green-400"
                : "border-red-400 text-red-400",
            )}
          >
            {/* trendUp menentukan apakah persentasi naik atau turun diambil dari evaluasi bulan kemarin dan bulan ini */}
            {trendUp ? <TrendingUp size={18} /> : <TrendingDown size={18} />}
            {percentage}% dari bulan lalu
          </span>
        )}
      </div>
    </div>
  );
};

export default CardInfo;
