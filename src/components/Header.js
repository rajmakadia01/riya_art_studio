import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import image1 from '../assets/logo.svg'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="main-header">
            <div className="logo-section">
                <div className="logo">
                    <img src={image1} alt='logo' style={{height:'50px'}}/>
                </div>
            </div>

            <nav className="desktop-nav nav-links">
                <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
                    <i className="fas fa-home"></i> Home
                </NavLink>
                <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
                    <i className="fas fa-user"></i> About
                </NavLink>
                <NavLink to="/art-category/textureArt" className={({ isActive }) => isActive ? 'active' : ''}>
                    <i className="fas fa-paint-brush"></i> Art Category
                </NavLink>
                <NavLink to="/gallery" className={({ isActive }) => isActive ? 'active' : ''}>
                    <i className="fas fa-images"></i> Gallery
                </NavLink>
            </nav>

            <div className="contact-section">
                <button className="contact-button">
                    <i className="fas fa-phone"></i>+91 9662447547
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
                        <NavLink to="/" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>
                            <i className="fas fa-home"></i> Home
                        </NavLink>
                        <NavLink to="/about" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>
                            <i className="fas fa-user"></i> About
                        </NavLink>
                        <NavLink to="/art-category/textureArt" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>
                            <i className="fas fa-paint-brush"></i> Art Category
                        </NavLink>
                        <NavLink to="/gallery" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>
                            <i className="fas fa-images"></i> Gallery
                        </NavLink>

                        <div className="mobile-buttons">
                            <button className="contact-button">
                                <i className="fas fa-phone"></i> +91 9662447547
                            </button>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
