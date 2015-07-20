var express = require('express');
var router = express.Router();

/* GET resume home page. */
router.get('/', function(req, res, next) {
  var viewModel = {
    titlePrefix: 'Resume',
    isResumeActive: true
  };
  res.render('resume', viewModel);
});

module.exports = router;
