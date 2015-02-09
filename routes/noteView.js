module.exports = function(app) {

    app.get('/note/view/:id', function(req, res) {

        // TODO: get the correct note by id
        var id = req.params.id
        //var note = app.data.notes.id
       /* function findById(element){
        	if(element.id == id)
        		return element
        }*/
        var note = {}
        for(i = 0; i < (app.data.notes).length; i++){
        	if((app.data.notes[i]).id == id){
        		note=app.data.notes[i]
        		break
        	}
        }
        //var note = (app.data.notes).find(findById)

        res.render('noteView.jade', {
            note: note
        })
    })

}