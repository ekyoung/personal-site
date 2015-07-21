var express = require('express');
var router = express.Router();

var tripRepository = require('../lib/trip-repository');

/* GET home page. */
router.get('/', function(req, res, next) {
  var viewModel = {
    titlePrefix: 'Trips',
    isTripsActive: true,
    trips: tripRepository.getAllTrips()
  };
  res.render('trips', viewModel);
});

module.exports = router;
