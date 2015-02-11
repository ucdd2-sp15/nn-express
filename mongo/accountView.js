module.exports = function(app) {

    app.get('/account/view/:id', function(req, res) {
	
		var id = req.params.id

		var account = {}
		for(i = 0; i< (app.data.accounts).length; i++){
			if(app.data.accounts[i].id == id){
			account = app.data.accounts[i]
			break
			}
		}

	    	var id = req.params.id
	        var notes = app.data.notes.filter(function(item){
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
