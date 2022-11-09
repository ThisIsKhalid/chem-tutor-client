// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATcSaHy2FHmd2pGE7bThzJ94h983HKl14",
  authDomain: "chem-tutor.firebaseapp.com",
  projectId: "chem-tutor",
  storageBucket: "chem-tutor.appspot.com",
  messagingSenderId: "803075407029",
  appId: "1:803075407029:web:9c7d56fa9f6fc54af1d2fc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;