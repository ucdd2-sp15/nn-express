module.exports = function(app) {

    app.get('/context/list', function(req, res) {

        // get the context collection
        var contexts = app.db.get('contexts');

        // execute the query to find those matched
        contexts.find(
            {'_model_': { $in: ["Context"] }},
            { },        //{ limit: 20 }, 
            function(err, items) {
            res.render('contextList.jade', {
                contexts: {
                    items: items
                    //description: description
                }
            })
        })
    })
}
