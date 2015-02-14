module.exports = function(app) {

	app.get('/account/list', function(req, res) {

        // get the user collection
        var accounts= app.db.get('accounts')


        // execute the query to find those matched limiting to 20
        accounts.find({}, {
            limit: 20
        }, function(err, accounts) {

            res.render('accountList.jade', {
                accounts: accounts
            })
        })

    })
}