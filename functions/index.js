const admin = require('firebase-admin');

admin.initializeApp();
const db = admin.firestore();
module.exports = db;

module.exports = {
    ...require('./src/controllers/books.controller.js'),
    ...require('./src/controllers/authors.controller.js'),
    ...require('./src/triggers/onCreateBook.trigger.js'),
};

