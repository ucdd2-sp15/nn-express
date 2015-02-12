module.exports = function(app) {
	
	app.get('/list/contexts', function(req, res) {

		// get the contexts collection
		var dbcont = app.db.get('contexts')


		// execute the query to find those matched limiting to 20
		dbcont.find({}, {
			limit: 20
		}, function(err, conts) {
			var model = {};

       		 conts.forEach(function(item){

        	if(!model[item.site.description])
        		model[item.site.description] = [];

        	model[item.site.description].push(item);

        	});

			res.render('contextList.jade', {
				contexts: model
			})
		})

	})
}