module.exports = function(app) {
	var _ = require('lodash')
    app.get('/note/view/:id', function(req, res) {

        // TODO: get the correct note by id
        var note = app.data.notes[req.params.id]

        res.render('noteView.jade', {
            note: note
        })
    })

}