// src/firebase.js (hoặc tạo một tệp tương tự)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDlMWrmlwMLKF5SE9p-QDXUoG2ShckTsyA",
  authDomain: "linkproject46.firebaseapp.com",
  projectId: "linkproject46",
  storageBucket: "linkproject46.firebasestorage.app",
  messagingSenderId: "317887907437",
  appId: "1:317887907437:web:f34f3995936eb26416a164"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
