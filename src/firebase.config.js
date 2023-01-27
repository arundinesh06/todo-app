import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACqvqZerUYddPsodPxrmHg2-m7LzF0_BE",
  authDomain: "todo-app-202f5.firebaseapp.com",
  projectId: "todo-app-202f5",
  storageBucket: "todo-app-202f5.appspot.com",
  messagingSenderId: "951997392135",
  appId: "1:951997392135:web:3cb8a998991fc7bfa691a2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
console.log(db);
