module.exports = function(app) {

    app.get('/context/list', function(req, res) {

        var contexts = app.data.contexts

        res.render('contextList.jade', {
            contexts: contexts
        })
    })

}