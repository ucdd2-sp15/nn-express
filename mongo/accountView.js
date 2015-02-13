module.exports = function(app){

    app.get('/account/view/:id', function(req, res) {

        // get the accounts collection
        var accounts = app.db.get('accounts')
		var notes = app.db.get('notes')

		//query to get account with matching id
        var q = {
            'id': Number(req.params.id)
        }

        var account = accounts.findOne(q, function(err, account) {
        	
        	//query to get notes whose author (username) matches the current account username
        	var q2 = {
        		'account.username': account.username
        	}

        	var note = notes.find(q2, function(err, notes){
	            res.render('accountView.jade', {
	                account: account,
	                notes: notes
	            })        		
        	})
        })
    })
}
