module.exports = function(app) {

    app.get('/note/view/:id', function(req, res) {

        // TODO: get the correct note by id
        var note = app.data.notes[req.params.id -1]

        res.render('noteView.jade', {
            note: note
        })
    })

}