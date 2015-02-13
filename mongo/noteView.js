module.exports = function(app) {
	var _ = require('lodash')
    app.get('/note/view/:id', function(req, res) {

        // TODO: get the correct note by id
        //var note = app.data.notes[req.params.id]
        //var notes = require('./routes/data/notes.json').data
        var note = app.db.get('notes')
        
        var q = {
            "_model_": "Note"
        }
        
        note.find(q, function(err, nt){
            var n = _.find(nt, function(np) { return np.id == req.params.id })
            res.render('noteView.jade', {
                note: n
            })
            
        })
    })

}