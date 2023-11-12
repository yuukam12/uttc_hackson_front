import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCufdYj9O9LhKiLd2-bAfLYVSyU76_TyqU",
  authDomain: "uttc-hackson.firebaseapp.com",
  projectId: "uttc-hackson",
  storageBucket: "uttc-hackson.appspot.com",
  messagingSenderId: "40688014142",
  appId: "1:40688014142:web:4514f3bc2aac534cfa126f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const fireAuth = getAuth(app);