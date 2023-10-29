
// const express = require('express');
// const app = express();
// const http = require('http');
// const server = http.createServer(app);
// const morgan = require('morgan');
// const cors = require('cors');
// const passport = require('passport');
// const multer = require('multer');

// // Importa las rutas existentes (usersRoutes, empresasRoutes, etc.)
// const usersRoutes = require('./routes/userRoutes');
// const empresasRoutes = require('./routes/categoryRoutes');
// const productRoutes = require('./routes/productRoutes');
// const addressRoutes = require('./routes/addressRoutes');
// const ordersRoutes = require('./routes/orderRoutes');

// // Importa las rutas de calificaciones de conductores
// const driverRatingRoutes = require('./routes/driverRatingRoutes'); // Nueva importación

// const port = process.env.PORT || 3000;
// app.use(morgan('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.use(cors());
// app.use(passport.initialize());
// app.use(passport.session());

// // Configuración de multer
// const upload = multer({
//   storage: multer.memoryStorage(),
// });

// // Llamado a las rutas existentes
// usersRoutes(app, upload);
// empresasRoutes(app, upload);
// addressRoutes(app);
// productRoutes(app, upload);
// ordersRoutes(app);

// // Agrega las rutas de calificaciones de conductores a tu aplicación
// app.use(driverRatingRoutes); // Usar las rutas de calificaciones de conductores

// server.listen(port, '192.168.0.157' || 'localhost', function () {
//   console.log('Aplicación de Node.js iniciada en el puerto ' + port);
// });

// app.get('/', (req, res) => {
//   res.send('Ruta raíz del backend');
// });

// app.get('/test', (req, res) => {
//   res.send('Esta es la ruta de prueba');
// });

// // Manejo de errores
// app.use((err, req, res, next) => {
//   console.error(err);
//   res.status(err.status || 500).send(err.stack);
// });7

const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const morgan = require('morgan');
const cors = require('cors');
const passport = require('passport');
const multer = require('multer');

// Importa las rutas existentes (usersRoutes, empresasRoutes, etc.)
const usersRoutes = require('./routes/userRoutes');
const empresasRoutes = require('./routes/categoryRoutes');
const productRoutes = require('./routes/productRoutes');
const addressRoutes = require('./routes/addressRoutes');
const ordersRoutes = require('./routes/orderRoutes');

// Importa las rutas de calificaciones de conductores
const driverRatingRoutes = require('./routes/driverRatingRoutes'); // Rutas para calificaciones de conductores
const driverRatingRankingRoutes = require('./routes/DriverRatingRankingRoutes'); // Nuevas rutas de clasificación de conductores

const port = process.env.PORT || 3000;
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(passport.initialize());
app.use(passport.session());

// Configuración de multer
const upload = multer({
  storage: multer.memoryStorage(),
});

// Llamado a las rutas existentes
usersRoutes(app, upload);
empresasRoutes(app, upload);
addressRoutes(app);
productRoutes(app, upload);
ordersRoutes(app);

// Agrega las rutas de calificaciones de conductores a tu aplicación sin /api
app.use(driverRatingRoutes); // Usar las rutas de calificaciones de conductores
app.use(driverRatingRankingRoutes); // Usar las nuevas rutas de clasificación de conductores

server.listen(port, '192.168.0.157' || 'localhost', function () {
  console.log('Aplicación de Node.js iniciada en el puerto ' + port);
});

app.get('/', (req, res) => {
  res.send('Ruta raíz del backend');
});

app.get('/test', (req, res) => {
  res.send('Esta es la ruta de prueba');
});

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).send(err.stack);
});
