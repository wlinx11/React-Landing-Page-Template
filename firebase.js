import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDSMcRJdltH7q5Lv4d5Menmk-hbCh1Bb6k",
    authDomain: "hotel-punto-pristino.firebaseapp.com",
    projectId: "hotel-punto-pristino",
    storageBucket: "hotel-punto-pristino.appspot.com",
    messagingSenderId: "738270558653",
    appId: "1:738270558653:web:1b477d172f4ab48d4b3ad4",
    measurementId: "G-HKFPT7FK9M"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;