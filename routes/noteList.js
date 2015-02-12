var _ = require("lodash");

module.exports = function(app) {

    app.get('/note/list', function(req, res) {

        var perPage = req.query.perPage || 20
        var page = req.query.page || 1

        // TODO: calculate the right set of notes based on 'perPage' and 'page'
        var notes = _.filter(app.data.notes, function(x) { return x.medias.length > 0; }).slice(0,perPage);
        
        if (page != 1) {
            var newStart = perPage * (page - 1);
            var newEnd = page * perPage;
            notes = app.data.notes.slice(newStart,newEnd);
        }

        // TODO: calculate the correct array of page numbers for rendering the paginator
        var pageNumbers = [1, 2, 3, 4, 5]

        res.render('noteList.jade', {
            notes: notes,
            pageNumbers: pageNumbers
        })
    })
}