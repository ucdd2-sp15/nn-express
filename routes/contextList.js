var _ = require("lodash")
module.exports = function(app) {

    app.get('/context/list', function(req, res) {

        var contexts = app.data.contexts
        var sites = []
        
        for (i = 0; i < contexts.length; i++){
            if (!(_.includes(sites, contexts[i].site.description))){
                sites.push(contexts[i].site.description)
            }
        }

        res.render('contextList.jade', {
            contexts: contexts,
            sites: sites
        })
    })

}