import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDUtwL621wID7NPpS0uFhITzCnZPgJIIbk",
    authDomain: "chatgpt2-674bd.firebaseapp.com",
    projectId: "chatgpt2-674bd",
    storageBucket: "chatgpt2-674bd.appspot.com",
    messagingSenderId: "823049114132",
    appId: "1:823049114132:web:c87a2c0f3da21572388d01"
};

// Initialize Firebase
export const provider = new GoogleAuthProvider();
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);