import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import formatNumber from "../utils/formatNumber";
import { cn } from "../utils/cn";

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
          {formatNumber(value)}
        </p>
        {showTrend && (
          <span
            className={cn(
              "font-base flex w-fit items-center gap-x-2 rounded-full border px-3 py-1 text-sm",
              percentage === 0
                ? "border-blue-500 text-blue-500"
                : trendUp === "up"
                  ? "border-green-400 text-green-400"
                  : trendUp === "down"
                    ? "border-red-400 text-red-400"
                    : "border-blue-500 text-blue-500",
            )}
          >
            {trendUp === "up" && percentage !== 0 && <TrendingUp size={18} />}
            {trendUp === "down" && <TrendingDown size={18} />}

            {trendUp === "equal"
              ? "Sama dengan bulan lalu"
              : percentage !== 0
                ? `${percentage}% dari bulan lalu`
                : "Tidak ada data bulan lalu"}
          </span>
        )}
      </div>
    </div>
  );
};

export default CardInfo;
