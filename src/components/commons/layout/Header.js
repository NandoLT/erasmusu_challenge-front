import React from 'react';
import roomusuLogo from '../../../assets/images/roomusu_icon.png';

import '../../../assets/css/header.css';

const Header = () => {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <a className="navbar-item" href="/">
                <img src={ roomusuLogo } alt="roomusu-logo-img" width="150" height="120" />
            </a>
        </nav>
    )
}

export default Header;