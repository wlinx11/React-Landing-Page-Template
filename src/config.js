// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSMcRJdltH7q5Lv4d5Menmk-hbCh1Bb6k",
  authDomain: "hotel-punto-pristino.firebaseapp.com",
  projectId: "hotel-punto-pristino",
  storageBucket: "hotel-punto-pristino.appspot.com",
  messagingSenderId: "738270558653",
  appId: "1:738270558653:web:1b477d172f4ab48d4b3ad4",
  measurementId: "G-HKFPT7FK9M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);