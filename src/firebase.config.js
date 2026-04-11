// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCnmW2vhhMmzuqQBZuhVF5zN3s5xX41BcA",
    authDomain: "the-dragon-news-d055f.firebaseapp.com",
    projectId: "the-dragon-news-d055f",
    storageBucket: "the-dragon-news-d055f.firebasestorage.app",
    messagingSenderId: "865811705291",
    appId: "1:865811705291:web:cf806965949df7a83d9a4e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;