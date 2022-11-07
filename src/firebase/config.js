// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCeWKAqExRre7gEEyFwBSvEOxle98ax0c",
  authDomain: "party-planner-71012.firebaseapp.com",
  projectId: "party-planner-71012",
  storageBucket: "party-planner-71012.appspot.com",
  messagingSenderId: "182537487872",
  appId: "1:182537487872:web:e21288073424bf1fc4fae5",
  measurementId: "G-RY8VK5CX4W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);