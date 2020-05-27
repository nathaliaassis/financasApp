import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';


let firebaseConfig = {
    apiKey: "AIzaSyCr-fE3kT1octpDNxmLiXkP9CLe1Bz-u5A",
    authDomain: "financasapp-4b3e0.firebaseapp.com",
    databaseURL: "https://financasapp-4b3e0.firebaseio.com",
    projectId: "financasapp-4b3e0",
    storageBucket: "financasapp-4b3e0.appspot.com",
    messagingSenderId: "232553613537",
    appId: "1:232553613537:web:7d0e6f2afb814b563a8fa0",
    measurementId: "G-0HW7CCNTM4"
};
// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;
