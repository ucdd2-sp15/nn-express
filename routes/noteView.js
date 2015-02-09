module.exports = function(app) {

    app.get('/note/view/:id', function(req, res) {
        var id = req.params.id
        var note = app.data.notes[id]

        res.render('noteView.jade', {
            note: note
        })
    })

}