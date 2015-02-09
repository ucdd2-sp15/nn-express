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

        res.render('accountView.jade', {
            account: account
        })
    })

}
