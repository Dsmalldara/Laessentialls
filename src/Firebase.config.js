// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHG_M908S0VeuQd46AKNS4iEwWUdsEl2Y",
  authDomain: "laessentials-48044.firebaseapp.com",
  projectId: "laessentials-48044",
  storageBucket: "laessentials-48044.appspot.com",
  messagingSenderId: "571962417457",
  appId: "1:571962417457:web:0aabf210be26394a4d1010",
  measurementId: "G-CPFRBD7K54"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);