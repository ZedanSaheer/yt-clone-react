import firebase from "firebase/app"
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyC4w0e566X4r7jAqIZ9OJN-fAfI1rU6a9c",
    authDomain: "testing--326519.firebaseapp.com",
    projectId: "testing-youtube-326519",
    storageBucket: "testing-youtube-326519.appspot.com",
    messagingSenderId: "836051321539",
    appId: "1:836051321539:web:eee9d300ac147edde71876",
    measurementId: "G-8DRGQF90ZS"
  };

  firebase.initializeApp(firebaseConfig)

  export default firebase.auth()