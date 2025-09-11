import { useState, useEffect } from "react";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { db } from "../../config/firebase";

const useFetchTransaction = (collectionName) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const collectionRef = collection(db, collectionName);

    const q = query(collectionRef, orderBy("createdAt", "desc"));

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const formattedData = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setData(formattedData);
      },
      (err) => {
        console.error("Error fetching data:", err);
        setError(err);
      },
    );

    return () => unsubscribe();
  }, [collectionName]);

  return { data, error };
};

export default useFetchTransaction;
