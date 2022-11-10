import firebase from 'firebase/app';
import 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyAN-0kBdkReHPLhA1cL3Z11g8NUmZArXqw",
    authDomain: "zenpay-test.firebaseapp.com",
    projectId: "zenpay-test",
    storageBucket: "zenpay-test.appspot.com",
    messagingSenderId: "374685448012",
    appId: "1:374685448012:web:cf481ec5078bca9055c1e9",
    measurementId: "G-LDHT8GPNKV"
  };
  
const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();