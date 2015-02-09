module.exports = function(app) {

    app.get('/context/view/:id', function(req, res) {

        var id = req.params.id
        var context = app.data.contexts[id]

        res.render('contextView.jade', {
            context: context
        })
    })

}