import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyChVM_Xdupv2Y08MMfqMJvhMQeIlJqGAWA",
  authDomain: "mimo-c5e84.firebaseapp.com",
  projectId: "mimo-c5e84",
  storageBucket: "mimo-c5e84.appspot.com",
  messagingSenderId: "492632384836",
  appId: "1:492632384836:web:c763b47b6a3d7df2b32311",
  measurementId: "G-38VFGETGNW"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { app, db, auth, analytics };