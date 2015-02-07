module.exports = function(app) {

    app.get('/account/view/:id', function(req, res) {

        var account = app.data.accounts[5]

        res.render('accountView.jade', {
            account: account
        })
    })

}