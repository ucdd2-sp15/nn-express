module.exports = function(app) {

    app.get('/context/view/:id', function(req, res) {

        var context = app.data.contexts[req.params.id]

        res.render('contextView.jade', {
            context: context
        })
    })

}