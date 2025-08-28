import React from "react";
import { monthHistory } from "../../../constants/monthHistoryData";

const HistoryTable = () => {
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
                <th className="table-head">Bulan</th>
                <th className="table-head">Saldo</th>
                <th className="table-head">Pemasukan</th>
                <th className="table-head">Pengeluaran</th>
              </tr>
            </thead>
            <tbody className="table-body">
              {monthHistory.map((history) => (
                <tr key={history.number} className="table-row">
                  <td className="table-cell">{history.number}</td>
                  <td className="table-cell">{history.month}</td>
                  <td className="table-cell">{history.balance}</td>
                  <td className="table-cell">{history.income}</td>
                  <td className="table-cell">{history.expense}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default HistoryTable;
