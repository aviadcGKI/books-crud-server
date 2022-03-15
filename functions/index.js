const functions = require("firebase-functions");
const express = rewuire('express');
const admin = require('firebase-admin');

admin.initializeApp();
const db = admin.firestore();


const app = express();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

exports .getBooksByPages = functions.https.onRequest((req,res)=>{
    res.send("hey")
})

app.get('/books-pages',(req,res)=>{
    this.getBooksByPages(req,res);
})
