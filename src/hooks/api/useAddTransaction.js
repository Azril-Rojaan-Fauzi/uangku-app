import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../config/firebase";
import useGetUserInfo from "./useGetUserInfo";

const useAddTransaction = () => {
  const transactionCollection = collection(db, "transactions");
  const { userId } = useGetUserInfo();
  const addTransaction = async ({ note, amount, type, category, date }) => {
    await addDoc(transactionCollection, {
      userId,
      amount,
      type,
      note,
      category,
      date,
      createdAt: serverTimestamp(),
    });
  };
  return { addTransaction };
};

export default useAddTransaction;
