var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
	res.render('index', {
		index : 'active', // Add 'active' class to nav
		title : "IBM Future Blue Web Team"
	});
});

module.exports = router;