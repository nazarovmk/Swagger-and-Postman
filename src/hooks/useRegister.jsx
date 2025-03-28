"use client";

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase/config";
import { useFireStore } from "./useFireStore";
import { login } from "../app/features/userSlice";
import { useDispatch } from "react-redux";

export const useRegister = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const { addUser } = useFireStore("users");

  const register = async (email, displayName, password) => {
    setIsPending(true);
    setError(null);

    try {
      const req = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, {
        displayName,
        photoURL:
          "https://api.dicebear.com/9.x/adventurer/svg?seed=" + displayName,
      });

      const user = req.user;

      dispatch(login(user));

      await addUser({
        displayName: user.displayName,
        email: user.email,
        isOnline: true,
        photoURL: user.photoURL,
        uid: user.uid,
      });

      setUser(user);
    } catch (err) {
      console.error("Registration error:", err);
      setError(err.message);
    } finally {
      setIsPending(false);
    }
  };

  return { user, isPending, error, register };
};
