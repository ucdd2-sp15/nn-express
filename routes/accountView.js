module.exports = function(app) {

    app.get('/account/view/:id', function(req, res) {

        var account = app.data.accounts[5]
        var notes = app.data.notes

        res.render('accountView.jade', {
            account: account,
            notes: notes
        })
    })

}