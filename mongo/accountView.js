module.exports = function(app) {

    app.get('/account/view/:id', function(req, res) {

        // get the business collection
        var accounts = app.db.get('accounts')
        var notes = app.db.get('notes')

         var q = {
            'id': parseInt(req.params.id)
        }

        accounts.findOne(q, function(err, item) {
          notes.find({'account.id': parseInt(item.id)}, function(err2, note){
              console.log("ACCOUNT: " + JSON.stringify(item))
              res.render('accountView.jade', {
                  account: item,
                  note: note
              })
            })
        })
    })
}
