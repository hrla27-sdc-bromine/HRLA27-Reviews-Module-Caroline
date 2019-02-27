const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/reviews', { useNewUrlParser: true });

const connection = mongoose.connection;

connection.on('error', () => console.log('Connection error.'));
connection.once('open', () => console.log('Connected to mongoDB.'));

module.exports = connection;
