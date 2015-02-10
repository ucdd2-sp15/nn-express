var _ = require('lodash')
module.exports = function(app) {

    app.get('/account/view/:id', function(req, res) {

        var account = app.data.accounts;
        
        var rs = _.find(account, function(acct){
            if (acct.id == Number(req.params.id))
                return true;
            });

        res.render('accountView.jade', {
            account: rs
        })
    })

}
