const Order = require('../model/order')
const OrderHasProducts = require('../model/order_has_products')



module.exports = {

    findByStatus(req,res){
        const status=req.params.status
        Order.findByStatus(status,(err,data)=>{
            if (err) {
                return res.status(501).json({
                    success: false, //tipo de repuesta porque es una respuesta no exitosa
                    message: 'Hubo un error al momento de listar lass ordenes',
                    error: err
                });
            }

            for (const d of data) {
                if (typeof d.address === 'string' && typeof d.client === 'string' && typeof d.products === 'string') {
                    d.address = JSON.parse(d.address);
                    d.client = JSON.parse(d.client);
                    d.products = JSON.parse(d.products);
                    d.conductor = JSON.parse(d.conductor);
                }
            }
            

            return res.status(201).json(data)

        })
    },

    findByConductorAndStatus(req,res){
        const id_conductor = req.params.id_conductor
        const status=req.params.status
        Order.findByConductorAndStatus(id_conductor, status,(err,data)=>{
            if (err) {
                return res.status(501).json({
                    success: false, //tipo de repuesta porque es una respuesta no exitosa
                    message: 'Hubo un error al momento de listar lass ordenes',
                    error: err
                });
            }

            for (const d of data) {
                if (typeof d.address === 'string' && typeof d.client === 'string' && typeof d.products === 'string') {
                    d.address = JSON.parse(d.address);
                    d.client = JSON.parse(d.client);
                    d.products = JSON.parse(d.products);
                    d.conductor = JSON.parse(d.conductor);
                }
            }
            

            return res.status(201).json(data)

        })
    },

    // metodo para almacenar los datos del usuario y imagen
   async create(req, res) {

        //    voy  a recibir una categoria 

        const order = req.body // de esta manera capturo los datos que me envie el cliente



        //    utilizo el mondelo category para utilizar el metodo create pasandole una categorya 
        Order.create(order, async (err, id) => {



            if (err) {
                return res.status(501).json({
                    success: false, //tipo de repuesta porque es una respuesta no exitosa
                    message: 'Hubo un error al momento de crear la orden',
                    error: err
                });
            }

            for (const product of order.products) {
                await OrderHasProducts.create(id,product.id,product.quantity,(err,id_data)=>{
                    if (err) {
                        return res.status(501).json({
                            success: false, //tipo de repuesta porque es una respuesta no exitosa
                            message: 'Hubo un error con la creacion de los productos en la orden',
                            error: err
                        });
                    }


                });
            }



            //si no hubol un error vamos a retornar una respuesta faborable
            return res.status(201).json({
                success: true, //tipo de repuesta porque es una respuesta exitosa
                message: 'La orden se ha creado correctamente',
                data: `${id}` // voy a retornar el id de la categoria
            })





        })
    },


    updateToDispatched(req, res) {
        const order = req.body;

        Order.updateToDispatched(order.id, order.id_delivery, (err, id_order) => {
            if (err) {
                return res.status(501).json({
                    success: false, //tipo de repuesta porque es una respuesta no exitosa
                    message: 'Hubo un error al momento de actualizar la orden',
                    error: err
                });
            }

            return res.status(201).json({
                success: true, //tipo de repuesta porque es una respuesta exitosa
                message: 'La orden se ha actualizado correctamente',
                data: `${id_order}` 
            })
        })
    }
}


