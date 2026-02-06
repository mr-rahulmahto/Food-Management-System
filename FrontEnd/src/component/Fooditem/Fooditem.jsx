import React from "react";
import "./Fooditem.css";
import { Comp } from "../../assets/Comp";;
import { useContext } from "react";
import { StoreContext } from "../../Context/StoreContext";



const Fooditem = ({ id, name, image, price, rating, description }) => {
  //const [itemCount, setItemCount] = useState(0);
  const { cartItems,addToCart,removeFromCart ,url} = useContext(StoreContext);

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-image" src={url+"/image/"+image} alt="" />
        {!cartItems[id]
       
            ?<img className="add"  onClick ={()=> addToCart(id)/*setItemCount(prev=>prev+1)*/}src ={Comp.add_icon_white } alt="Add" />
            :<div className="food-item-counter">
            <img  onClick={()=>removeFromCart(id)/*setItemCount(prev=>prev-1)*/} src={Comp.remove_icon_red} alt="Remove" />
            <p>{cartItems[id]}</p>
            {/* <p>{itemCount}</p> */}
            <img onClick={()=>addToCart(id)/*setItemCount(prev=>prev+1)*/} src={Comp.add_icon_green} alt="" />

            </div>

        }
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={Comp.rating_starts} alt="rating" />
        </div>
        <p className="food-item-rating">Rating: {rating}</p>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
        {/* <p className="food-item-id">ID: {id}</p> */}
      </div>
    </div>
  );
};

export default Fooditem;
