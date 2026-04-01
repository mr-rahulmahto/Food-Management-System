import React, { useContext, useState } from 'react'
import './Navbar.css'
import { Comp } from '../../assets/Comp'
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext'

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("Home")
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext)
  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem('token')
    setToken(null)
    navigate('/')
  }

  return (
    <nav className="navbar">

      {/* ── Brand ── */}
      <Link to="/" className="navbar-brand">
        <div className="navbar-brand-icon">
          <img src={Comp.logofoodie2} alt="Foodie2" />
        </div>
        <span className="navbar-brand-name">Foodie<span>2</span></span>
      </Link>

      {/* ── Links ── */}
      <ul className="navbar-menu">
        <li>
          <Link to="/" onClick={() => setMenu("Home")} className={menu === "Home" ? "active" : ""}>Home</Link>
        </li>
        <li>
          <a href="#explore-menu" onClick={() => setMenu("Menu")} className={menu === "Menu" ? "active" : ""}>Menu</a>
        </li>
        <li>
          <a href="#app-download" onClick={() => setMenu("App")} className={menu === "App" ? "active" : ""}>App</a>
        </li>
        <li>
          <a href="#footer" onClick={() => setMenu("Contact")} className={menu === "Contact" ? "active" : ""}>Contact</a>
        </li>
      </ul>

      {/* ── Right section ── */}
      <div className="navbar-right">

        {/* Cart */}
        <Link to="/cart" className="navbar-cart">
          <svg viewBox="0 0 24 24" strokeWidth="1.8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <path d="M16 10a4 4 0 01-8 0"/>
          </svg>
          {getTotalCartAmount() > 0 && (
            <span className="navbar-cart-dot"></span>
          )}
        </Link>

        <div className="navbar-divider" />

        {/* Auth */}
        {!token ? (
          <button className="navbar-signin" onClick={() => setShowLogin(true)}>
            Sign In
          </button>
        ) : (
          <div className="navbar-profile">
            <div className="navbar-avatar">
              <img src={Comp.profile_icon} alt="profile" />
            </div>
            <ul className="navbar-dropdown">
              <li onClick={() => navigate('/myorders')}>
                <img src={Comp.bag_icon} alt="" />
                <span>My Orders</span>
              </li>
              <hr />
              <li onClick={logout} className="logout-item">
                <img src={Comp.logout_icon} alt="" />
                <span>Logout</span>
              </li>
            </ul>
          </div>
        )}

      </div>
    </nav>
  )
}

export default Navbar