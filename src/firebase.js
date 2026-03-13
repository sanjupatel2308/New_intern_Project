import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";



const firebaseConfig = {
 apiKey: "AIzaSyCNnGjr9xlKPOjTpZalpZHmCO8BBlQgVnc",
  authDomain: "sdtechsolutions.firebaseapp.com",
  projectId: "sdtechsolutions",
  storageBucket: "sdtechsolutions.firebasestorage.app",
  messagingSenderId: "162929626432",
  appId: "1:162929626432:web:15947b41357534aa51bea5",
  measurementId: "G-58B6MLJTCJ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);