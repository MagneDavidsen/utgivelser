var db = require('./db.js');
var Promise = require('promise');

function getAllRecords(req, res) {

    db.getAllRecords().toArray().then(function (values) {
        res.send(200, values);
    })
}

module.exports = {
    getAllRecords: getAllRecords
}