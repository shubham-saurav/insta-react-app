import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDJRj0FDKEUW5h3u2IwtqD6BSYYI9ix1OE",
  authDomain: "instagram-react-app-27297.firebaseapp.com",
  databaseURL: "https://instagram-react-app-27297.firebaseio.com",
  projectId: "instagram-react-app-27297",
  storageBucket: "instagram-react-app-27297.appspot.com",
  messagingSenderId: "898727678370",
  appId: "1:898727678370:web:7d6f61fa5d031f93a5e2fb",
  measurementId: "G-0QTB7YRLR2",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage};

