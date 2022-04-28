import React from 'react';
import Logo from '../../Images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <img className='logo' src={Logo} alt="Logo" />
            <nav className='navbar'>
                <a href="/shop">Shop</a>
                <a href="/order">Order</a>
                <a href="/inventory">Inventory</a>
            </nav>
        </div>
    );
};

export default Header;