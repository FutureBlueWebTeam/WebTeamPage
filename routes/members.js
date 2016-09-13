var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('members', {
		members : 'active', // Add 'active' class to nav
        title : "Members : IBM Future Blue Web Team"
    });
});

module.exports = router;