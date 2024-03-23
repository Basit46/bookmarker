import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTcaYcTbYN9bgHfgrQ3dFNS84Ct3IMXfk",
  authDomain: "bookmarker-a0838.firebaseapp.com",
  projectId: "bookmarker-a0838",
  storageBucket: "bookmarker-a0838.appspot.com",
  messagingSenderId: "768404485416",
  appId: "1:768404485416:web:2afdf169ff2b7a72cd4c1d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
