var _ = require('lodash')
module.exports = function(app) {

    app.get('/context/view/:id', function(req, res) {

        var context = app.data.contexts

        var rs = _.find(context, function(chr){
        	if (chr.id == Number(req.params.id))
        		return true
        	else
        		return false
        });

        res.render('contextView.jade', {
            context: rs
        })
    })

}