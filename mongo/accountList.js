module.exports = function(app) {

    app.get('/account/list', function(req, res) {

        // get the business collection
        var accounts = app.db.get('accounts')

        // compose a query to look up docs whose 'categories' field contains the word 'Doctors'
        var q = {
            '_model_': {
                $in: ['Account']
            }
        }

        // execute the query to find those matched limiting to 20
        accounts.find(q, {
            limit: 20
        }, function(err, accounts) {
            res.render('accountList.jade', {
                accounts: accounts,
          })
        })
    })
}
