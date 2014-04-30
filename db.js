var moment = require('moment')
var pmongo = require('promised-mongo')

var MONGODB_URL = process.env.MONGODB_URL || "mongodb://integration:integration@ds037847.mongolab.com:37847/utgivelser-integrationtest"

var db = pmongo(MONGODB_URL);

function getAllRecords() {
    return db.collection('records').find()
}

function getAllFutureRecords() {
    var today = moment({hour: 0})
    return db.collection('records').find({'releaseDate': {$gte: today}})
}

module.exports = {
    getAllRecords: getAllRecords,
    getAllFutureRecords: getAllFutureRecords
}