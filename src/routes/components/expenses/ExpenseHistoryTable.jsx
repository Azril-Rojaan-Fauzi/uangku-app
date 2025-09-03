import { PencilLine, Trash } from "lucide-react";
import { expenseHistoryData } from "../../../constants/monthHistoryData";

const ExpenseHistoryTable = () => {
  return (
    <div className="card">
      <div className="card-header">
        <p className="card-title">Rekap Bulanan</p>
      </div>
      <div className="card-body p-0">
        <div className="relative h-[500px] w-full flex-shrink-0 overflow-auto rounded-none [scrollbar-widht:thin]">
          <table className="table">
            <thead className="table-header">
              <tr className="table-row">
                <th className="table-head">No</th>
                <th className="table-head">Tanggal</th>
                <th className="table-head">Kategori</th>
                <th className="table-head">Nominal</th>
                <th className="table-head w-1/4">Catatan</th>
                <th className="table-head">Aksi</th>
              </tr>
            </thead>
            <tbody className="table-body">
              {expenseHistoryData.map((history) => (
                <tr key={history.number} className="table-row">
                  <td className="table-cell">{history.number}</td>
                  <td className="table-cell">{history.date}</td>
                  <td className="table-cell">{history.categories}</td>
                  <td className="table-cell">{history.nominal}</td>
                  <td className="table-cell">{history.note}</td>
                  <td className="table-cell">
                    <div className="flex items-center gap-x-4">
                      <button className="cursor-pointer text-blue-500 dark:text-blue-600">
                        <PencilLine size={20} />
                      </button>
                      <button className="cursor-pointer text-red-500">
                        <Trash size={20} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ExpenseHistoryTable;
