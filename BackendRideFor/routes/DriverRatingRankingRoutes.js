const express = require('express');
const router = express.Router();
const driverRatingRankingController = require('../controllers/DriverRatingRankingController');

router.get('/driver-ranking', driverRatingRankingController.getDriverRankings);
router.get('/driver/:idDriver/ranking', driverRatingRankingController.getDriverRanking);
router.post('/driver-ratings', driverRatingRankingController.rateDriver);

module.exports = router;
