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

// Initialize Firebase (Main App - Database & Auth)
const app = initializeApp(firebaseConfig);

// Secondary Project Config (Storage Only)
// TODO: Replace these values with the configuration from your storage-enabled project
const storageConfig = {
  apiKey: "AIzaSyAw7zKim4kaoQGmRr92IRpIOLCoV0AuPss",
  authDomain: "slatexpos-a0cda.firebaseapp.com",
  projectId: "slatexpos-a0cda",
  storageBucket: "slatexpos-a0cda.firebasestorage.app",
  messagingSenderId: "261060391403",
  appId: "1:261060391403:web:9d33ba9c378f8bd386a9ae",
  measurementId: "G-GP1EYC3773"
};

// Initialize Secondary App for Storage
const storageApp = initializeApp(storageConfig, "storageApp");

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// Initialize Cloud Storage and get a reference to the service (from Secondary App)
export const storage = getStorage(storageApp);

export default app;
