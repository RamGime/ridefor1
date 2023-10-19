import React,{useState, useContext} from 'react'
import { GetByStatusOrderUseCase } from '../../../../../../../Domain/useCases/order/GetByStatusOrder'
import { Order } from '../../../../../../../Domain/entities/Order'
import { OrderContext } from '../../../../../../context/OrderContext'



export const ConductorOrderListViewModel = () => {
  
  // const [orders,setOrders]=useState<Order[]>([])
  const {ordersDispatched, ordersEmpresa, ordersOnTheWay, ordersPayed, getOrderByStatus} = useContext(OrderContext)

  const getOrders = async(status:string)=>{
    
    const result= await getOrderByStatus(status);
    // setOrders(result)
    console.log('ORDENES' + JSON.stringify(result,null,3))
  }

  return {
    ordersDispatched,
    ordersEmpresa,
    ordersOnTheWay,
    ordersPayed,
    getOrders
  }
}

export default ConductorOrderListViewModel