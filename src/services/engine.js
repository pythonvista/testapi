const firebase = require('firebase/app')
const firestore = require('firebase/firestore')
require('dotenv/config')
const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: "vickyapi.firebaseapp.com",
    projectId: "vickyapi",
    storageBucket: "vickyapi.appspot.com",
    messagingSenderId: "702282977515",
    appId: process.env.APP_ID
  };

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firestore.getFirestore(app);

module.exports  = {db, firestore}