import * as firebase from "firebase/app";
import 'firebase/storage'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAyA7QdDcikP7e57canJe2_5yy4INQ4pLc",
    authDomain: "gallery-5413b.firebaseapp.com",
    databaseURL: "https://gallery-5413b.firebaseio.com",
    projectId: "gallery-5413b",
    storageBucket: "gallery-5413b.appspot.com",
    messagingSenderId: "1040141135645",
    appId: "1:1040141135645:web:2e424407422147ca5a3bf4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const projectStorage = firebase.storage()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export {projectStorage, projectFirestore, timestamp}