import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyAD9mdWhF_haifnloyw1sRqT-X6XVOFf-c",
    authDomain: "flashcard-saas-f57ca.firebaseapp.com",
    projectId: "flashcard-saas-f57ca",
    storageBucket: "flashcard-saas-f57ca.appspot.com",
    messagingSenderId: "623640422750",
    appId: "1:623640422750:web:fd41d9443c394fefc887cf",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db; 