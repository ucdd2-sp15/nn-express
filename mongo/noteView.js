module.exports = function(app) {

    app.get('/view/note/:id', function(req, res) {

        // get the business collection
        var notes = app.db.get('notes')

         var q = {
            'id': Number(req.params.id)            
        }

        var note = notes.findOne(q, function(err, item) {
            res.render('noteView.jade', {
                note: item
            })
        })

    })
}