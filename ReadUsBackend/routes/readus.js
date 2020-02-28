var express = require('express');
var readusController = require('../utilities/readusController');

var router = express.Router();

// API : /ReadUs/backend/v1/addPlan
router.post('/addPlan', function(req, res, next) {
    readusController.addPlan(req, res, next);
});

// API : /ReadUs/backend/v1/editProgress
router.put('/editProgress', function(req, res, next) {
    readusController.editProgress(req, res, next);
});

// API : /ReadUs/backend/v1/progress
router.get('/progress', function(req, res, next) {
    readusController.progress(req, res, next);
});

// API : /ReadUs/backend/v1/getDetail
router.get('/getDetail', function(req, res, next) {
    readusController.getDetail(req, res, next);
});

module.exports = router;