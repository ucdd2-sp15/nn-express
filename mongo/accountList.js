module.exports = function(app) {

    app.get('/account/list', function(req, res) {

        var accounts = app.db.get('accounts')

        accounts.find({}, function(err, accs) {
            res.render('accountList.jade', {
                accounts: accs
            })
        })
    })

}