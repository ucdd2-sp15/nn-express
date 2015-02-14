module.exports = function(app) {

    app.get('/note/view/:id', function(req, res) {

        // get the business collection
        var notes = app.db.get('notes')

        var q = {
            'id': Number(req.params.id)
        }

        console.log(q)

        var note = notes.findOne(q, function(err, item) {

            res.render('noteView.jade', {
                note: item
            })
        })

    })
}