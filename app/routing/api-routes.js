

module.exports = function (app) {

	app.get("/api/friends", function(req, res) {
		console.log(req);
		res.json("5555555");
	});

	app.post("/api/friends", function(req, res) {
		console.log(req.body);

		friendsArray.push(req.body);
	});
}