import React, { useContext } from 'react'
import './FoodDisplay.css'
import Fooditem from '../Fooditem/Fooditem'
import { StoreContext } from '../../Context/StoreContext'

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext)

  const filteredList = food_list.filter(item =>
    category === "All" || category === item.category
  )

  return (
    <div className='food-display' id='food-display'>

      <div className="food-display-header">
        <div>
          <p className="food-display-eyebrow">Fresh &amp; Hot</p>
          <h2 className="food-display-title">
            Top Dishes <span>Near You</span>
          </h2>
        </div>
        <span className="food-display-count">{filteredList.length} items</span>
      </div>

      <div className="food-display-list">
        {filteredList.map((item, index) => (
          <Fooditem
            key={index}
            id={item._id}
            name={item.name}
            image={item.image}
            price={item.price}
            rating={item.rating}
            description={item.description}
          />
        ))}
      </div>

    </div>
  )
}

export default FoodDisplay