// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "YOUR_CONFIGERATION",
    authDomain: "YOUR_CONFIGERATION",
    projectId: "YOUR_CONFIGERATION",
    storageBucket: "YOUR_CONFIGERATION",
    messagingSenderId: "YOUR_CONFIGERATION",
    appId: "YOUR_CONFIGERATION",
    measurementId: "YOUR_CONFIGERATION",
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()