 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCATV-f5S4HcMDDDbkF1Qfw52nKCK2TRNk",
  authDomain: "melanomapredict.firebaseapp.com",
  projectId: "melanomapredict",
  storageBucket: "melanomapredict.firebasestorage.app",
  messagingSenderId: "258919447424",
  appId: "1:258919447424:web:9dbb3224618be100991f65",
  measurementId: "G-RSPS12LCHT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);