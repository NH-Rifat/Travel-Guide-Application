// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5mFC1hUIHfbOhdnoW0v2Rpmif8UEOUWg",
  authDomain: "travel-guide-4388b.firebaseapp.com",
  projectId: "travel-guide-4388b",
  storageBucket: "travel-guide-4388b.appspot.com",
  messagingSenderId: "466112850436",
  appId: "1:466112850436:web:010b7c30d278177a3ce351"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;