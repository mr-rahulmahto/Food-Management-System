import React, { useContext } from "react";
import "./Navbar.css";
import { Comp } from "../../assets/Comp";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";



const Navbar = ({setShowLogin}) => {

    const [menu , setMenu] = useState("Home")
    const{getTotalCartAmount , token , setToken}=useContext(StoreContext)
     
    const navigate = useNavigate();

    const logout = () => {
      localStorage.removeItem('token');
      setToken(null);
      setShowLogin(false);
      navigate('/');

    }

  return (
    <div className="navbar">
     <Link to ='/'><img src={Comp.logofoodie2} alt="" className="logo" /></Link> 
      <ul className="navbar-menu">
        <Link to='/' onClick={() => setMenu("Home")} className={menu==="Home" ? "active":""}>Home</Link>
        <a href="#explore-menu" onClick={() => setMenu("Menu")} className={menu==="Menu" ? "active":""}>Menu</a>
        <a href="#app-download" onClick={() => setMenu("App")} className={menu==="App" ? "active":""}>App</a>
        <a href="#footer" onClick={() => setMenu("Contact us")} className={menu==="Contact us"? "active":""}>Contact Us</a>
      </ul>
      <div className="navbar-right">
        <div className="navbar-search-icons">
         <Link to ='./cart'> <img src={Comp.basket_icon}/></Link>
          <div className={getTotalCartAmount()===0?"":"dot"}>

          </div>
        </div>
        {!token?<button onClick ={()=>setShowLogin(true)}>Sign In</button>
        :<div className="navbar-profile">
           
          <img src={Comp.profile_icon} alt="" />
          <ul className="navbar-profile-dropdown">
            <li onClick={()=>navigate('/myorders')}><img src={Comp.bag_icon} alt="" /><p>Order</p></li>
            <hr />
            <li onClick={logout}><img src={Comp.logout_icon} alt="" /><p>Logout</p></li>
          </ul>

        </div>
          
          }
        
      </div>
    </div>
  );
};

export default Navbar;
