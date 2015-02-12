module.exports = function(app) {

	app.get('/list/contexts', function(req, res) { 

        var contexts = app.db.get('contexts') //tells to get contexts collection

contexts.find({}, {
            limit: 20
        }, function(err, contexts) {

            res.render('contextList.jade', {
                contexts: contexts
            })
        })

    })
}
