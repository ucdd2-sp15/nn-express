var _ = require("lodash")
module.exports = function(app) {

    app.get('/context/list', function(req, res) {

        var contexts = app.db.get('contexts')
        
        var q = {
            '_model_': 'Context'
        }
        
        contexts.find(q, function(err, conts) {
        
        var sites = []
        
        for (i = 0; i < conts.length; i++){
            if (!(_.includes(sites, conts[i].site.description))){
                sites.push(conts[i].site.description)
            }
        }

        res.render('contextList.jade', {
            contexts: conts,
            sites: sites
        })
    })
  })

}