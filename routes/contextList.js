module.exports = function(app) {

    app.get('/context/list', function(req, res) {

        var contexts = app.data.contexts
        var descriptions = {}

        for (i in contexts){
          if (!descriptions[contexts[i].site.description]){
            descriptions[contexts[i].site.description] = []
          }
          descriptions[contexts[i].site.description].push(contexts[i])
        }

        console.log(descriptions)
        res.render('contextList.jade', {
            contexts: descriptions
        })
    })

}
