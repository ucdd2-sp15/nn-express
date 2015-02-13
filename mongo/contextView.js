module.exports = function(app) {

    app.get('/context/view/:id', function(req, res) {

        // get the business collection
        var contexts = app.db.get('contexts')

         var q = {
            "id":Number(req.params.id)           
        }
		console.log(q)
        contexts.findOne(q, function(err, context) {
            res.render('contextView.jade', {
                context:context
            })
        })

    })
}
