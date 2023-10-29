const db = require('../config/config');

const getDriverRankings = (req, res) => {
  db.query(`
    SELECT id_driver, AVG(rating) AS average_rating
    FROM driver_ratings
    GROUP BY id_driver
    ORDER BY AVG(rating) DESC
  `, (error, results) => {
    if (error) {
      console.error('Error al obtener el ranking de conductores:', error);
      res.status(500).json({ error: 'Error al obtener el ranking de conductores' });
    } else {
      res.json(results);
    }
  });
};

const getDriverRanking = (req, res) => {
  const idDriver = req.params.idDriver;

  db.query(`
    SELECT id_driver, AVG(rating) AS average_rating
    FROM driver_ratings
    WHERE id_driver = ?
    GROUP BY id_driver
  `, [idDriver], (error, results) => {
    if (error) {
      console.error('Error al obtener el ranking del conductor:', error);
      res.status(500).json({ error: 'Error al obtener el ranking del conductor' });
    } else {
      res.json(results[0]);
    }
  });
};

const rateDriver = (req, res) => {
  const { idDriver, userId, rating, comment } = req.body;

  db.query('INSERT INTO driver_ratings (id_driver, id_client, rating, comment) VALUES (?, ?, ?, ?)', [idDriver, userId, rating, comment], (error, results) => {
    if (error) {
      console.error('Error al registrar la calificación del conductor:', error);
      res.status(500).json({ error: 'Error al registrar la calificación del conductor' });
    } else {
      res.json({ success: true });
    }
  });
};

module.exports = {
  getDriverRankings,
  getDriverRanking,
  rateDriver
};
