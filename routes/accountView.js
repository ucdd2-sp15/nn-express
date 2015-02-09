var _ = require('lodash')
module.exports = function(app) {

    app.get('/account/view/:id', function(req, res) {
        var account = _.find(app.data.accounts, function(account) { return account.id == req.params.id}) 

        res.render('accountView.jade', {
            account: account
        })
    })

}
