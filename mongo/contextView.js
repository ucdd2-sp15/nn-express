module.exports = function(app) {
    app.get('/context/view/:id', function(req, res) {

        var contexts = app.db.get('contexts');

        var q = {
            'id' : Number(req.params.id)
        }

        contexts.findOne(q, function(err, context){
            console.log(context);
            res.render('contextView.jade', {
                context: context
            })
        })

    })

}
