import { useState, useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../config/firebase";

export default function useFetch(collectionName) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const collectionRef = collection(db, collectionName);

    const unsubscribe = onSnapshot(
      collectionRef,
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
}
