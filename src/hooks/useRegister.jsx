import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase/config";
import { useFireStore } from "../hooks/useFireStore";

import { login } from "../app/features/userSlice";
import { useDispatch } from "react-redux";
import { use } from "react";

export const useRegister = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { addUser } = useFireStore("users");

  const register = async (email, displayName, password) => {
    setIsPending(true);
    try {
      const req = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, {
        displayName,
        photoURL:
          "https://api.dicebear.com/9.x/adventurer/svg?seed=" + displayName,
      });
      const user = req.user;
      dispatch(login(user));
      addUser(
        {
          displayName: user.displayName,
          email: user.email,
          isOnline: true,
          photoURL: user.photoURL,
        },
        "users"
      );
      setUser(user);
    } catch {
    } finally {
      setIsPending(false);
    }
  };
  return { user, isPending, register };
};
