module.exports = function(app) {

    app.get('/context/view/:id', function(req, res) 
    {
	
	    var id = app.db.get('contexts')

		var i = {
			'_id':req.params.id
			}

		/*for(i = 0; i< (app.data.contexts).length; i++){
			if(app.data.contexts[i].id == id){
			context = app.data.contexts[i]
			break
			}
		}*/
		/*contexts = {}
		context.find({}, function(err, cont)
        {
            for(var i = 0; i < cont.length; i++)
            {
                if (cont[i].id == req.params.id)
                {
                    contexts = cont[i]
                    break
                }
            }
        })
        console.log(contexts)
        res.render('contextView.jade', {
	            context: contexts
	        })*/
		var context = id.findOne(i, function(err, contexts){
	        res.render('contextView.jade', {
	            context: contexts
	        })
	    })
	})
}
