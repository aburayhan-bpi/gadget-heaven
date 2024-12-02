// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA3I5qzmK7HqKnkq2xvh8AdXQIlu8-FNVU",
    authDomain: "gadget-heaven-e8822.firebaseapp.com",
    projectId: "gadget-heaven-e8822",
    storageBucket: "gadget-heaven-e8822.firebasestorage.app",
    messagingSenderId: "541161778715",
    appId: "1:541161778715:web:6abdb1e53fd992ef1192be",
    measurementId: "G-WT0HQZV8MS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);