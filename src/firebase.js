import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCZCt27HaYO4_hOMTkAEKbiOEAxNkwNkdE",
  authDomain: "chat-b467d.firebaseapp.com",
  projectId: "chat-b467d",
  storageBucket: "chat-b467d.appspot.com",
  messagingSenderId: "216514934680",
  appId: "1:216514934680:web:9b8bcd62246922aa03dded",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
