// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsrS6qNnQtgD3j1RdMVtL5BjnK4IGdrds",
  authDomain: "my-first-project-9db85.firebaseapp.com",
  databaseURL: "https://my-first-project-9db85-default-rtdb.firebaseio.com",
  projectId: "my-first-project-9db85",
  storageBucket: "my-first-project-9db85.appspot.com",
  messagingSenderId: "672343240084",
  appId: "1:672343240084:web:574b3aee18bbd52e9e3381",
  measurementId: "G-E1DJ28FGX1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const database = getDatabase(app);