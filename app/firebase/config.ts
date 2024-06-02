// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCLf3_6rqsWV_mDUWdkM1e8qG6BS0Zk0Bs",
  authDomain: "malchin.firebaseapp.com",
  databaseURL: "https://malchin-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "malchin",
  storageBucket: "malchin.appspot.com",
  messagingSenderId: "1035097313759",
  appId: "1:1035097313759:web:387c367d033a7028d8346a",
  measurementId: "G-00ZJDV938C",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const analytics = typeof window !== 'undefined' && getAnalytics(app);

const auth = getAuth(app);

export { app, auth, db };
