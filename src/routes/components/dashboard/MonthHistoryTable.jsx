import useMonthlyTransactions from "../../../hooks/finance/useMonthlyTransaction";
import usePagination from "../../../hooks/usePagination";
import formatNumber from "../../../utils/formatNumber";
import Pagination from "../Pagination";

const MonthHistoryTable = () => {
  const { monthlyArray } = useMonthlyTransactions();
  const { currentPosts, postsPerPage, setCurrentPage, currentPage } =
    usePagination(monthlyArray.full);

  return (
    <div className="card">
      <div className="card-header">
        <p className="card-title">Rekap Bulanan</p>
      </div>
      <div className="card-body p-0">
        <div className="relative h-[500px] w-full flex-shrink-0 overflow-auto rounded-none [scrollbar-width:thin]">
          <div className="inline-flex min-h-full min-w-full flex-col justify-between align-top">
            <table className="table">
              <thead className="table-header">
                <tr className="table-row">
                  <th className="table-head w-12">No</th>
                  <th className="table-head w-32">Bulan</th>
                  <th className="table-head w-32">Saldo</th>
                  <th className="table-head w-32">Pemasukan</th>
                  <th className="table-head w-32">Pengeluaran</th>
                </tr>
              </thead>
              <tbody className="table-body">
                {currentPosts.map((yearBlock) =>
                  yearBlock.months
                    .filter(
                      (data) => data.totalIncome > 0 || data.totalExpense > 0,
                    )
                    .map((data, index) => (
                      <tr key={index} className="table-row">
                        <td className="table-cell">{index + 1}</td>
                        <td className="table-cell">{`${data.month} - ${data.year}`}</td>
                        <td className="table-cell">
                          Rp.{" "}
                          {formatNumber(data.totalIncome - data.totalExpense)}
                        </td>
                        <td className="table-cell">
                          Rp. {formatNumber(data.totalIncome)}
                        </td>
                        <td className="table-cell">
                          Rp. {formatNumber(data.totalExpense)}
                        </td>
                      </tr>
                    )),
                )}
              </tbody>
            </table>
            <Pagination
              totalPosts={monthlyArray.full.length}
              postsPerPage={postsPerPage}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonthHistoryTable;
