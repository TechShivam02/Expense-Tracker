import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAtf0GVg0C5l13_TeGGlFQCJpc1fVKmtzw",
  authDomain: "techshivam-expensetracker.firebaseapp.com",
  projectId: "techshivam-expensetracker",
  storageBucket: "techshivam-expensetracker.appspot.com",
  messagingSenderId: "258470253794",
  appId: "1:258470253794:web:5148bc00248f736439fabb"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export {auth, provider}