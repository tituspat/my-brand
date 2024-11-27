// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBEgcogOnunW_X2OqbCdGGxXzja46GGV4o",
    authDomain: "custumized-service.firebaseapp.com",
    projectId: "custumized-service",
    storageBucket: "custumized-service.firebasestorage.app",
    messagingSenderId: "621166621175",
    appId: "1:621166621175:web:af0b9f99b5409fd0f97ef2",
    measurementId: "G-FZ2KZTW0G6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);