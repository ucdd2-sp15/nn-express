module.exports = function(app) {

    app.get('/context/list', function(req, res) {

        // get the context collection
        var contexts = app.db.get('contexts')

        // execute the query to find those matched
        contexts.find(
            {'_model_': { $in: ["Context"] }},
            { },        //{ limit: 20 }, 
            function(err, items) {
                var descriptions = {};
                items.forEach(function(item) {
                    if( !descriptions[item.site.description] ) {
                        descriptions[item.site.description] = [];
                    }
                    descriptions[item.site.description].push(item);
                });
                //console.log(descriptions);
                res.render('contextList.jade', {
                    contexts: descriptions
                })
            }
        )
    })
}
