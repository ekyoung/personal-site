var express = require('express');
var router = express.Router();

/* GET resume page. */
router.get('/', function(req, res, next) {
  var viewModel = {
    titlePrefix: 'Resume',
    isResumeActive: true
  };
  res.render('resume', viewModel);
});

module.exports = router;
