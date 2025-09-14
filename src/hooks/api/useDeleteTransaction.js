import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../config/firebase";

const useDeleteTransaction = () => {
  const deleteTransaction = async (id) => {
    const transactionDoc = doc(db, "transactions", id);
    await deleteDoc(transactionDoc);
  };

  return { deleteTransaction };
};

export default useDeleteTransaction;
