import firebase from 'firebase'
import firestore from 'firebase/firestore'
var firebaseConfig = {
    apiKey: "AIzaSyArXUDxs_Pn3qZJjSFhEyItihx7sHS7rSk",
    authDomain: "geo-dev-7e114.firebaseapp.com",
    databaseURL: "https://geo-dev-7e114.firebaseio.com",
    projectId: "geo-dev-7e114",
    storageBucket: "geo-dev-7e114.appspot.com",
    messagingSenderId: "978412466069",
    appId: "1:978412466069:web:aade53127344dbb284509c",
    measurementId: "G-DZRMES8NY5"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore()