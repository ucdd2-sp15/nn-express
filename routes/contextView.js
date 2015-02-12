module.exports = function(app) {

    app.get('/context/view/:id', function(req, res) {

        var context = app.data.contexts[req.params.id -1];

        res.render('contextView.jade', {
            context: context
        })
    })

}