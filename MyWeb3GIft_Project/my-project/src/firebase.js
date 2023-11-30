// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore"
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_oQHcVe9gOTz-TZVK8HzPukAGlEnF-Fs",
  authDomain: "myweb3gift-bd98e.firebaseapp.com",
  databaseURL: "https://myweb3gift-bd98e-default-rtdb.firebaseio.com",
  projectId: "myweb3gift-bd98e",
  storageBucket: "myweb3gift-bd98e.appspot.com",
  messagingSenderId: "702760869277",
  appId: "1:702760869277:web:43da8429283e366d0d2374",
  measurementId: "G-XZLD9ELBD5"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
// Add a user document to the "users" collection
// const userRef = collection(db, "users");
// await addDoc(userRef, { name: "John Doe", email: "john@example.com" });

// const analytics = getAnalytics(app);
// Initialize Firebase
export { app, auth,db };

