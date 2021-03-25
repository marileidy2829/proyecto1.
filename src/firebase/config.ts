
import firebase from 'firebase/app';
import 'firebase/firestore'; 

const firebaseConfig = {
    apiKey: "AIzaSyBZIL8gwXS3vVNDGsFXpCTlzUIX7dD5ESo",
    authDomain: "sql-demos-99f0e.firebaseapp.com",
    databaseURL: "https://sql-demos-99f0e-default-rtdb.firebaseio.com",
    projectId: "sql-demos-99f0e",
    storageBucket: "sql-demos-99f0e.appspot.com",
    messagingSenderId: "784987554530",
    appId: "1:784987554530:web:9dbc8cd58c06c81d2794bb",
    measurementId: "G-DL4H066JBF"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
export default firebase.firestore()