module.exports = function(app) {

    app.get('/context/view/:id', function(req, res) {

        var context = app.db.get('contexts')
        
        var q = {
            "_model_": "Context"
        }
        
        context.find(q, function(err, conts){
            var cont = conts[req.params.id]
            res.render('contextView.jade', {
                context: cont
            })
        })
    })

}