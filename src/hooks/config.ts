import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBEtXWBx6SeMz--xCuOGzOqfzqAkYLCwXw",
  authDomain: "quangsystem-abe8f.firebaseapp.com",
  projectId: "quangsystem-abe8f",
  storageBucket: "quangsystem-abe8f.appspot.com",
  messagingSenderId: "935597290769",
  appId: "1:935597290769:web:61bb6618e4f2d954db88b0",
  measurementId: "G-RK5WVFMEJL"
};
// Kết nối với firebase 
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);