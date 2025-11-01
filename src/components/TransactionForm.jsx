import { useForm } from "react-hook-form";
import useAddTransaction from "../hooks/api/useAddTransaction";

const TransactionForm = ({ title, transactionType, categories }) => {
  const { addTransaction } = useAddTransaction();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleIncomeSubmit = (data) => {
    const amountNumber = data.amount.replace(/\./g, "");

    addTransaction({
      note: data.note,
      amount: Number(amountNumber),
      type: data.transactionType,
      category: data.category,
      date: data.date.toString(),
    });
    reset();
  };

  return (
    <div className="card order-2 col-span-1 md:order-2 md:col-span-2 lg:order-1 lg:col-span-4">
      <div className="card-header">
        <div className="card-title">Form {title}</div>
      </div>
      <div className="card-body overflow-hidden px-2 py-0">
        <form
          onSubmit={handleSubmit(handleIncomeSubmit)}
          className="grid grid-cols-1 gap-8 md:grid-cols-4 lg:grid-cols-4"
        >
          {/* type */}
          <input
            type="hidden"
            value={transactionType}
            {...register("transactionType")}
          />
          {/* amount */}
          <label className="input-card">
            Nominal (Rp)
            <input
              type="text"
              className="input-group"
              placeholder="Masukkan Nominal"
              autoComplete="off"
              {...register("amount", {
                required: "Nominal wajib diisi",
                onChange: (e) => {
                  const rawValue = e.target.value.replace(/\D/g, ""); // hanya angka yang boleh diinput
                  const formatted = rawValue.replace(
                    /\B(?=(\d{3})+(?!\d))/g,
                    ".",
                  );
                  e.target.value = formatted; // mengubah tampilan input
                },
              })}
            />
            {errors.amount && (
              <span className="text-sm text-red-500">
                {errors.amount.message}
              </span>
            )}
          </label>

          {/* category */}
          <label className="input-card">
            Kategori
            <select
              {...register("category", { required: "Kategori wajib dipilih" })}
              className="rounded-sm border border-slate-300 px-3 py-1 dark:border-slate-50"
            >
              <option className="option-group" value="">
                -- Pilih --
              </option>
              {categories.map((category) => (
                <option className="option-group" value={category}>
                  {category}
                </option>
              ))}
            </select>
            {errors.category && (
              <span className="text-sm text-red-500">
                {errors.category.message}
              </span>
            )}
          </label>

          {/* date */}
          <label className="input-card">
            Tanggal
            <input
              type="date"
              {...register("date", { required: "Tanggal wajib di isi" })}
              className="input-group"
            />
            {errors.date && (
              <span className="text-sm text-red-500">
                {errors.date.message}
              </span>
            )}
          </label>

          {/* note */}
          <label className="input-card">
            Catatan
            <input
              type="text"
              {...register("note")}
              className="input-group"
              placeholder="Masukkan Catatan"
              autoComplete="off"
            />
          </label>

          <div className="col-span-1 flex justify-between md:col-span-4 xl:mt-10 xl:px-1">
            <button
              type="button"
              className="w-fit cursor-pointer rounded-md bg-slate-300 px-5 py-1 text-slate-700 transition-colors hover:opacity-80 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600"
              onClick={() => reset()}
            >
              Batal
            </button>
            <button
              type="submit"
              className="w-fit cursor-pointer rounded-md bg-green-600 px-5 py-1 text-white hover:bg-green-700"
            >
              Simpan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TransactionForm;
