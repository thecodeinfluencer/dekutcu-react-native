import "expo-firestore-offline-persistence";

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEtjoO-EmPDjeke4dQIrVeKxnUZq5ToCU",
  authDomain: "dekutchristians.firebaseapp.com",
  projectId: "dekutchristians",
  storageBucket: "dekutchristians.appspot.com",
  messagingSenderId: "87351020834",
  appId: "1:87351020834:web:e7b56a0f59cf026864297b",
  measurementId: "G-67DDLL8TEM",
};

firebase.apps.length === 0 && firebase.initializeApp(firebaseConfig);

//Firebase Firestore Persistance
firebase
  .firestore()
  .enablePersistence()
  .catch(function (err) {
    if (err.code === "failed-precondition") {
      // Multiple tabs open, persistence can only be enabled
      // in one tab at a a time.
      // ...
      console.log("Multiple tabs open, persistence can only be enabled");
    } else if (err.code === "unimplemented") {
      // The current browser does not support all of the
      // features required to enable persistence
      // ...
      console.log("The current browser does not support ");
    }
  });

export default firebase;
