import { initializeApp } from "firebase/app";
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyData0EKuP5Zyc78XkRwlDwpUHg4sY5rwE",
  authDomain: "ntvcons-e4b3c.firebaseapp.com",
  projectId: "ntvcons-e4b3c",
  storageBucket: "ntvcons-e4b3c.appspot.com",
  messagingSenderId: "239906872890",
  appId: "1:239906872890:web:de3ea67c98cae227ad1f03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;