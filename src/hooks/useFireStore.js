import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";

export function useFireStore(c) {
  const addUser = async (data) => {
    await addDoc(collection(db, c), data);
  };
  return { addUser };
}
