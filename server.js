const express = require("express"),
	serveStatic = require("serve-static");

var app = express()
	.use(serveStatic(__dirname + "/public"))
	.listen(7000, () => {
		console.log("................................................");
		console.log(". JAVASCRIPT MENUS SERVER RUNNING ON PORT 7000 .")
		console.log("................................................");
	})