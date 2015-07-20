var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var viewModel = {
    titlePrefix: 'Welcome',
    isHomeActive: true
  };
  res.render('index', viewModel);
});

module.exports = router;
