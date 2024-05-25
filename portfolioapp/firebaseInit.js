// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzv3kQDvT-sBS3hwTEtZui0jcEpRxZivA",
  authDomain: "svlete-portfolio-site.firebaseapp.com",
  projectId: "svlete-portfolio-site",
  storageBucket: "svlete-portfolio-site.appspot.com",
  messagingSenderId: "599605982371",
  appId: "1:599605982371:web:6a54d6911b2329f9b23b16",
  measurementId: "G-8R3L07MQBX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);