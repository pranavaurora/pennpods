import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/storage";


  var firebaseConfig = {
    apiKey: "AIzaSyBYUg4vYmEsfk7rtrewrXi6z-lzRweEHts",
    authDomain: "letschaat-59bc1.firebaseapp.com",
    databaseURL: "https://letschaat-59bc1.firebaseio.com",
    projectId: "letschaat-59bc1",
    storageBucket: "letschaat-59bc1.appspot.com",
    messagingSenderId: "1086441302702",
    appId: "1:1086441302702:web:c0948c7e54898fea9adb3f",
    measurementId: "G-G5M2262QKG"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  export default firebase;