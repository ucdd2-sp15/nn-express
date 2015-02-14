module.exports = function(app) {

    app.get('/account/view/:id', function(req, res) {

        // get the accounts collection
        var accounts = app.db.get('accounts')

         var q = { 'id': Number(req.params.id) }

         accounts.findOne(q, function(err, account) {

            res.render('accountView.jade', {
                account: account
            })
        })

    })
}
