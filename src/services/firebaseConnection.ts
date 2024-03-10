import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDvyVZoOFKUPojZxtVt4jOeYdkOW6iGlAQ",
  authDomain: "reactlinks-46d80.firebaseapp.com",
  projectId: "reactlinks-46d80",
  storageBucket: "reactlinks-46d80.appspot.com",
  messagingSenderId: "404122194364",
  appId: "1:404122194364:web:486646cdd0243e3a229bb9",
  measurementId: "G-YFHHM8DTHX"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { auth, db}