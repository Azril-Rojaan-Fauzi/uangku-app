import { PencilLine, Trash } from "lucide-react";
import formatNumber from "../../utils/formatNumber";
import useDeleteTransaction from "../../hooks/api/useDeleteTransaction";
import React, { useState } from "react";
import UpdateTable from "./UpdateTable";
import usePagination from "../../hooks/usePagination";
import Pagination from "./Pagination";
import { monthNames } from "../../constants/monthHistoryData";

export default function TransactionTable({ data, title, type }) {
  const [editingId, setEditingId] = useState(null);

  const currentMonth = new Date().getMonth() + 1;
  const currentYear = new Date().getFullYear();
  const [selectedMonth, setSelectedMonth] = useState(currentMonth);
  const filteredDataByType = data.filter((item) => item.type === type);
  const filteredData = filteredDataByType.filter(
    (item) =>
      new Date(item.date).getMonth() + 1 === selectedMonth &&
      new Date(item.date).getFullYear() === currentYear,
  );

  const { deleteTransaction } = useDeleteTransaction();
  const { currentPosts, postsPerPage, setCurrentPage, currentPage } =
    usePagination(filteredData);

  return (
    <div className="card">
      <div className="card-header">
        <p className="card-title">{title}</p>
        <select
          className="input-card max-h-10 overflow-y-auto rounded-sm border border-slate-300 px-3 py-1 dark:border-slate-50"
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(Number(e.target.value))}
        >
          {monthNames.map((month, index) => (
            <option key={index} value={index + 1} className="option-group">
              {month}
            </option>
          ))}
        </select>
      </div>
      <div className="card-body p-0">
        <div className="relative h-[500px] w-full flex-shrink-0 overflow-auto rounded-none [scrollbar-width:thin]">
          <div className="inline-flex min-h-full min-w-full flex-col justify-between align-top">
            {currentPosts.length === 0 ? (
              <p className="min-h[100px] m-auto text-2xl text-slate-900 dark:text-slate-50">
                Anda belum membuat {title} bulan ini
              </p>
            ) : (
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
                  {currentPosts.map((item, index) => (
                    <React.Fragment key={item.id}>
                      <tr className="table-row">
                        <td className="table-cell">
                          {(currentPage - 1) * postsPerPage + index + 1}
                        </td>
                        <td className="table-cell">
                          {new Date(item.date).toLocaleDateString("id-ID", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })}
                        </td>
                        <td className="table-cell">{item.category}</td>
                        <td className="table-cell">
                          {formatNumber(item.amount)}
                        </td>
                        <td className="table-cell">{item.note}</td>
                        <td className="table-cell">
                          <div className="flex items-center gap-x-4">
                            <button
                              className="cursor-pointer text-blue-500 dark:text-blue-600"
                              onClick={() =>
                                setEditingId(
                                  editingId === item.id ? null : item.id,
                                )
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
            )}
            <Pagination
              totalPosts={filteredData.length}
              postsPerPage={postsPerPage}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
