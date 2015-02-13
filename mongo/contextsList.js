module.exports = function(app) {

	app.get('/context/list', function(req, res) {    //

        // get the business collection
        var contexts = app.db.get('contexts') //tells to get contexts collection

      
        //var q = {
           // '_models_': {
             //   $in: ['Contexts']
           // }
        //}

        // execute the query to find those matched limiting to 20
        contexts.find({}, {
            limit: 20
        }, function(err, contexts) {

            res.render('contextList.jade', {
                contexts: contexts
            })
        })

    })
}