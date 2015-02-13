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


// default to index
app.get('/', function(req, res) {
    res.render('index.jade')
})

// load routes for note, account, context
require('./routes/noteView')(app)
require('./routes/noteList')(app)
require('./routes/accountView')(app)
require('./routes/accountList')(app)
require('./routes/contextView')(app)
require('./routes/contextList')(app)


var server = app.listen(3000, function() {

    var host = server.address().address
    var port = server.address().port

    console.log('App listening at http://%s:%s', host, port)
})
