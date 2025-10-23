// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7L3pcRyGz_ZdBR9L2IhTBDpT_7c3u5fM",
  authDomain: "floofy-pet-care.firebaseapp.com",
  projectId: "floofy-pet-care",
  storageBucket: "floofy-pet-care.firebasestorage.app",
  messagingSenderId: "591791128103",
  appId: "1:591791128103:web:47c4ae2cfd862367f29802"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;