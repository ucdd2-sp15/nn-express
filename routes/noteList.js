var _ = require('lodash')
module.exports = function(app) {

    app.get('/note/list', function(req, res) {

        var perPage = req.query.perPage || 20
        var page = req.query.page || 1
        var start = (page-1)*perPage
        var end = parseFloat(start)+parseFloat(perPage)
        // TODO: calculate the right set of notes based on 'perPage' and 'page'
        var notes = app.data.notes.slice(start,end)
        console.log(start)
        console.log(end)
        var total = app.data.notes.length
        console.log(total)
        var pagenumber = Math.ceil(total/perPage)
        console.log(pagenumber)
        // TODO: calculate the correct array of page numbers for rendering the paginator
        var pageNumbers = _.range(1, pagenumber)

        res.render('noteList.jade', {
            notes: notes,
            pageNumbers: pageNumbers
        })
    })
}