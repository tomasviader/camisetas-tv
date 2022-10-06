// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

/* const loginWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
    });
}
 */


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