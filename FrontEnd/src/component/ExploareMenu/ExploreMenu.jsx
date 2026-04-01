import React from 'react'
import './exploreMenu.css'
import { menu_list } from '../../assets/Comp'

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className='explore-menu' id="explore-menu">

      <div className="explore-menu-header">
        <p className="explore-menu-eyebrow">Discover</p>
        <h1 className="explore-menu-title">
          Explore Our <span>Menu</span>
        </h1>
        <p className='explore-menu-text'>
          Choose from a diverse menu featuring a delectable array of dishes.
          Our mission is to satisfy your cravings and elevate your dining
          experience, one delicious meal at a time.
        </p>
      </div>

      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          const isActive = category === item.menu_name;
          return (
            <div
              key={index}
              onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)}
              className="explore-menu-list-item"
            >
              <div className={`explore-img-wrap ${isActive ? "active" : ""}`}>
                <img src={item.menu_image} alt={item.menu_name} />
                {isActive && <span className="explore-active-dot" />}
              </div>
              <p className={isActive ? "active-label" : ""}>{item.menu_name}</p>
            </div>
          )
        })}
      </div>

      <hr className="explore-menu-divider" />
    </div>
  )
}

export default ExploreMenu