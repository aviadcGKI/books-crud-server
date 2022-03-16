const functions = require("firebase-functions");
const cors = require('cors')({origin: true});
const admin = require('firebase-admin');

admin.initializeApp();
const db = admin.firestore();

// const app = express();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const booksRef = db.collection("books");

exports.getBooksByPages = functions.https.onRequest(async (req, res) => {
    cors(req,res, async ()=>{
        try{
            
            const booksData = await booksRef.where("pages","<=",req.body.pages).get();
            res.status(200).send(booksData.docs);
        }catch(err){
            res.status(400).send(err);
        }
        
    })
})

// app.get('/books-pages', (req, res) => {
//     this.getBooksByPages(req, res);
// })
