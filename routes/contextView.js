module.exports = function(app) {

    app.get('/context/view/:id', function(req, res) {
	
	var id = req.params.id

	var context = {}
	for(i = 0; i< (app.data.contexts).length; i++){
		if(app.data.contexts[i].id == id){
		context = app.data.contexts[i]
		break
		}
	}

        res.render('contextView.jade', {
            context: context
        })
    })

}
