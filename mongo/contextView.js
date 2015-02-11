module.exports = function(app) 
{
    app.get('/context/view/:id', function(req, res) 
    {
	
	    var id = app.db.get('contexts')

		var i = {
			'_id':req.params.id
			}

		var context = id.findOne(i, function(err, contexts){
	        res.render('contextView.jade', {
	            context: contexts
	        })
	    })
	})
}
