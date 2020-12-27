import  firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyB2OF-bi8Yn2Zhl_wYbTil_p1cL23QHniQ",
    authDomain: "web-and-mobile-practice.firebaseapp.com",
    projectId: "web-and-mobile-practice",
    storageBucket: "web-and-mobile-practice.appspot.com",
    messagingSenderId: "300451362763",
    appId: "1:300451362763:web:dc48d3d7accfc49c3fe84e",
    measurementId: "G-QZY628E77B"
  };
  // Initialize Firebase
 var Firebase= firebase.initializeApp(firebaseConfig);
 export default Firebase
  