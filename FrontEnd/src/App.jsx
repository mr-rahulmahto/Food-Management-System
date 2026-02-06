import React, { useState } from 'react'
import Navbar from './component/Navbar/Navbar'
import { Route ,Routes } from 'react-router-dom'
import Home from './pages/Home/home'
import PlaceOrder from './pages/placeorder/placeorder'
import Footer from './component/Footer/footer'
import LoginPopup from './component/LoginPopup/LoginPopup'
import Cart from './pages/Cart/Card'
import Verify from './pages/verify/verify'
import MyOrder from './pages/MyOrder/MyOrder'


const App = () => {

  const[showLogin , setShowLogin] = useState(false)

  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className="App">
      <Navbar setShowLogin = {setShowLogin} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<PlaceOrder />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path='/verify' element={<Verify />} />
        <Route path='/myorders' element={<MyOrder/>}/>
        
      </Routes>
    </div>
    <Footer>

    </Footer>
    </>
    
  )
}

export default App
