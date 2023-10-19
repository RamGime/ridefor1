// const express=require('express');
// const app=express();
// const http=require('http')
// const server =http.createServer(app)
// const morgan=require('morgan')
// const cors=require('cors')
// const passport=require('passport')
// const multer=require('multer')



// // voy a importar todas las rutas
// // *******
// const usersRoutes=require('./routes/userRoutes')
// const empresasRoutes=require('./routes/categoryRoutes');
// const productRoutes=require('./routes/productRoutes');
// const addressRoutes=require('./routes/addressRoutes');
// const ordersRoutes=require('./routes/orderRoutes');


// // ********



// const port=process.env.PORT || 3000;
// app.use(morgan('dev'));
// app.use(express.json())
// app.use(express.urlencoded({extended:true}))

// app.use(cors());
// // metodos 
// app.use(passport.initialize())
// app.use(passport.session())


// // vamos a ejecutar la funcion pasandole ese objeto passport
// require('./config/passport')(passport)

// app.disable('x-powered-by')  //configuracion para la seguridad



// app.set('port',port);

// const upload = multer({
//     storage:multer.memoryStorage()
// })


// // llamado a las rutas *******************

// // la ruta recibe un parametro que es la apliccion app
// usersRoutes(app,upload);
// empresasRoutes(app,upload);
// addressRoutes(app);
// productRoutes(app,upload);
// ordersRoutes(app);





// server.listen(3000,'192.168.56.1' || 'localhost', function(){

//     console.log('aplicacion de Node.js iniciada en el puerto  ' + port )

// })

// app.get('/',(req,res)=>{

// res.send('ruta raiz del backend')

// })

// app.get('/test',(req,res)=>{

// res.send('esta es la ruta test')

// })

// // manejo de error  

// app.use((err,req,res,next)=>{
//     console.log(err)
//     res.status(err.status || 500).send(err.stack)


// })


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
const driverRatingRoutes = require('./routes/driverRatingRoutes'); // Nueva importación

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

// Agrega las rutas de calificaciones de conductores a tu aplicación
app.use(driverRatingRoutes); // Usar las rutas de calificaciones de conductores

server.listen(3000, '192.168.217.224' || 'localhost', function () {
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
