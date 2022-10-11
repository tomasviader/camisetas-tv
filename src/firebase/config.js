// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore"
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDRihbr3tmGMnNdFedjdMaRXWLGCSBx9xo",
    authDomain: "camisetas-tv.firebaseapp.com",
    projectId: "camisetas-tv",
    storageBucket: "camisetas-tv.appspot.com",
    messagingSenderId: "419342954489",
    appId: "1:419342954489:web:8c6ed893d2503a6eb05728"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
