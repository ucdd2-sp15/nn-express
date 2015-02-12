module.exports = function(app) {
	
	app.get('/list/accounts', function(req, res) {

		// get the business collection
		var business = app.db.get('accounts')

		// execute the query to find those matched limiting to 20
		business.find({}, {
			limit: 20
		}, function(err, accs) {

			res.render('accountList.jade', {
				accounts: accs
			})
		})

	})
}