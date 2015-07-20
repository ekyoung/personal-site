var express = require('express');
var router = express.Router();

/* GET resume home page. */
router.get('/', function(req, res, next) {
  res.render('resume', { titlePrefix: 'Resume' });
});

module.exports = router;
