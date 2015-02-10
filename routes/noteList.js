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
        var pageCount = length / perPage + 1
        var start = page - 3
        start = start <= 1 ? 2 : start
        var end = start + 6
        end = end > pageCount ? Math.floor(pageCount) : end
        var pageNumbers = _.range(start, end)
        var s = [1]
        var e = [Math.floor(pageCount)]
        pageNumbers = s.concat(pageNumbers)
        pageNumbers = pageNumbers.concat(e)

        res.render('noteList.jade', {
            notes: notes,
            pageNumbers: pageNumbers
        })
    })
}
