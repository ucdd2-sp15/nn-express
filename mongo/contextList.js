module.exports = function(app) {

    app.get('/context/list', function(req, res) {

        var contexts = app.data.contexts
        var organizations=[]
        for(i = 0; i < contexts.length; i++){
        	if(contexts[i].site["description"]){
	       		if(!(~organizations.indexOf(contexts[i].site["description"]))){
	       			organizations.push(contexts[i].site["description"])
	       		}
	       	}
        }
        res.render('contextList.jade', {
            contexts: contexts,
            organizations: organizations
        })
    })

}