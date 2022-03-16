const db = require('../../index');

const BOOKS_REF = db.collection('books');
const AUTHORTS_REF = db.collection('authors');


module.exports = { BOOKS_REF, AUTHORTS_REF };