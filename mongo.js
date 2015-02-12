var express = require('express')
var app = express()

// dburl to a mongodb server hosted in the cloud (i.e., mongolab)
var dburl = 'mongodb://nn:1234@ds053828.mongolab.com:53828/nn'

// get db
var db = require('monk')(dburl)

// set the database
app.db = db

// use jade as the view engine
app.set('view engine', 'jade');

// set where the static contents are (e.g., css, js)
app.use(express.static(__dirname + '/public'));


require('./mongo/accountList')(app)
require('./mongo/accountView')(app)
require('./mongo/contextList')(app)
//require('./mongo/contextView')(app)
//require('./mongo/noteList')(app)
//require('./mongo/notextView')(app)

var server = app.listen(3000, function() {

    var host = server.address().address
    var port = server.address().port

    console.log('App listening at http://%s:%s', host, port)
})
