var express = require('express');
var router = express.Router();

var tripRepository = require('../lib/trip-repository');

/* GET home page. */
router.get('/', function(req, res, next) {
  var viewModel = {
    titlePrefix: 'Trips',
    isTripsActive: true
  };
  res.render('trips/all-trips', viewModel);
});

/* GET gallery page. */
router.get('/:tripId', function(req, res, next) {
  var tripId = req.params.tripId;

  var viewModel = {
    titlePrefix: 'Trips',
    isTripsActive: true,
    trip: tripRepository.getTrip(tripId)
  };
  res.render('trips/gallery', viewModel);
});

/* GET slide show page. */
router.get('/:tripId/slide-show', function(req, res, next) {
  var tripId = req.params.tripId;

  var viewModel = {
    titlePrefix: 'Trips',
    isTripsActive: true,
    trip: tripRepository.getTrip(tripId)
  };
  res.render('trips/slide-show', viewModel);
});

module.exports = router;
