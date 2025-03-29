// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
// Your web app's Firebase configuration
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAy-BUOwRD6EpFEmgOpa943PFJga0TaLF4",
  authDomain: "expense-tracker-efb14.firebaseapp.com",
  projectId: "expense-tracker-efb14",
  storageBucket: "expense-tracker-efb14.firebasestorage.app",
  messagingSenderId: "27487657343",
  appId: "1:27487657343:web:6a3994e48e548a50db0e4a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// auth
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

// db
export const fireStore = getFirestore(app);
