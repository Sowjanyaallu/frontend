import React, { useContext, useState } from "react";
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
   const [menu ,setMenu] = useState("shop")
   const {getTotalCartItem} = useContext(ShopContext)


    return(
        <div className="navbar">
            <div className="nav-logo">
                <img  src={logo} alt="" />
                <p>SHOPPER</p>
            </div>
            <ul  className="nav-menu">
                <li onClick={() => setMenu('shop')}><Link style={{textDecoration:'none'}} to='/'>Shop</Link>  {menu==="shop"?<hr/> : <></> }</li>
                <li onClick={() => setMenu('Mens')}><Link style={{textDecoration:'none'}} to='/mens'>Mens</Link>  {menu==="Mens"?<hr/>:<></> } </li>
                <li onClick={() => setMenu('Womens')}><Link style={{textDecoration:'none'}} to='/womens'>Womens</Link>  {menu ==="Womens"? <hr/>:<></>} </li>
                <li onClick={() => setMenu('Kids')}><Link style={{textDecoration:'none'}} to='/kids'>Kids</Link>  {menu==="Kids"?<hr/>:<></> } </li>
            </ul>
            <div className="nav-login-cart">
               <Link to='/login'><button>Login</button></Link> 
                <Link to='/cart'><img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count">{getTotalCartItem()}</div>
            </div>

        </div>
    )
}
export default Navbar