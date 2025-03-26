"use client";

import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/config";

export const useCollection = (c) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    const unsubscribe = onSnapshot(
      collection(db, c),
      (snapshot) => {
        const data = [];
        snapshot.forEach((d) => {
          data.push({
            id: d.id,
            ...d.data(),
          });
        });
        setData(data);
        setIsLoading(false);
        setError(null);
      },
      (err) => {
        console.error("Collection error:", err);
        setError(err.message);
        setIsLoading(false);
      }
    );

    return () => unsubscribe();
  }, [c]);

  return { data, isLoading, error };
};
