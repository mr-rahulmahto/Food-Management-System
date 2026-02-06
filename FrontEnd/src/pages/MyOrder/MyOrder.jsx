import React, { useState, useContext } from 'react'
import './MyOrder.css'
import { StoreContext } from '../../Context/StoreContext';
import axios from 'axios';
import { useEffect } from 'react';
import { Comp } from '../../assets/Comp';

const MyOrder = () => {

    const{url , token} = useContext(StoreContext);
    const[data , setData]= useState([]);

    const fetchOrders = async () =>{
        const response = await axios.post(url+"/api/order/userorders" , {} , {headers:{token}});
        setData(response.data.data);
        console.log(response.data.data);
        
    }

    useEffect(() => {
     if (token){
        fetchOrders();
     }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    } , [token])
    //order status Items
  return (
    <div className='my-orders'>
        <h1>My Orders</h1>  
        <div className="container">
            {data.map((order, index)=>{
                return(
                    <div key={index} className="my-orders-order">
                        <img src={Comp.parcel_icon} alt="order" />
                        <p>{order.Items.map((item ,index)=>{
                           if(index==order.Items.length-1){
                            return item.name+" x "+item.quantity
                           } else{
                            return item.name+" x "+item.quantity+", "
                           }
                        })}</p> 
                        
                        <p>${order.amount}.00</p>
                        <p>Items:{order.Items.length}</p>
                        <p><span>&#x25cf;</span><b>{order.status}</b></p>
                        <button onClick={fetchOrders}>Track Order</button>


                    </div>
                )
            })}
        </div>
        
      
    </div>
  )
}

export default MyOrder
