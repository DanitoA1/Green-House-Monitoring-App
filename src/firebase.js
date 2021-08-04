import firebase from "firebase/app";
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBZFTn9_EegZyfxJjP_a1jdfJX8wBE5Xy0",
  authDomain: "greenhouse-c1a42.firebaseapp.com",
  databaseURL: "https://greenhouse-c1a42-default-rtdb.firebaseio.com",
  projectId: "greenhouse-c1a42",
  storageBucket: "greenhouse-c1a42.appspot.com",
  messagingSenderId: "177661443469",
  appId: "1:177661443469:web:eaa1388e617b9c954991c4",
  measurementId: "G-PRWKP5H5BE",
};
// Initialize Firebase

const fbAccess = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()

export {fbAccess, auth}