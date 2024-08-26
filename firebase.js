// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAD9mdWhF_haifnloyw1sRqT-X6XVOFf-c",
    authDomain: "flashcard-saas-f57ca.firebaseapp.com",
    projectId: "flashcard-saas-f57ca",
    storageBucket: "flashcard-saas-f57ca.appspot.com",
    messagingSenderId: "623640422750",
    appId: "1:623640422750:web:fd41d9443c394fefc887cf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);
export default db; 