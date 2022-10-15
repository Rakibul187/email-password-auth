// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBDiIV5TUsp1FBgskjjlx6WdrAXtabac1U",
    authDomain: "email-password-auth-8e6c2.firebaseapp.com",
    projectId: "email-password-auth-8e6c2",
    storageBucket: "email-password-auth-8e6c2.appspot.com",
    messagingSenderId: "1012735383130",
    appId: "1:1012735383130:web:569c3d158d9d412a58ea63"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;