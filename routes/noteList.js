module.exports = function(app) {

    app.get('/note/list', function(req, res) {

        var perPage = req.query.perPage || 20
        var page = req.query.page || 1
		var i=0;
		var j=20;
        // TODO: calculate the right set of notes based on 'perPage' and 'page'
        if (page ==1)
			{i=0;
			j=20;}
		if(page==2)
			{i=21;
			j=40;}
		if(page==3)
            {i=41;
            j=60;}
		if(page==4)
            {i=61;
            j=80;}
		if(page==5)
            {i=81;
            j=100;}
        var notes = app.data.notes.slice(i,j)
		console.log("notes " + JSON.stringify(notes))
 console.log("page" + page)
		console.log("perPage" + perPage)
        // TODO: calculate the correct array of page numbers for rendering the paginator
        var pageNumbers = [1, 2, 3, 4, 5]

        res.render('noteList.jade', {
            notes: notes,
            pageNumbers: pageNumbers
        })
    })
}
