import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBNE9aBDmnMN4if1wyQx89mjdXoggbp48U",
  authDomain: "daxi-aabf4.firebaseapp.com",
  projectId: "daxi-aabf4",
  storageBucket: "daxi-aabf4.appspot.com",
  messagingSenderId: "362081481444",
  appId: "1:362081481444:web:e97a3e72a50d732573b2f1",
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
