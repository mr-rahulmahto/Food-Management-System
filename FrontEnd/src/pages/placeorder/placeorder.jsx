import React, { useContext, useEffect } from 'react'
import './placeorder.css';
import { useState } from 'react';
import { StoreContext } from '../../Context/StoreContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import rupeeIcon from '../../assets/rupee.png';
import mobilePaymentIcon from '../../assets/mobile-payment.png';

const PlaceOrder = () => {
  const { getTotalCartAmount, token, food_list, cartItems, url } = useContext(StoreContext)

  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    phone: ''
  })

  const [payment, setPayment] = useState("cod") // ✅ payment method state

  const onChangeHandler = (Event) => {
    const name = Event.target.name;
    const value = Event.target.value;
    setData(data => ({ ...data, [name]: value }))
  }

  const placeOrder = async (Event) => {
    Event.preventDefault();
    let orderItems = []
    food_list.map((Item) => {
      if (cartItems[Item._id] > 0) {
        let itemInfo = Item;
        itemInfo["quantity"] = cartItems[Item._id];
        orderItems.push(itemInfo)
      }
    });

    let orderData = {
      address: data,
      Items: orderItems,
      amount: getTotalCartAmount() + 9,
      payment: payment   // ✅ send payment method to backend
    }

    if (payment === "cod") {
      // ✅ COD — no Stripe, just place order
      let response = await axios.post(url + "/api/order/place", orderData, { headers: { token } });
      if (response.data.success) {
        navigate('/myorders')  // redirect to orders page
        alert("Order placed successfully! Pay on delivery.");
      } else {
        alert(response.data.message || "Error placing order");
      }
    } else {
      // Online payment via Stripe
      let response = await axios.post(url + "/api/order/place", orderData, { headers: { token } });
      if (response.data.success) {
        const { session_url } = response.data;
        window.location.replace(session_url);
      } else {
        alert(response.data.message || "Error placing order");
      }
    }
  }

  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/cart')
    } else if (getTotalCartAmount() === 0) {
      navigate('/cart')
    }
  }, [token, getTotalCartAmount, navigate])

  return (
    <div>
      <form onSubmit={placeOrder} className='place-order'>
        <div className="place-order-left">
          <p className='title'>Delivery Information</p>
          <div className="multi-field">
            <input required name='firstName' onChange={onChangeHandler} value={data.firstName} type="text" placeholder='First Name' />
            <input required name='lastName' onChange={onChangeHandler} value={data.lastName} type="text" placeholder='Last Name' />
          </div>
          <input required name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Email Address' />
          <input required name='street' onChange={onChangeHandler} value={data.street} type="text" placeholder='Street' />
          <div className="multi-field">
            <input required name='city' onChange={onChangeHandler} value={data.city} type="text" placeholder='City' />
            <input required name='state' onChange={onChangeHandler} value={data.state} type="text" placeholder='State' />
          </div>
          <div className="multi-field">
            <input required name='zip' onChange={onChangeHandler} value={data.zip} type="text" placeholder='Pin Code' />
            <input required name='country' onChange={onChangeHandler} value={data.country} type="text" placeholder='Country' />
            {/* ✅ Fixed: was data.cartItems, now data.country */}
          </div>
          <div>
            <input required name='phone' onChange={onChangeHandler} value={data.phone} type="text" placeholder='Phone no.' />
          </div>
        </div>

        <div className="place-order-right">
          <div className="cart-total">
            <h2>Cart Total</h2>
            <div>
              <div className="cart-total-details">
                <p>Subtotal</p>
                <p>{getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Delivery</p>
                <p>{getTotalCartAmount() === 0 ? 0 : 9}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <b>Total</b>
                <b>{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 9}</b>
              </div>
            </div>

            {/* ✅ Payment Method Selection */}
            <div className="payment-method">
              <p className="title">Payment Method</p>
              <div className="payment-options">

                <div
                  onClick={() => setPayment("cod")}
                  className={`payment-option ${payment === "cod" ? "selected" : ""}`}
                >
                  <img src={rupeeIcon} alt="Cash on Delivery" />
                  <p>Cash On Delivery</p>
                </div>

                <div
                  onClick={() => setPayment("stripe")}
                  className={`payment-option ${payment === "stripe" ? "selected" : ""}`}
                >
                  <img src={mobilePaymentIcon} alt="Online Payment" />
                  <p>Online Payment</p>
                </div>

              </div>
            </div>

            <button type='submit'>Proceed To Payment</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default PlaceOrder