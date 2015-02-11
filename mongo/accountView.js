module.exports = function(app) {

    app.get('/account/view/:id', function(req, res) {
	
		var id = req.params.id
		var accountsData = app.db.get('accounts')
		var notesData = app.db.get('notes')

		var q = {
            '_id': req.params.id
        }
        var p = {
        	'account' : {'_id':id}
        }
		var account = accountsData.findOne(q, function(err, acc) {
        	notesData.find(p, function(err, notes) {
        		console.log(acc)
            	console.log('WWWWWWWWWWWWWWW')
            	console.log(notes)
            	res.render('accountView.jade', {
	            	account: acc,
	            	notes: notes
	        	})
        	})
        })

    })

}
