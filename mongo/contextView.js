module.exports = function(app) {

    app.get('/context/view/:id', function(req, res) {

        // get the business collection
        var context = app.db.get('contexts')

         var q = {
            "id": req.params.id            
        }
        var context = context.findOne(q, function(err, item) {
            res.render('contextView.jade', {
                context:item
            })
        })

    })
}
