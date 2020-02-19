var mysql = require('../utilities/mysqlTransaction');
var statusModel = require('../models/statusModel');
var progress = require('../models/progressModel');

exports.addPlan = function(req, res, next) {

    // res.send("hello world from addPlan");
    mysql.insertBook(req.body)
        .then(book => {
            res.json(statusModel.status(200, 'your new plan has been added'));
        }).catch(err => {
            res.json(statusModel.status(500, 'sorry, your plan failed to save'));
        });
}

exports.editProgress = function(req, res, next) {

    // res.send("hello world from editProgress");
    mysql.editBook(req.body, req.params.id)
        .then(book => {
            res.json(statusModel.status(200, 'you have update your progress'));
        }).catch(err => {
            res.json(statusModel.status(500, 'failed to update your progress'));
        });
}

exports.progress = function(req, res, next) {

    // res.send("hello world from progress");
    mysql.getBook({ id: 1 })
        .then(books => {
            array.forEach(element => {

            });
        }).catch(err => {
            res.json(statusModel.status(500, 'you do not have any progress yet'));
        });
}