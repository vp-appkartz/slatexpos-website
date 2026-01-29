import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBt7wBA0Xaz1DcHfH8u7bsuBUYyM50YzdM",
  authDomain: "slatexposweb.firebaseapp.com",
  projectId: "slatexposweb",
  storageBucket: "slatexposweb.firebasestorage.app",
  messagingSenderId: "892214914888",
  appId: "1:892214914888:web:f2e31466057a8a237d4d7d",
  measurementId: "G-2RE77TR2K6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// Initialize Cloud Storage and get a reference to the service
export const storage = getStorage(app);

export default app;
