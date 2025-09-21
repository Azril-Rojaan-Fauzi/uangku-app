import { PencilLine, Trash } from "lucide-react";
import formatNumber from "../../utils/formatNumber";
import useDeleteTransaction from "../../hooks/api/useDeleteTransaction";
import React, { useState } from "react";
import UpdateTable from "./UpdateTable";

export default function TransactionTable({ data, title, type }) {
  const filteredData = data.filter((item) => item.type === type);
  const { deleteTransaction } = useDeleteTransaction();
  const [editingId, setEditingId] = useState(null); // simpan id yg sedang di-edit

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
                <th className="table-head w-10">No</th>
                <th className="table-head w-40 xl:w-24">Tanggal</th>
                <th className="table-head w-30 xl:w-24">Kategori</th>
                <th className="table-head w-32">Nominal (Rp)</th>
                <th className="table-head w-40">Catatan</th>
                <th className="table-head w-24">Aksi</th>
              </tr>
            </thead>
            <tbody className="table-body">
              {filteredData.map((item, index) => (
                <React.Fragment key={item.id}>
                  <tr className="table-row">
                    <td className="table-cell">{index + 1}</td>
                    <td className="table-cell">{item.date}</td>
                    <td className="table-cell">{item.category}</td>
                    <td className="table-cell">{formatNumber(item.amount)}</td>
                    <td className="table-cell">{item.note}</td>
                    <td className="table-cell">
                      <div className="flex items-center gap-x-4">
                        <button
                          className="cursor-pointer text-blue-500 dark:text-blue-600"
                          onClick={() =>
                            setEditingId(editingId === item.id ? null : item.id)
                          }
                        >
                          <PencilLine size={20} />
                        </button>
                        <button
                          className="cursor-pointer text-red-500"
                          onClick={() => deleteTransaction(item.id)}
                        >
                          <Trash size={20} />
                        </button>
                      </div>
                    </td>
                  </tr>
                  {editingId === item.id && (
                    <UpdateTable
                      editingId={editingId}
                      setEditingId={setEditingId}
                      filteredData={filteredData}
                    />
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
