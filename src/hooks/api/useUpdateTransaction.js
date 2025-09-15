import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../config/firebase";

const useUpdateTransaction = () => {
  const updateTransaction = async (id, note, amount, category, date) => {
    try {
      const transactionRef = doc(db, "transactions", id);
      await updateDoc(transactionRef, {
        note,
        amount: Number(amount),
        category,
        date,
      });
    } catch (error) {
      console.error("Error updating transaction: ", error);
    }
  };

  return { updateTransaction };
};

export default useUpdateTransaction;
