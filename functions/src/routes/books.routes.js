const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors')({ origin: true });
const booksController = require('../controllers/books.controller');

const booksApp = express();
booksApp.use(cors);

booksApp.post('/books-by-pages', (req, res) => {
  console.log("in routes");
  booksController.getBooksByPages(req, res);
});


exports.books = functions.https.onRequest(booksApp);
