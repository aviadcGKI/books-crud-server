const admin = require('firebase-admin');

admin.initializeApp();
const db = admin.firestore();

module.exports = db;

module.exports = {
    ...require('./src/routes/books.routes'),
    ...require('./src/triggers/onCreateBook.trigger.js'),
};

