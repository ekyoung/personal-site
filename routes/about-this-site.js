var express = require('express');
var router = express.Router();

/* GET about this site page. */
router.get('/', function(req, res, next) {
  var viewModel = {
    titlePrefix: 'About This Site',
    isAboutActive: true
  };
  res.render('about-this-site', viewModel);
});

module.exports = router;
