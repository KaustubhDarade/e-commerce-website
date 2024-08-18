import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';

const Navbar = () => {
  const [menu,setMenu]=useState("Shop");
  return (
    <div className='Navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" style={{ width: '200px', height: 'auto' }} />
        {/* Adjust the width and height values as per your requirement */}
        <p>SPORTSWEAR</p>
      </div>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("Shop")}}><Link style={{textDecoration: "none"}}to="/">Shop</Link>{menu==="Shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("T-Shirts")}}><Link style={{textDecoration: "none"}} to="/T-Shirts">T-Shirts</Link>{menu==="T-Shirts"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Shorts")}}><Link style={{textDecoration: "none"}}to="/Shorts">Shorts</Link>{menu==="Shorts"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Other Category")}}><Link style={{textDecoration: "none"}}to="/Other Category">Other Category</Link>{menu==="Other Category"?<hr/>:<></>}</li>
      </ul>
      <div className="login-cart">
      <Link to="/login"><button>LOGIN</button></Link>
       <Link to="/cart"><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">0</div>
       
      </div>
    </div>
  );
}

export default Navbar;
