// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCk99PllHGg0KwnNeGITeuQ8Mx6zedPK9s",
  authDomain: "easyplanner-g4dev.firebaseapp.com",
  projectId: "easyplanner-g4dev",
  storageBucket: "easyplanner-g4dev.firebasestorage.app",
  messagingSenderId: "955897360225",
  appId: "1:955897360225:web:bb75a2b74a970f36d09f20",
  measurementId: "G-SB0F8PHHRJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

console.log("Firebase carregou", app);