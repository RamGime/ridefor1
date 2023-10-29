// driverRatingRoutes.js

// const express = require('express');
// const router = express.Router();
// const driverRatingController = require('../controllers/driverRatingController');

// // Ruta para guardar una calificación de conductor (POST /api/driver-ratings)
// router.post('/api/driver-ratings', driverRatingController.saveDriverRating);

// module.exports = router;

const express = require('express');
const router = express.Router();
const driverRatingController = require('../controllers/driverRatingController');

// Ruta para guardar una calificación de conductor (POST /api/driver-ratings)
router.post('/driver-ratings', driverRatingController.saveDriverRating);

module.exports = router;
