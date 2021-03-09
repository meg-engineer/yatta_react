import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCJV3hwJ7Kfno8DwHJywc7UpJBL5Zn60CU",
  authDomain: "yatta-81a6f.firebaseapp.com",
  projectId: "yatta-81a6f",
  storageBucket: "yatta-81a6f.appspot.com",
  messagingSenderId: "380532707234",
  appId: "1:380532707234:web:bff430a151ddf04f426cfb",
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
