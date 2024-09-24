// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCFnycT4EQl8Hjy_howp__nnx2sA-UiQYI",
  authDomain: "chat-web-84675.firebaseapp.com",
  projectId: "chat-web-84675",
  storageBucket: "chat-web-84675.appspot.com",
  messagingSenderId: "103738977718",
  appId: "1:103738977718:web:8b9fa49135eb834ea2e517",
  measurementId: "G-G1EQSX724F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const databaseApp = getFirestore(app);

export { auth, databaseApp };
