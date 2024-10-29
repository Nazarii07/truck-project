import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';

// Firebase конфігурація, яку ви надали
const firebaseConfig = {
  apiKey: "AIzaSyD2dbiG25jidEyLPfzJKXLRMAZw4PVlcBE",
  authDomain: "mart-transit-6bf2e.firebaseapp.com",
  projectId: "mart-transit-6bf2e",
  storageBucket: "mart-transit-6bf2e.appspot.com",
  messagingSenderId: "506089681419",
  appId: "1:506089681419:web:dc8912b76c6c7e72b84d0e",
  measurementId: "G-PG663TPWYG"
};

// Ініціалізація Firebase
const app = initializeApp(firebaseConfig);

// Ініціалізація аналітики (якщо вона вам потрібна)
let analytics;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

// Ініціалізація Firestore
const db = getFirestore(app);

export { db, analytics };
