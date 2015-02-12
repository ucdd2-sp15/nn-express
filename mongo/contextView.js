module.exports = function(app) {

    app.get('/context/view/:id', function(req, res) {

        // get the business collection
        var contexts = app.db.get('contexts')
         var q = {
            "id": parseInt(req.params.id)           
        }

        var cont = contexts.findOne(q, function(err, item) {


            res.render('contextView.jade', {
                context: item
            })
        })

    })
}