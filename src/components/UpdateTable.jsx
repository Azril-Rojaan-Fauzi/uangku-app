import { Check, X } from "lucide-react";

import useUpdateTransaction from "../hooks/api/useUpdateTransaction";
import { useForm } from "react-hook-form";
import { expenseCategories, incomeCategories } from "../constants/pieChartData";

const UpdateTable = ({ editingId, filteredData, setEditingId }) => {
  const { updateTransaction } = useUpdateTransaction();

  const item = filteredData.find((i) => i.id === editingId);

  const categories =
    item.type === "income" ? incomeCategories : expenseCategories;

  const { register, handleSubmit } = useForm({
    defaultValues: {
      date: item.date,
      category: item.category,
      amount: item.amount,
      note: item.note,
    },
  });

  const onUpdate = async (data) => {
    const amountNumber = data.amount.replace(/\./g, "");
    await updateTransaction(
      item.id,
      data.note,
      amountNumber,
      data.category,
      data.date,
    );
    setEditingId(null);
  };
  if (!item) return null;

  return (
    <tr key={item.id} className="table-row">
      <td></td>
      <td className="table-cell">
        <input
          type="date"
          {...register("date", { required: true })}
          className="input-update"
        />
      </td>
      <td className="table-cell">
        <select
          {...register("category", { required: true })}
          className="w-24 rounded-sm border border-slate-300 px-2 py-1 text-sm xl:w-32 dark:border-slate-50"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat} className="option-group">
              {cat}
            </option>
          ))}
        </select>
      </td>
      <td className="table-cell">
        <input
          autoComplete="off"
          type="text"
          {...register("amount", {
            required: true,
            onChange: (e) => {
              const rawValue = e.target.value.replace(/\D/g, ""); // hanya angka yang boleh diinput
              const formatted = rawValue.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
              e.target.value = formatted; // mengubah tampilan input
            },
          })}
          className="input-update"
        />
      </td>
      <td className="table-cell">
        <input
          type="text"
          {...register("note")}
          autoComplete="off"
          className="input-update"
        />
      </td>
      <td className="table-cell">
        <div className="flex items-center gap-x-4">
          <button
            type="button"
            className="cursor-pointer text-red-500"
            onClick={() => setEditingId(null)}
          >
            <X size={20} />
          </button>
          <button
            type="button"
            className="cursor-pointer text-green-500"
            onClick={handleSubmit(onUpdate)}
          >
            <Check size={20} />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default UpdateTable;
