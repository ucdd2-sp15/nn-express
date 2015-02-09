module.exports = function(app) {

    app.get('/context/list', function(req, res) {

        var contexts = app.data.contexts

        var model = {};

        contexts.forEach(function(item){

        	if(!model[item.site.description])
        		model[item.site.description] = [];

        	model[item.site.description].push(item);

        });

        res.render('contextList.jade', {
            contexts: model
        })
    })
}