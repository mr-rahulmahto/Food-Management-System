import React from 'react'
import './FoodDisplay.css';
import Fooditem from '../Fooditem/Fooditem';
import { useContext } from 'react';
import { StoreContext } from '../../Context/StoreContext';




const FoodDisplay = ({category}) => {

     const {food_list}  =  useContext(StoreContext)

  return (
    <div className='food-display ' id='food-display'>
        <h2>Top Dishes Near You</h2>
        <div className="food-display-list">
           {food_list.map((item, index) => {
                 {console.log(category , item.category);}
                if(category==="All" || category===item.category ){
                return <Fooditem key={index} id={item._id} name={item.name} image={item.image} price={item.price} rating={item.rating} description={item.description} />

                }
 })} 
        </div>
      
    </div>
  )
}

export default FoodDisplay
