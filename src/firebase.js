// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: 'AIzaSyAIRYsSGFUX-YUHaWtkOoYw1qOMUIRrl2I',
  authDomain: 'vue-shopping--app.firebaseapp.com',
  databaseURL: 'https://vue-shopping--app-default-rtdb.firebaseio.com',
  projectId: 'vue-shopping--app',
  storageBucket: 'vue-shopping--app.appspot.com',
  messagingSenderId: '708335955766',
  appId: '1:708335955766:web:1b7a4e1d41b401d724cd97',
  measurementId: 'G-HRV032EE8B'
}
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const authentication = getAuth(app);
export const googleProvider = new GoogleAuthProvider;



export const db = getDatabase(app);