var db = require('./db.js');
var Promise = require('promise');

function getAllRecords(req, res) {

    var recordsPromise = db.getAllRecords().toArray();

   recordsPromise.then(function (values) {
        res.send(200, values);
    })
}

module.exports = {
    getAllRecords: getAllRecords
}