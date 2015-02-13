module.exports = function(app){
    app.get('/account/list', function(req, res) {

        // get the accounts collection
        var accounts = app.db.get('accounts')

        // compose a query to look up accounts whose '_model_' field contains the word 'Account'
        var q = {
            '_model_': 'Account'
        }

        // execute the query
        accounts.find(q, function(err, accts) {

            res.render('accountList.jade', {
                accounts: accts
            })
        })

    })
}
