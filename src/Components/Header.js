import React from 'react'
import '../Style/Header.css'

const Header = (props) => {
    return ( 
                    <ul className = "menu">
                    <li><a id='logo' href='#' >Home</a></li>
                    <li><a href="#">Shop</a></li>
                     <li><a href="#">About</a></li>
                     <li><a href="#">Contact Us</a></li>
                    </ul>      
      
    )
}

export default Header;