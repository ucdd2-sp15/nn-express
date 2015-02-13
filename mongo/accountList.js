module.exports = function(app) {

    app.get('/account/list', function(req, res) {

        var accounts = app.db.get('accounts')
        
        var q = {
            "_model_": "Account"
        }
        
        accounts.find(q, {
            limit: 20
        }, function(err, accts) {

            res.render('accountList.jade', {
                accounts: accts
            })
        })
    
    })

}