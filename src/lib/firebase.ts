import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyA3yBNNKozthaMYx81M0sZ70-hKtulhchI",
  authDomain: "ncodeio-clickup.firebaseapp.com",
  databaseURL: "https://ncodeio-clickup-default-rtdb.firebaseio.com",
  projectId: "ncodeio-clickup",
  storageBucket: "ncodeio-clickup.firebasestorage.app",
  messagingSenderId: "929461242342",
  appId: "1:929461242342:web:137785e68f230a1b586e27"
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
