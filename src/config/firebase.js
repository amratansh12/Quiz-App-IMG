import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyB-ZGBHTToT3BNxW240RJQxyyTEA5UJ8Is",
  authDomain: "quiz-app-ac260.firebaseapp.com",
  projectId: "quiz-app-ac260",
  storageBucket: "quiz-app-ac260.appspot.com",
  messagingSenderId: "1085156890634",
  appId: "1:1085156890634:web:be14b440d01365ed7867f3"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);