import React, { useContext } from "react";
import "./cart.css";
import { StoreContext } from "../../Context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, food_list, removeFromCart ,getTotalCartAmount ,url } = useContext(StoreContext);
  const Navigate = useNavigate();
  return (
    <div className="cart">
      <div className="cart-item">
        <div className="cart-item-title">
          <p>Item</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item) => {
          if (cartItems[item._id] > 0) {
            return (
              <>
                <div className="cart-item-title cart-items-item">
                  <img src={url+"/image/"+item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p onClick={() => removeFromCart(item._id)} className="cross">
                    X
                  </p>
                </div>
                <hr />
              </>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Dilvery</p>
              <p>{getTotalCartAmount()===0?0:9}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>{getTotalCartAmount()===0?0:getTotalCartAmount()+9}</b>
            </div>
          </div>
          <button onClick={()=>Navigate('/order')}>Procced To CheckOut</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If You Have Any Promocode Enter Here</p>
          </div>
          <div className="cart-promocode-input">
            <input type="text" placeholder="promo code" />
            <button>Sumit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
