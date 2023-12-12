// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyArj8fpOwhVklKHk9HMEqkGztf7ILyXYb0",
    authDomain: "shoppy-ef21a.firebaseapp.com",
    projectId: "shoppy-ef21a",
    storageBucket: "shoppy-ef21a.appspot.com",
    messagingSenderId: "92440591752",
    appId: "1:92440591752:web:4da9841d97457c66e54e3d",
    measurementId: "G-YL7SXXRJ9N"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);