const db = require('../config/config'); // Importa tu configuración de base de datos

// Función para guardar una calificación de conductor
const saveDriverRating = (req, res) => {
    const { driverId, userId, rating, comment } = req.body;
    
    const query = 'INSERT INTO driver_ratings (driver_id, user_id, rating, comment) VALUES (?, ?, ?, ?)';
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
