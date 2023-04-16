import { ChangeEvent, useEffect, useState } from "react";
import { IWeight } from "./Weight";
import {
  collection,
  doc,
  getDocs,
  limit,
  orderBy,
  query,
  setDoc,
} from "firebase/firestore";
import { db } from "../../firebase";

const weightRef = collection(db, "weight");

const useWeight = () => {
  const [weight, setWeight] = useState<IWeight[]>([]);
  const [inputValue, setIputValue] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIputValue(e.target.value);
  };

  const handleAdd = async (value: string) => {
    const weight = +value;
    if (weight <= 70 || weight >= 120) {
      alert("Pizdabol ti suka ili ochen zhirnaya svinota!!!");
      return;
    }

    const createdAt = Date.now();

    try {
      const w = {
        value: weight,
        createdAt,
      };
      await setDoc(doc(weightRef, `${createdAt}`), w);
      setWeight((prev) => [...prev, w]);
      setIputValue("");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getWeithtCollection = async () => {
      try {
        const weightSnapshot = await getDocs(
          query(weightRef, orderBy("createdAt", "asc"), limit(10))
        );
        const weight: IWeight[] = [];
        weightSnapshot.forEach((doc) => {
          const w = doc.data() as IWeight;
          weight.push(w);
        });
        setWeight(weight);
      } catch (error) {
        console.log(error);
      }
    };

    getWeithtCollection();
  }, []);

  return {
    weight,
    handleAdd,
    inputValue,
    handleInputChange,
  };
};

export default useWeight;
