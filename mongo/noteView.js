module.exports = function(app) {

    app.get('/note/view/:id', function(req, res) {

        // get the notes collection
        var allNotes = app.db.get('notes')

        //It gets unhappy if the ID is a string, so make it an int
        var myID = parseInt(req.params.id)

         var q = {
            'id': myID
        }

        var notes = allNotes.findOne(q, function(err, item) {
            res.render('noteView.jade', {
                note: item
            })
        })

    })
}
