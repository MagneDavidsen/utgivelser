var expect = require('chai').expect
var Promise = require('promise');
var recordsDb = require('../db.js')
var moment = require('moment');
var pmongo = require('promised-mongo');

var MONGODB_URL = process.env.MONGODB_URL || "mongodb://integration:integration@ds037847.mongolab.com:37847/utgivelser-integrationtest"

describe('#recordDb', function() {


    var db = pmongo(MONGODB_URL);
    var today = moment({hour: 0});

    before(function(done) {

        db.collection('records').drop(function() {
            var prom1 = db.collection('records').insert({artist: "bob", title: "albumtitle", label:"label", releaseDate: new Date(2014, 1, 1)})
            var prom2 = db.collection('records').insert({artist: "rolf", title: "albumtitle", label:"label", releaseDate: today.toDate()})

            Promise.all([prom1, prom2]).then(function(){
                console.log("Done")
                done()
            })
        })
    })

    describe('getAllRecords', function() {
        it('should return two records', function(done) {
            recordsDb.getAllRecords().toArray(function(err, doc) {

                console.log(doc)

                expect(err).to.be.null
                expect(doc).to.have.length(2)
                done()
            })
        })
    })

    describe('getFutureRecords', function(){
        it('should return only one record', function(done) {
            recordsDb.getAllFutureRecords().toArray(function(err, doc) {

                console.log(doc)

                expect(err).to.be.null
                expect(doc).to.have.length(1)
                done()
            })
        })
    })
})
