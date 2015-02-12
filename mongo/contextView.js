module.exports = function(app) {

    app.get('/context/view/:id', function(req, res) {

        // get the business collection
        var contextsDb = app.db.get('contexts')

         var q = {
            'id': req.params.id            
        }

        var context = contextsDb.findOne(q, function(err, item) {

            res.render('contextView.jade', {
                context: item
            })
        })

    })
}
