module.exports = function(app) {
    
    app.get('/context/view/:id', function(req, res) {
        var contexts = app.db.get('contexts');
        //console.log(req.params);
        
        contexts.findOne(
            {'id': parseInt(req.params.id)},
            function(err, ctxt) {
                res.render('contextView.jade', {
                    context: ctxt
                })
            }
        )
    })
}
