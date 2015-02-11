module.exports = function(app) {

    app.get('/account/view/:id', function(req, res) {

        // get the business collection
        var accounts = app.db.get('accounts')

         var q = {
            'id': req.params.id
        }

        var account = accounts.findOne(q, function(err, item) {

            res.render('accountView.jade', {
                account: item
            })
        })

    })
}
