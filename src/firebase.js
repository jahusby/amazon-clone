import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyASR1uP7wo3JfiyvrAxeKNBSg7hdR-_AUI",
  authDomain: "clone-b1ea9.firebaseapp.com",
  databaseURL: "https://clone-b1ea9.firebaseio.com",
  projectId: "clone-b1ea9",
  storageBucket: "clone-b1ea9.appspot.com",
  messagingSenderId: "1080722789837",
  appId: "1:1080722789837:web:5359adf26aabb1262d6084",
  measurementId: "G-D1JLRYFFWQ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
