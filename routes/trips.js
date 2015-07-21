var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var viewModel = {
    titlePrefix: 'Trips',
    isTripsActive: true
  };
  res.render('trips', viewModel);
});

module.exports = router;
