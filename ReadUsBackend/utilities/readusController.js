var mysql = require('../utilities/mysqlTransaction');
var statusModel = require('../models/statusModel');
var progress = require('../models/progressModel');
var calc = require('../utilities/calculationUtilities');
var ws = require('../utilities/websocketUtility');
var bookModel = require('../models/bookModel');

exports.addPlan = function(req, res, next) {

    // res.send("hello world from addPlan");
    if (Object.keys(req.body).length !== 0) {

        console.log('insertData : ', req.body);
        mysql.insertBook(req.body)
            .then(book => {
                res.json(statusModel.status(200, 'your new plan has been added'));
            }).catch(err => {
                res.json(statusModel.status(500, 'sorry, your plan failed to save'));
            });
    } else {
        console.log('cannot read request body');
        res.json(statusModel.status(500, 'failed to update your progress'));
    }
}

exports.editProgress = function(req, res, next) {

    // res.send("hello world from editProgress");
    if (Object.keys(req.body).length !== 0) {
        mysql.editBook(req.body, { id: req.body.id })
            .then(book => {
                res.json(statusModel.status(200, 'you have update your progress'));
            }).catch(err => {
                res.json(statusModel.status(500, 'failed to update your progress'));
            });
    } else {
        console.log('cannot read request body');
        res.json(statusModel.status(500, 'failed to update your progress'));
    }
}

exports.progress = function(req, res, next) {

    // res.send("hello world from progress");
    mysql.getBook(req.body)
        .then(books => {
            console.log('result : ', books[0].dataValues);
            var array = [];

            books.forEach(book => {

                var bookData = book.dataValues;
                array.push(progress.progressItem(bookData.id, bookData.bookName, calc.calculatePercentage(bookData.totalPage, bookData.currentPage)));
            });

            array.sort((a, b) => (a.percentage > b.percentage) ? 1 : -1);

            ws.sendMessage(1, array);

            res.json(progress.progress(200, array));
        }).catch(err => {
            console.log(err);
            res.json(statusModel.status(500, 'you do not have any progress yet'));
        });
}

exports.getDetail = function(req, res, next) {
    console.log('id : ', req.query);
    mysql.getBook({ id: req.query.id })
        .then(books => {
            // var arrayBooks = [];
            // books.forEach(book => {
            //     arrayBooks.push(book.dataValues);
            // });
            res.json(bookModel.singleJson(200, books[0].dataValues));

        }).catch(err => {
            console.log('error : ', err);
            res.json(statusModel.status(500, 'failed to get book detail'));
        })
}