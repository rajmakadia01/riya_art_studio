import React, { useState } from 'react';
import './Header.css';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="main-header">
            <div className="logo-section">
                <div className="logo">A&S</div>
                <span>Riya Artist Studio</span>
            </div>

            <nav className="desktop-nav nav-links">
                <a href="/" className="active">Home</a>
                <a href="/about">About</a>
                <a href="/textureArt">Art Category</a>
                <a href="#">Gallery</a>
                <a href="#">Contact</a>
            </nav>

            <div className="contact-section">
                <button className="contact-button">
                    <i className="fas fa-phone"></i> 9662447547
                </button>
            </div>

            <div className="hamburger" onClick={() => setMenuOpen(true)}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>

            {menuOpen && (
                <div className="mobile-menu-overlay">
                    <button className="close-button" onClick={() => setMenuOpen(false)}>&times;</button>
                    <nav className="mobile-nav">
                        <a href="/" onClick={() => setMenuOpen(false)}>Home</a>
                        <a href="/about" onClick={() => setMenuOpen(false)}>About</a>
                        <a href="/textureArt" onClick={() => setMenuOpen(false)}>Art Category</a>
                        <a href="#" onClick={() => setMenuOpen(false)}>Gallery</a>

                        <div className="mobile-buttons">
                            <button className="contact-button">
                                <i className="fas fa-phone"></i> 9662447547
                            </button>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
