// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVfjxNYPxMOyCtXJ48cI6WAGZWJN92puI",
  authDomain: "naturaly-7c882.firebaseapp.com",
  projectId: "naturaly-7c882",
  storageBucket: "naturaly-7c882.appspot.com",
  messagingSenderId: "707318401873",
  appId: "1:707318401873:web:9680dca9aa3a67385b2170"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;