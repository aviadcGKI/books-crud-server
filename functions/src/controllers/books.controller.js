// const functions = require('firebase-functions');
// const cors = require('cors')({ origin: true });

const { BOOKS_REF } = require('../firebaseRefs');

// const getBooksByPages = functions.https.onRequest(async (req, res) => {
//     cors(req, res, async () => {
//         try {
//             console.log("im in book controller");
//             const booksData = await BOOKS_REF.where("pages", "<=", req.body.pages).get();
//             const activeBooksList = [];
//             booksData.docs.forEach((book) => {
//                 activeBooksList.push({ ...book.data(), id: book.id })
//             })
//             res.status(200).send(activeBooksList);
//         } catch (err) {
//             res.status(400).send(err);
//         }

//     })
// })
const getBooksByPages = async (req, res) => {
    try {
        console.log("im in book controller");
        console.log("reqbody",req.body);
        console.log("reqparams",req.params);
        const booksData = await BOOKS_REF.where("pages", "<=", req.body.pages).get();
        const activeBooksList = [];
        booksData.docs.forEach((book) => {
            activeBooksList.push({ ...book.data(), id: book.id })
        })
        res.status(200).send(activeBooksList);
    } catch (err) {
        res.status(400).send(err);
    }
}

module.exports = { getBooksByPages };