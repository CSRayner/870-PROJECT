import firebase from "firebase/app";
import "firebase/auth";

// var firebaseConfig = {
//   apiKey: "AIzaSyDNOVjWan-Mwy154XRSpSkxTeq4V5F5OJU",
//   authDomain: "masrursakib-react-redux-aircnc.firebaseapp.com",
//   projectId: "masrursakib-react-redux-aircnc",
//   storageBucket: "masrursakib-react-redux-aircnc.appspot.com",
//   messagingSenderId: "2375480801",
//   appId: "1:2375480801:web:369740651ed1835d510ea0",
// };

var firebaseConfig = {
  apiKey: "AIzaSyAUxbCgO_umFiGtOZHXbKWq55mf1iTKIKo",
  authDomain: "react-project-cf67b.firebaseapp.com",
  projectId: "react-project-cf67b",
  storageBucket: "react-project-cf67b.appspot.com",
  messagingSenderId: "238858965463",
  appId: "1:238858965463:web:b675eac6d55ad83cd7fb92",
  measurementId: "G-VFXGRSSEED",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAUxbCgO_umFiGtOZHXbKWq55mf1iTKIKo",
//   authDomain: "react-project-cf67b.firebaseapp.com",
//   projectId: "react-project-cf67b",
//   storageBucket: "react-project-cf67b.appspot.com",
//   messagingSenderId: "238858965463",
//   appId: "1:238858965463:web:b675eac6d55ad83cd7fb92",
//   measurementId: "G-VFXGRSSEED"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
