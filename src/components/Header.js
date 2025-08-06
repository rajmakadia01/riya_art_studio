import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
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
                <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
                    <i className="fas fa-home"></i> Home
                </NavLink>
                <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
                    <i className="fas fa-user"></i> About
                </NavLink>
                <NavLink to="/textureArt" className={({ isActive }) => isActive ? 'active' : ''}>
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
                        <NavLink to="/textureArt" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>
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
