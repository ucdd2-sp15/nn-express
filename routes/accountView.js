module.exports = function(app) {

    app.get('/account/view/:id', function(req, res) {
    	var id = req.params.id
        var account = app.data.accounts[5]
        var notes = app.data.notes.filter(function(item){
            if(item.account){
            	if(item.account.id){
            		if(item.account.id == id) return item
            	}
            }
        })
        console.log(notes)
        res.render('accountView.jade', {
            account: account,
            notes: notes
        })
    })

}