var _ = require('lodash')
module.exports = function(app) {
    app.get('/account/view/:id', function(req, res) {

        var id = parseInt(req.params.id);
        var accounts = app.db.get('accounts');
        var notes = app.db.get("notes");

        accounts.findOne({"id": id}, function(err, item){

            var noteList = notes.find({"account.id":id}, function(err, userNotes){

                res.render('accountView.jade', {
                        account: item,
                        images: userNotes
                })  
            })

        });

    })

}