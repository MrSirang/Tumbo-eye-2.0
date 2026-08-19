import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import logo from '../assets/tumbo-logo-nav.png';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="navbar-header">
      <div className="container nav-container">
        <Link to="/" className="logo-link" onClick={closeMenu}>
          <img src={logo} alt="Tumbo" className="logo-img" />
        </Link>

        <nav>
          <ul className="nav-links">
            <li>
              <NavLink to="/about" className={({ isActive }) => `nav-item-link ${isActive ? 'active' : ''}`}>
                About Tumbo
              </NavLink>
            </li>
            <li className="nav-dropdown">
              <span className="nav-item-link nav-dropdown-trigger">
                Products <ChevronDown size={14} />
              </span>
              <div className="nav-dropdown-menu">
                <NavLink to="/ecosystem" onClick={closeMenu}>Tumbo Ecosystem</NavLink>
                <NavLink to="/opportunities" onClick={closeMenu}>Opportunities</NavLink>
                <NavLink to="/tumiso-ai" onClick={closeMenu}>Tumiso AI</NavLink>
              </div>
            </li>
            <li>
              <NavLink to="/success-stories" className={({ isActive }) => `nav-item-link ${isActive ? 'active' : ''}`}>
                Impact
              </NavLink>
            </li>
            <li>
              <NavLink to="/partners" className={({ isActive }) => `nav-item-link ${isActive ? 'active' : ''}`}>
                Partners
              </NavLink>
            </li>
            <li>
              <NavLink to="/resources" className={({ isActive }) => `nav-item-link ${isActive ? 'active' : ''}`}>
                Resources
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => `nav-item-link ${isActive ? 'active' : ''}`}>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="nav-actions">
          <button className="nav-lang" type="button" aria-label="Language">
            EN <ChevronDown size={14} />
          </button>
          <Link to="/contact" className="nav-join-btn">
            Join Tumbo
          </Link>
        </div>

        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle Navigation Menu">
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <div className={`mobile-drawer ${isOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-links">
          <li>
            <NavLink to="/about" className={({ isActive }) => `mobile-nav-item-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
              About Tumbo
            </NavLink>
          </li>
          <li>
            <NavLink to="/ecosystem" className={({ isActive }) => `mobile-nav-item-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/opportunities" className={({ isActive }) => `mobile-nav-item-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
              Opportunities
            </NavLink>
          </li>
          <li>
            <NavLink to="/success-stories" className={({ isActive }) => `mobile-nav-item-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
              Impact
            </NavLink>
          </li>
          <li>
            <NavLink to="/partners" className={({ isActive }) => `mobile-nav-item-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
              Partners
            </NavLink>
          </li>
          <li>
            <NavLink to="/resources" className={({ isActive }) => `mobile-nav-item-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
              Resources
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => `mobile-nav-item-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
              Contact
            </NavLink>
          </li>
        </ul>

        <div className="mobile-nav-actions">
          <Link to="/contact" className="nav-join-btn" onClick={closeMenu}>
            Join Tumbo
          </Link>
        </div>
      </div>
    </header>
  );
};
