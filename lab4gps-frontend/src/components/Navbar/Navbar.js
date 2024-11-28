import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Navbar.css';
import logo from '../../assets/Images/Lab4GPS_Logo_2024-1.jpg'; // Import the logo

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Add scroll event listener
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="logo-container">
                <Link to="/">
                    <img src={logo} alt="Lab4GPS Logo" className="logo-image" />
                </Link>
            </div>
            <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                <li><Link to="/" className={isScrolled ? 'scrolled-text' : ''}>Home</Link></li>
                <li><Link to="/about" className={isScrolled ? 'scrolled-text' : ''}>About</Link></li>
                <li><Link to="/collaboration-hub" className={isScrolled ? 'scrolled-text' : ''}>Collaboration Hub</Link></li>
                <li><Link to="/projects" className={isScrolled ? 'scrolled-text' : ''}>Projects</Link></li>
                <li><Link to="/startups" className={isScrolled ? 'scrolled-text' : ''}>Startups</Link></li>
                <li><Link to="/resources" className={isScrolled ? 'scrolled-text' : ''}>Resources</Link></li>
                <li><Link to="/news-events" className={isScrolled ? 'scrolled-text' : ''}>News & Events</Link></li>
                <li><Link to="/sponsorship" className={isScrolled ? 'scrolled-text' : ''}>Sponsorship</Link></li>
                <li><Link to="/member-portal" className={isScrolled ? 'scrolled-text' : ''}>Member Portal</Link></li>
                <li><Link to="/login" className={isScrolled ? 'scrolled-text' : ''}>Login</Link></li>
                <li><Link to="/signup" className={isScrolled ? 'scrolled-text' : ''}>Sign Up</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
