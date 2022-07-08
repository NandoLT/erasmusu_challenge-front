import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons';

import '../../../assets/css/footer.css';

const Footer = () => {
    return (
        <footer className="footer-content">
            <div className="content has-text-centered">
                <p>
                <strong>Challenge</strong> by <a href="https://github.com/nandolt">Fernando López <FontAwesomeIcon icon={ faUserAstronaut } /></a>. 
                </p>
            </div>
        </footer>
    )
}

export default Footer;