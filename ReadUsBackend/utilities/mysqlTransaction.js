var Sequelize = require('sequelize');
var sequelize = new Sequelize(
    'mysql://' + username + ':' + password + '@' + hostname + ':' + port + '/' + database
);
var bookModel = require('../models/bookModel');


const hostname = process.env.MYSQL_HOSTNAME || 'localhost';
const port = process.env.MYSQL_PORT || '3306';
const database = process.env.MYSQL_DATABASE || 'books';
const username = process.env.MYSQL_USERNAME || 'root';
const password = process.env.MYSQL_PASSWORD || 'root';

sequelize.authenticate()
    .then(() => {
        console.log('connection success');
    }).catch(err => {
        console.log('cannot connect. ', err);
    });

module.exports = {
    // Sequelize,
    // sequelize,
    insertBook,
    editBook,
    getBook
}

var insertBook = (book) => {
    return bookModel.bookModel(Sequelize, sequelize)
        .create(book);
}

var editBook = (updatedBook, filter) => {
    return bookModel.bookModel(Sequelize, sequelize)
        .update(updatedBook, {
            where: filter
        });
}

var getBook = (filter) => {
    return bookModel.bookModel(Sequelize, sequelize)
        .findAll({
            where: filter
        });
}