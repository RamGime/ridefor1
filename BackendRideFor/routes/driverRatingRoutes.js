    const express = require('express');
    const router = express.Router();

    // Importa el controlador que manejará las calificaciones de conductores
    const driverRatingController = require('../controllers/driverRatingController');

    // Ruta para guardar la calificación de un conductor
    router.post('/api/driver-ratings', driverRatingController.saveDriverRating);

    module.exports = router;
