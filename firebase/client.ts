

import { initializeApp, getApp,getApps } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyBHjUTppyrJkis8OiTil7TEhNMkiaeHPvw",
    authDomain: "intellimock-43e0b.firebaseapp.com",
    projectId: "intellimock-43e0b",
    storageBucket: "intellimock-43e0b.firebasestorage.app",
    messagingSenderId: "108081177098",
    appId: "1:108081177098:web:7a3808626461f8a078b5f3",
    measurementId: "G-06TMV10FEB"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);