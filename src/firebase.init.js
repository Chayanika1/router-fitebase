// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMb3R4uAqxi95GIDyQVth8VrP7HpMVfEc",
  authDomain: "router-firebase-integrat-9ab9b.firebaseapp.com",
  projectId: "router-firebase-integrat-9ab9b",
  storageBucket: "router-firebase-integrat-9ab9b.appspot.com",
  messagingSenderId: "396842040107",
  appId: "1:396842040107:web:c30b24b7e19289eb6ae36e",
  measurementId: "G-SMJ4EBC665"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;