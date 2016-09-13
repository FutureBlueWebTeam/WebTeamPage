var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('contact', {
		contact : 'active', // Add 'active' class to nav
        title : "Contact : IBM Future Blue Web Team"
    });
});

module.exports = router;