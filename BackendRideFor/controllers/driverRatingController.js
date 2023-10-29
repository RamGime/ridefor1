// // driverRatingController.js

// const db = require('../config/config');

// const saveDriverRating = (req, res) => {
//   const { driverId, userId, rating, comment } = req.body;
  
//   console.log('Valores recibidos:', driverId, userId, rating, comment);
  
//   // Corrige el nombre de la columna a 'id_driver' en la consulta SQL
//   const query = 'INSERT INTO driver_ratings (id_driver, id_client, rating, comment) VALUES (?, ?, ?, ?)';
//   const values = [driverId, userId, rating, comment];

//   db.query(query, values, (error, results) => {
//     if (error) {
//       console.error('Error al guardar la calificación:', error);
//       res.status(500).json({ message: 'Error al guardar la calificación.' });
//     } else {
//       res.status(200).json({ message: 'Calificación guardada correctamente.' });
//     }
//   });
// };

// module.exports = { saveDriverRating };
// driverRatingController.js

const db = require('../config/config');

const saveDriverRating = (req, res) => {
  const { driverId, userId, rating, comment } = req.body;

  if (!driverId || !userId || !rating) {
    return res.status(400).json({ error: 'Los campos driverId, userId y rating son obligatorios.' });
  }

  const query = 'INSERT INTO driver_ratings (id_driver, id_client, rating, comment) VALUES (?, ?, ?, ?)';
  const values = [driverId, userId, rating, comment];

  db.query(query, values, (error, results) => {
    if (error) {
      console.error('Error al guardar la calificación:', error);
      res.status(500).json({ message: 'Error al guardar la calificación.' });
    } else {
      res.status(200).json({ message: 'Calificación guardada correctamente.' });
    }
  });
};

module.exports = { saveDriverRating };
