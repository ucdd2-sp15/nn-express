var _ = require('lodash');

module.exports = function(app) {

    app.get('/note/view/:id', function(req, res) {

        var note = _.find(app.data.notes, { 'id': parseInt(req.params.id) });

        res.render('noteView.jade', {
            note: note
        });
    });

}