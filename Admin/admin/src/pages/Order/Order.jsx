import React, { useEffect , useState } from 'react';
import './Order.css'
import axios from 'axios'
import {toast} from 'react-toastify'
import { asset } from '../../assets/asset';


const Order = ({url}) => {

  const[order , setOrder] = useState([]);

  const fetchAllOrders = async () => {
    const response = await axios.get(url+"/api/order/list");
    if(response.data.success){
      setOrder(response.data.data)
      console.log(response.data.data);
      
    }else{
      toast.error("Error")
    }


  }
  const statusHandler = async (Event , orderId) =>{
    //console.log(Event, orderId);
    
    const response = await axios.post(url+"/api/order/status",{
      orderId,
      status:Event.target.value
      });
      if(response.data.success){
        toast.success("Order status updated successfully");
        fetchAllOrders();
      }
  }
  useEffect(()=>{
    fetchAllOrders()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  } , []);

  return (
    <div className='order add'>
      <h3>Order Page</h3>
      <div className="order-list">
        {order.map((order , index)=>(
          <div  key = {index}className="order-item">
            <img src={asset.parcel_icon} alt="" />
            <div>
              <p className='order-item-food'>
                {order.Items.map((item,index)=>{
                  if(index===order.Items.length-1){
                    return item.name+" x "+item.quantity
                  }else{
                     return item.name+" x "+item.quantity+" , "
                  }
                })}

              </p>
              <p className='order-item-name'>
                {order.address.firstName+" "+order.address.lastName}</p>
                <div className="order-item-address">
                  <p>{order.address.street+" , "}</p>
                  <p>{order.address.city+" , "+order.address.state+" ," +order.address.country+" , "+order.address.zip+","}</p>
                </div>
                 <p className='order-item-phone'>{order.address.phone}</p>

              
            </div>
               <p>Items:{order.Items.length}</p> 
               <p>Amount:${order.amount}</p>
               <select onChange={(Event)=>statusHandler(Event , order._id)} value={order.status}>
                <option value="Food Processing">Food Processing</option>
                <option value="Out For Delivery">Out For Delivery</option>
                <option value="Delivered">Delivered</option>
               </select>
          </div>
        ))}
      </div>
      
    </div>
  )
}

export default Order
