import React, { useState } from 'react'
import './login.css'
import { Comp } from '../../assets/Comp'
import { useContext } from 'react'
import { StoreContext } from '../../Context/StoreContext'
import axios from 'axios'

//import { useEffect } from 'react'



const LoginPopup = ({setShowLogin}) => {

    const {url , setToken} = useContext(StoreContext)

    const[currState  , setCurrState] = useState("Login")
     const [data , setData] = useState({
          name:"",
          email:"",
          password:""
     })

     const onChangeHandler  = (Event) => {
          const name = Event.target.name;
          const value = Event.target.value;
          setData(data=>({...data,[name]:value}))

     }

     const onLogin = async (Event) =>{
          Event.preventDefault()
          let newUrl = url;
          if(currState==="Login"){
            newUrl += "/api/user/login"
          }else{
            newUrl += "/api/user/register"
          }

          const response = await axios.post(newUrl,data);
            try{
          if(response.data.success){
            setToken(response.data.token);
            localStorage.setItem("token" , response.data.token);
            setShowLogin(false)
          }else{
            alert(response.data.message("User Not Found"));
          }
        }catch (error){
          console.log(error);
          alert("Something went wrong while connecting to server.");
        }
        };


     // check working data in console
    //  useEffect (()=>{
    //       console.log(data);
          
    //  } , [data])




  return (
    <div className='login-popup'>
      <form onSubmit={onLogin} className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currState}</h2>
            <img onClick={()=>setShowLogin(false)} src={Comp.cross_icon} alt="" />
            
        </div>
        <div className="login-popup-inputs">
          {currState==="Login"?<></>:<input  name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Your Name' required />}

          <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Your E-mail' required />
          <input  name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='Password' required/>
        </div>
        <button type='submit'>{currState==="Sign Up"?"Create Account":"Login"}</button>
        <div className="login-popup-condition">
          <input type="Checkbox" required />
          <p>By Continuing , i agree to the terms of use & privacy policy.</p>
        </div>
        {currState==="Login"
        ?<p className='clickhere'>Create a New Account ?<span onClick={()=>setCurrState("Sign Up")}>Click Here</span></p>
        : <p className='clickhere'>Already Have an Account?<span onClick={()=>setCurrState("Login")}>Login Here</span></p>
        
        }
       
      </form>
    </div>
  )
}

export default LoginPopup;
