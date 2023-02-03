// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-4czKag0xEwinRJH_9cb2FBZDy8HL7ek",
  authDomain: "note-app-32522.firebaseapp.com",
  projectId: "note-app-32522",
  storageBucket: "note-app-32522.appspot.com",
  messagingSenderId: "622330667990",
  appId: "1:622330667990:web:81227d97cdfb33ffba7a77",
  measurementId: "G-697D18YGV0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);