var _ = require('lodash');
module.exports = function(app) {

    app.get('/account/view/:id', function(req, res) {
        var account = app.db.get('accounts');
        var notes = app.db.get('notes');
        
        var q = {
            "_model_": "Account",
        }
        
        var q2 = {
            "_model_": "Note"
        }
        
        
        notes.find(q2, function(err, note) {
        
            account.find(q, function(err, accts) {
            var acc = _.find(accts, function(accts) { return accts.id == req.params.id}) 
        
                res.render('accountView.jade', {
                        account: acc,
                        notes: note
                })
        
            
                
            })
        })
    })
}
