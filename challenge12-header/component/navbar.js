import React, {useState} from 'react';
import './navbar.css';
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa';
import {GiHamburgerMenu } from "react-icons/gi";

import { NavLink } from 'react-router-dom';

const Navbar = () =>{

    const [showMediaIcons, setShowMediaIcons] = useState(false);
    return(
        <>
            <nav className="main-nav">
                <div className='logo'>
                    <h2>
                        <span>K</span>umar
                        <span>S</span>hantanu
                    </h2>
                </div>
                <div className= {showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}>
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/service">Services</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="social-media">
                    <ul className="social-media-desktop">
                        <li>
                            <a href="https://twitter.com/" target="twitter"><FaTwitterSquare className="twitter"/></a>
                        </li>
                        <li>
                            <a href="https://instagram.com/" target="twitter"><FaInstagramSquare className="instagram"/></a>
                        </li>
                        <li>
                            <a href="https://facebook.com/" target="twitter"><FaFacebookSquare className="facebook"/></a>
                        </li>
                    </ul>

                    <div className="hamburger-menu">
                            <a href="#" onClick = { () => setShowMediaIcons(!showMediaIcons) } >
                                
                                <GiHamburgerMenu/>
                            </a>
                    </div>

                </div>
            </nav>

            {/* <section className="hero-section">
                <p>
                    Welcome to
                </p>
                <h1>My portfolio</h1>
            </section> */}
        </>
    );
}

export default Navbar;