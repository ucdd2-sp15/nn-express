module.exports = function(app) {
  app.get('/view/notes/:id', function(req, res) {
        // get the notes collection
        var notes = app.db.get('notes');

        var q = {
            'id': parseInt(req.params.id)
        }

        var note = notes.findOne(q, function(err, item) {
          
            res.render('noteView.jade', {
                note: item
            })
        })

    })
}