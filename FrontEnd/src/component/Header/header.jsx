import React from 'react'
import './header.css'

const Header = () => {
  return (
    <div className='header'>
      <div className="header-overlay"></div>
      <div className="header-circles">
        <span className="hc hc-1"></span>
        <span className="hc hc-2"></span>
        <span className="hc hc-3"></span>
      </div>

      {/* Floating food grid — right side decoration */}
      <div className="header-food-grid">
        {['🍕','🍜','🥗','🍔','🍣','🥘','🧆','🍱','🍛'].map((f, i) => (
          <span key={i} className="food-dot" style={{ animationDelay: `${i * 0.15}s` }}>{f}</span>
        ))}
      </div>

      <div className="header-content">

        {/* Live badge */}
        <div className="header-badge">
          <span className="badge-pulse"></span>
          <span>Now delivering near you</span>
        </div>

        <h1>Order your <em>favourite</em><br />food here</h1>

        <p>
          Choose from a diverse menu crafted with the finest ingredients
          and culinary expertise — one delicious meal, delivered to your door.
        </p>

        <div className="header-actions">
          <button className="btn-primary">View Menu</button>
          <button className="btn-ghost">
            How it works <span className="btn-arrow">›</span>
          </button>
        </div>

        {/* Trust stats */}
        <div className="header-stats">
          <div className="stat">
            <span className="stat-num">200+</span>
            <span className="stat-lbl">Menu items</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat">
            <span className="stat-num">4.9 ★</span>
            <span className="stat-lbl">Average rating</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat">
            <span className="stat-num">30 min</span>
            <span className="stat-lbl">Avg delivery</span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Header