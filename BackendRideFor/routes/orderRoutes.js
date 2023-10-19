
// traigo el controlador de categorias de empresas
const OrdersController=require('../controllers/ordersController')

// voy a traer passport para asegurara las rutas , el cliente de manra obligaria, nos tiene que enviar el token de session

const passport =require('passport')


// voy a exportar un metodo el cual va a recibir un objeto app y un objeto upload  que me vaa permitir subir las imagenes

// metodo para crear categorias 

module.exports=(app,upload)=>{
   
    
    app.get('/api/orders/findByStatus/:status',OrdersController.findByStatus )
    app.get('/api/orders/findByConductorAndStatus/:id_conductor/:status',OrdersController.findByConductorAndStatus )
    app.post('/api/orders/create',OrdersController.create )
    app.put('/api/orders/updateToDispatched',OrdersController.updateToDispatched )
    
}
