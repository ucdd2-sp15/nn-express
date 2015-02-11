module.exports = function(app) 
{

    app.get('/context/list', function(req, res) 
    {

        var contexts = app.db.get('contexts')
        var organizations=[]     
        contexts.find({}, function(err, cont)
        {
            for(var i = 0; i < cont.length; i++)
            {
                if (cont[i].site['description'])
                {
                    if(!(~organizations.indexOf(cont[i].site['description'])))
                    {
                        organizations.push(cont[i].site['description'])
                    }
                }
            }
            res.render('contextList.jade', 
            {
                contexts: cont,
                organizations: organizations
            })
        })

    })
}