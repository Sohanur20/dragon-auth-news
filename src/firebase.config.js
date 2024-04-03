// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD04G1bGZvQ7Bzsw_VfmiaXA-7lDhEFlNs",
  authDomain: "dragon-auth-news-44c41.firebaseapp.com",
  projectId: "dragon-auth-news-44c41",
  storageBucket: "dragon-auth-news-44c41.appspot.com",
  messagingSenderId: "160107798445",
  appId: "1:160107798445:web:6ea7b3a5891bf96f058b24"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth ;