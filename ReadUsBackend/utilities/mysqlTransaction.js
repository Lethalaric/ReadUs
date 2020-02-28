var Sequelize = require('sequelize');

const hostname = process.env.MYSQL_HOSTNAME || 'localhost';
const port = process.env.MYSQL_PORT || '3306';
const database = process.env.MYSQL_DATABASE || 'readus';
const username = process.env.MYSQL_USERNAME || 'root';
const password = process.env.MYSQL_PASSWORD || 'root';

var sequelize = new Sequelize(
    'mysql://' + username + ':' + password + '@' + hostname + ':' + port + '/' + database
);
var bookModel = require('../models/bookModel');

sequelize.authenticate()
    .then(() => {
        console.log('connection success');
    }).catch(err => {
        console.log('cannot connect. ', err);
    });

exports.insertBook = (book) => {
    return bookModel.bookModel(Sequelize, sequelize)
        .create(book);
}

exports.editBook = (updatedBook, filter) => {
    bookModel.bookModel(Sequelize, sequelize)
        .findAll({
            where: filter
        }).then(books => {
            book = books[0].dataValues;
            updatedBook.currentPage += book.currentPage;
            updatedBook.currentTime += book.currentTime;
            console.log('updatedBook : ', updatedBook);
            console.log('filter : ', filter)
            bookModel.bookModel(Sequelize, sequelize)
                .update(updatedBook, {
                    where: filter
                }).then(book => {
                    console.log('success to update');
                }).catch(err => {
                    console.log('failed to update. ', err);
                });
        }).catch(err => {
            console.log('error while select-update. ', err);
        });
    return bookModel.bookModel(Sequelize, sequelize)
        .findAll({
            where: filter
        });
}

exports.getBook = (filter) => {
    return bookModel.bookModel(Sequelize, sequelize)
        .findAll({
            where: filter
        });
}