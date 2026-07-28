import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/tumbo-logo-nav.png';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const handleNavClick = (sectionId: string) => {
    closeMenu();
    if (location.pathname !== '/') return;
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="navbar-header">
      <div className="container nav-container">
        {/* Logo */}
        <Link to="/" className="logo-link" onClick={closeMenu}>
          <img src={logo} alt="Tumbo" className="logo-img" />
        </Link>

        {/* Desktop Nav Links */}
        <nav>
          <ul className="nav-links">
            <li>
              <NavLink to="/" className={({ isActive }) => `nav-item-link ${isActive ? 'active' : ''}`} end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => `nav-item-link ${isActive ? 'active' : ''}`}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/ecosystem" className={({ isActive }) => `nav-item-link ${isActive ? 'active' : ''}`}>
                Ecosystem
              </NavLink>
            </li>
            <li>
              <NavLink to="/opportunities" className={({ isActive }) => `nav-item-link ${isActive ? 'active' : ''}`}>
                Opportunities
              </NavLink>
            </li>
            <li>
              <NavLink to="/resources" className={({ isActive }) => `nav-item-link ${isActive ? 'active' : ''}`}>
                Resources
              </NavLink>
            </li>
            <li>
              <NavLink to="/success-stories" className={({ isActive }) => `nav-item-link ${isActive ? 'active' : ''}`}>
                Success Stories
              </NavLink>
            </li>
            <li>
              <NavLink to="/partners" className={({ isActive }) => `nav-item-link ${isActive ? 'active' : ''}`}>
                Partners
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => `nav-item-link ${isActive ? 'active' : ''}`}>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Desktop Nav Buttons */}
        <div className="nav-actions">
          <button className="btn btn-primary btn-sm nav-explore-btn" onClick={() => alert('Explore')}>
            Explore
          </button>
          <button className="btn btn-nav-login btn-sm" onClick={() => alert('Login modal')}>
            Login
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle Navigation Menu">
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <div className={`mobile-drawer ${isOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-links">
          <li>
            <NavLink to="/" className={({ isActive }) => `mobile-nav-item-link ${isActive ? 'active' : ''}`} onClick={closeMenu} end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => `mobile-nav-item-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/ecosystem" className={({ isActive }) => `mobile-nav-item-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
              Ecosystem
            </NavLink>
          </li>
          <li>
            <NavLink to="/opportunities" className={({ isActive }) => `mobile-nav-item-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
              Opportunities
            </NavLink>
          </li>
          <li>
            <NavLink to="/resources" className={({ isActive }) => `mobile-nav-item-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
              Resources
            </NavLink>
          </li>
          <li>
            <NavLink to="/success-stories" className={({ isActive }) => `mobile-nav-item-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
              Success Stories
            </NavLink>
          </li>
          <li>
            <NavLink to="/partners" className={({ isActive }) => `mobile-nav-item-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
              Partners
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => `mobile-nav-item-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
              Contact
            </NavLink>
          </li>
        </ul>

        <div className="mobile-nav-actions">
          <button className="btn btn-primary" onClick={() => { closeMenu(); alert('Explore'); }}>
            Explore
          </button>
          <button className="btn btn-nav-login" onClick={() => { closeMenu(); alert('Login modal'); }}>
            Login
          </button>
        </div>
      </div>
    </header>
  );
};
