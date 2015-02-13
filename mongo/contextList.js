module.exports = function(app){
    app.get('/context/list', function(req, res) {

        // get the accounts collection
        var contexts = app.db.get('contexts')

        // compose a query to look up accounts whose '_model_' field contains the word 'Account'
        var q = {
            '_model_': 'Context'
        }


        // execute the query
        contexts.find(q, function(err, contexts) {

            var reOrg = {};
            console.log(contexts[0].site.description)
            // Get all sites
            for (var i = 0 ; i < contexts.length ; i++){
                var site = contexts[i].site.description;
                if(!reOrg[site]){
                    reOrg[site] = [];
                }
                reOrg[site].push(contexts[i])
            }

            res.render('contextList.jade', {
                contexts: reOrg
            })
        })

    })
}
