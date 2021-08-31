import firebase from 'firebase/app';
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyAgoNYKhf4uA-iyNCe2TUi1PCDyj5Wxnig",
    authDomain: "pets-b7940.firebaseapp.com",
    projectId: "pets-b7940",
    storageBucket: "pets-b7940.appspot.com",
    messagingSenderId: "291360299657",
    appId: "1:291360299657:web:a85086a9f2102218774458"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export {
    db,
    firebase
}