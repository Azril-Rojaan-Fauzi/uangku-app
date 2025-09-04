// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNY4PPCFlEREQZ1J9-CEwP9W5qzEKJC_g",
  authDomain: "uangku-app-9b03e.firebaseapp.com",
  projectId: "uangku-app-9b03e",
  storageBucket: "uangku-app-9b03e.firebasestorage.app",
  messagingSenderId: "1041660857205",
  appId: "1:1041660857205:web:2369a3d2d1836b6db1a13c",
  measurementId: "G-CDH8QKDV36",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
