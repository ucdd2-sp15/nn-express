var _ = require('lodash')

module.exports = function(app) {

    app.get('/note/list', function(req, res) {

        var perPage = req.query.perPage || 20
        var page = req.query.page || 1

        // TODO: calculate the right set of notes based on 'perPage' and 'page'
        var notes = _.filter(app.data.notes, function(n) {
            return n.medias && n.medias.length > 0
        })
        var length = notes.length
        notes = notes.slice((page - 1) * perPage, page * perPage)

        // TODO: calculate the correct array of page numbers for rendering the paginator
        var pageNumbers = _.range(1, length/perPage + 1)

        res.render('noteList.jade', {
            notes: notes,
            pageNumbers: pageNumbers
        })
    })
}
