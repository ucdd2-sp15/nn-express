module.exports = function(app) {

    app.get('/account/view/:id', function(req, res) {
	
		var id = req.params.id
		var accountsData = app.db.get('accounts')
		var notesData = app.db.get('notes')

		var account = {}
		for(i = 0; i< (accountsData).length; i++){
			if(accountsData[i].id == id){
			account = accountsData[i]
			break
			}
		}

	    	var id = req.params.id

	        var notes = notesData.filter(function(item){
	            if(item.account){
	            	if(item.account.id){
	            		if(item.account.id == id) return item
	            	}
	            }
	        })

	        res.render('accountView.jade', {
	            account: account,
	            notes: notes
	        })
    })

}
