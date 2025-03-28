import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyACQzAynxbyNtc_rdHPBHgGkMn1hp27NT0",
  authDomain: "apps-c3d31.firebaseapp.com",
  projectId: "apps-c3d31",
  storageBucket: "apps-c3d31.firebasestorage.app",
  messagingSenderId: "604414308300",
  appId: "1:604414308300:web:a9dc7caf5a0fd2bdaf3769",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
