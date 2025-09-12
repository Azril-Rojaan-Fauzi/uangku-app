import { PencilLine, Trash } from "lucide-react";
import formatNumber from "../../utils/formatNumber";

export default function TransactionTable({ data, title, type }) {
  const filteredData = data.filter((item) => item.type === type);

  return (
    <div className="card">
      <div className="card-header">
        <p className="card-title">{title}</p>
      </div>
      <div className="card-body p-0">
        <div className="relative h-[500px] w-full flex-shrink-0 overflow-auto rounded-none [scrollbar-width:thin]">
          <table className="table">
            <thead className="table-header">
              <tr className="table-row">
                <th className="table-head">No</th>
                <th className="table-head">Tanggal</th>
                <th className="table-head">Kategori</th>
                <th className="table-head">Nominal (Rp)</th>
                <th className="table-head w-1/4">Catatan</th>
                <th className="table-head">Aksi</th>
              </tr>
            </thead>
            <tbody className="table-body">
              {filteredData.map((item, index) => (
                <tr key={item.id} className="table-row">
                  <td className="table-cell">{index + 1}</td>
                  <td className="table-cell">
                    {/* {item.date.toDate().toLocaleDateString("id-ID", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })} */}
                    {item.date}
                  </td>
                  <td className="table-cell">{item.category}</td>
                  <td className="table-cell">{formatNumber(item.amount)}</td>
                  <td className="table-cell">{item.note}</td>
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
}
