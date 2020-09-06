import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCueCOxndCo653s88W0Oayk7wXnSmOe0Wg",
    authDomain: "fir-integration-test-5888d.firebaseapp.com",
    databaseURL: "https://fir-integration-test-5888d.firebaseio.com",
    projectId: "fir-integration-test-5888d",
    storageBucket: "fir-integration-test-5888d.appspot.com",
    messagingSenderId: "670637456346",
    appId: "1:670637456346:web:b1060f9002c9cd05ac9ee3"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };