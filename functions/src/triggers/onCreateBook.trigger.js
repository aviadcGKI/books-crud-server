const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

const mailTransport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'aviadctest@outlook.com',
        pass: 'omar2022',
    },
});

const sendMailOnCreateBook = functions.firestore.document('books/{docId}').onCreate((snap, context) => {
    const newBook = snap.data();
    const options = {
        from: 'coaviadcotest@gmail.com',
        to: 'coaviadco@gmail.com',
        subject: 'new book has created!',
        text: `${newBook.title} has created`
    }

    mailTransport.sendMail(options, (err, info) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(info.response);
    })
})

module.exports = { sendMailOnCreateBook };

