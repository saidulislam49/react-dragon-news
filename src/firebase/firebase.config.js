// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6J4oT2Rj7gkvohF4bDqI1njZqYljJoUs",
  authDomain: "dragon-news-auth-db719.firebaseapp.com",
  projectId: "dragon-news-auth-db719",
  storageBucket: "dragon-news-auth-db719.firebasestorage.app",
  messagingSenderId: "147317770094",
  appId: "1:147317770094:web:680a39a1e8329956ff237f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
