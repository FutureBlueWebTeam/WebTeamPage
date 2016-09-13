var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
	res.render('about', {
		about : 'active', // Add 'active' class to nav
		title : "About : IBM Future Blue Web Team"
	});
});

module.exports = router;