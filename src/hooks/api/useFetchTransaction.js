import { useState, useEffect } from "react";
import {
  collection,
  onSnapshot,
  query,
  orderBy,
  where,
} from "firebase/firestore";
import { db } from "../../config/firebase";
import useGetUserInfo from "./useGetUserInfo";

const useFetchTransaction = (collectionName) => {
  const [transactions, setTransactions] = useState([]);

  const collectionRef = collection(db, collectionName);
  const { userId } = useGetUserInfo();

  const getTransactions = async () => {
    let unsubscribe;
    try {
      const queryTransactions = query(
        collectionRef,
        where("userId", "==", userId),
        orderBy("createdAt", "desc"),
      );

      unsubscribe = onSnapshot(queryTransactions, (snapshot) => {
        let docs = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          const id = doc.id;

          docs.push({ ...data, id });
        });
        setTransactions(docs);
      });
    } catch (error) {
      console.log(error);
    }
    return () => unsubscribe();
  };

  useEffect(() => {
    getTransactions();
  }, []);

  return { transactions };
};

export default useFetchTransaction;
