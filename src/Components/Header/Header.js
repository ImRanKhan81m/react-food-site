import { faSearch, faShoppingCart, faUser, faUtensils } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import '../Assets/css/style.css'

const Header = () => {
    return (
        <div>
            <header className="header">

                <Link className="logo" to={'/'}><FontAwesomeIcon icon={faUtensils} /> Food</Link>

                <nav className="navbar">
                    <a href="#home">home</a>
                    <a href="#about">about</a>
                    <a href="#popular">popular</a>
                    <a href="#menu">menu</a>
                    <a href="#order">order</a>
                    <a href="#blogs">blogs</a>
                </nav>

                <div className="icons">
                    <div id="search-btn"> <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon></div>
                    <div id="cart-btn"><FontAwesomeIcon icon={faShoppingCart} /></div>
                    <div id="login-btn"> <FontAwesomeIcon icon={faUser}></FontAwesomeIcon></div>
                </div>

            </header>
        </div>
    );
};

export default Header;