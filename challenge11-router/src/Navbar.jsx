import React from 'react';
import {NavLink, Link} from "react-router-dom";

const Navbar = () =>{
    return(
        <>
        <div className="menu_style">
        {/* <Link to='/'>About us</Link>
        <Link to='/contact'>Contact us</Link>
        <br/><br/> */}
        <NavLink exact activeClassName="active_class" to='/'>About us</NavLink>
        <NavLink exact activeClassName="active_class" to='/contact'>Contact us</NavLink>
        <NavLink exact activeClassName="active_class" to='/service'>Service</NavLink>
        <NavLink exact activeClassName="active_class" to='/user'>User</NavLink>
        <br/><br/>
        {/* <a href='/'>About us</a>
        <a href='/Contact'>Contact</a> */}
        </div>
        </>
    );
};

export default Navbar;