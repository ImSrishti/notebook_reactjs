// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
import "firebase/database";
import "firebase/storage";


// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
const firebaseConfig = {
  apiKey: "AIzaSyA-0J7IRprIl91gaPqdc-SLIZ1X5cs0JIQ",
  authDomain: "notebook-11.firebaseapp.com",
  databaseURL: "https://notebook-11.firebaseio.com",
  projectId: "notebook-11",
  storageBucket: "notebook-11.appspot.com",
  messagingSenderId: "83923075301",
  appId: "1:83923075301:web:5c87a38bf290f94e8e540c"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const database = firebase.database();

  export { database as default }