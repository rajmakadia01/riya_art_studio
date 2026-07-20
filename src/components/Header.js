import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import finalLogo from '../assets/FINAL LOGO.png'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';

        const closeOnEscape = (event) => {
            if (event.key === 'Escape') setMenuOpen(false);
        };

        window.addEventListener('keydown', closeOnEscape);
        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', closeOnEscape);
        };
    }, [menuOpen]);

    const closeMenu = () => setMenuOpen(false);

    return (
        <header className="main-header">
            <NavLink to="/" className="logo-section" aria-label="Riya Art Studio home">
                <div className="logo">
                    <img src={finalLogo} alt='Riya Art Studio logo'/>
                </div>
            </NavLink>

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
                <a className="contact-button" href="tel:+919662447547">
                    <i className="fas fa-phone"></i>+91 9662447547
                </a>
            </div>

            <button
                className="hamburger"
                type="button"
                aria-label="Open navigation menu"
                aria-expanded={menuOpen}
                aria-controls="mobile-navigation"
                onClick={() => setMenuOpen(true)}
            >
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </button>

            {menuOpen && (
                <div className="mobile-menu-overlay" onMouseDown={closeMenu}>
                  <div className="mobile-menu-panel" onMouseDown={(event) => event.stopPropagation()}>
                    <div className="mobile-menu-header">
                        <span>Menu</span>
                        <button className="close-button" type="button" aria-label="Close navigation menu" onClick={closeMenu}>&times;</button>
                    </div>
                    <nav className="mobile-nav" id="mobile-navigation" aria-label="Mobile navigation">
                        <NavLink to="/" onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>
                            <i className="fas fa-home"></i> Home
                        </NavLink>
                        <NavLink to="/about" onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>
                            <i className="fas fa-user"></i> About
                        </NavLink>
                        <NavLink to="/art-category/textureArt" onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>
                            <i className="fas fa-paint-brush"></i> Art Category
                        </NavLink>
                        <NavLink to="/gallery" onClick={closeMenu} className={({ isActive }) => isActive ? 'active' : ''}>
                            <i className="fas fa-images"></i> Gallery
                        </NavLink>

                        <div className="mobile-buttons">
                            <a className="contact-button" href="tel:+919662447547">
                                <i className="fas fa-phone"></i> +91 9662447547
                            </a>
                        </div>
                    </nav>
                  </div>
                </div>
            )}
        </header>
    );
};

export default Header;
