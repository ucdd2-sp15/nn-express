module.exports = function(app) {

    app.get('/note/view/:id', function(req, res) {
        var accounts = app.db.get('accounts');
        var notes = app.db.get('notes');
        accounts.findOne(
        {'id': parseInt(req.params.id)},
        function(err, account) {
            notes.findOne({'account.id': parseInt(account.id)}, function(err, note){
                res.render('noteView.jade', {
                    note: note
                });
            });
        });
    });
}

