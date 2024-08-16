// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANJ_4nHqUOXvmooNk1sTIBD5TKlwk9J-Q",
  authDomain: "employ-ab958.firebaseapp.com",
  projectId: "employ-ab958",
  storageBucket: "employ-ab958.appspot.com",
  messagingSenderId: "728632958256",
  appId: "1:728632958256:web:7f70462e8afa48f7763cf5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);