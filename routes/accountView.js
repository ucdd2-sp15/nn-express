module.exports = function(app) {

    app.get('/account/view/:id', function(req, res) {

        var account = app.data.accounts[req.params.id];

        res.render('accountView.jade', {
            account: account
        })
    })

}