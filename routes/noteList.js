module.exports = function(app) {

    app.get('/note/list', function(req, res) {

        var perPage = req.query.perPage || 20
        var page = req.query.page || 1

        // TODO: calculate the right set of notes based on 'perPage' and 'page'
        var notes = app.data.notes.slice((page-1)*perPage,page*perPage)

        // TODO: calculate the correct array of page numbers for rendering the paginator
        var pageNumbers = [1, 2, 3, 4, 5]

        res.render('noteList.jade', {
            notes: notes,
            pageNumbers: pageNumbers
        })
    })
}
