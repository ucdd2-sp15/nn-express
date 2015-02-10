module.exports = function(app) {

    app.get('/account/view/:id', function(req, res) {

        var id = req.params.id
        var account = app.data.accounts[id]
        var note = app.data.notes

        res.render('accountView.jade', {
            account: account,
            note: note
        })
    })

}