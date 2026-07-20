import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import logoMark from '../assets/tumbo-mark.svg';

export const Footer: React.FC = () => {
  const currentYear = 2026; // Set specifically to 2026 to match screenshot exactly

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-brand-col">
            <Link to="/" className="footer-logo-link" onClick={handleScrollTop}>
              <span className="footer-logo-word">TUMBO</span>
              <img src={logoMark} alt="" className="footer-logo-mark" aria-hidden="true" />
            </Link>
            <p className="footer-desc">
              Empowering people by connecting them with opportunities, education, careers, funding, and community support through one powerful digital ecosystem.
            </p>
          </div>

          {/* Quick links Column */}
          <div className="footer-col">
            <h4 className="footer-col-title">Quick links</h4>
            <ul className="footer-links-list">
              <li><Link to="/" className="footer-link" onClick={handleScrollTop}>Home</Link></li>
              <li><Link to="/about" className="footer-link" onClick={handleScrollTop}>About Us</Link></li>
              <li><Link to="/ecosystem" className="footer-link" onClick={handleScrollTop}>Ecosystem</Link></li>
              <li><Link to="/partners" className="footer-link" onClick={handleScrollTop}>Partners</Link></li>
              <li><Link to="/opportunities" className="footer-link" onClick={handleScrollTop}>Opportunities</Link></li>
              <li><Link to="/#resources" className="footer-link">Resources</Link></li>
              <li><Link to="/#contact" className="footer-link">Contact</Link></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div className="footer-col">
            <h4 className="footer-col-title">RESOURCES</h4>
            <ul className="footer-links-list">
              <li><Link to="/#articles" className="footer-link">Articles</Link></li>
              <li><Link to="/#guides" className="footer-link">Guides</Link></li>
              <li><Link to="/#downloads" className="footer-link">Downloads</Link></li>
              <li><Link to="/#faq" className="footer-link">FAQ</Link></li>
              <li><Link to="/#help" className="footer-link">Help Center</Link></li>
            </ul>
          </div>

          {/* Opportunities Column */}
          <div className="footer-col">
            <h4 className="footer-col-title">OPPORTUNITIES</h4>
            <ul className="footer-links-list">
              <li><Link to="/#jobs" className="footer-link">Jobs</Link></li>
              <li><Link to="/#scholarships" className="footer-link">Scholarships</Link></li>
              <li><Link to="/#internships" className="footer-link">Internships</Link></li>
              <li><Link to="/#grants" className="footer-link">Grants</Link></li>
              <li><Link to="/#events" className="footer-link">Events</Link></li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="footer-col">
            <h4 className="footer-col-title">NEWSLETTER</h4>
            <ul className="footer-links-list">
              <li className="footer-text-item">Stay Connected.</li>
              <li className="footer-text-item">Subscribe to receive</li>
              <li className="footer-text-item">the latest updates.</li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="footer-col">
            <h4 className="footer-col-title">CONTACT</h4>
            <ul className="footer-contact-list">
              <li className="footer-contact-item">
                <Mail size={14} className="footer-contact-icon email-icon" />
                <span className="footer-contact-text truncate">support@...</span>
              </li>
              <li className="footer-contact-item">
                <Phone size={14} className="footer-contact-icon phone-icon" />
                <span className="footer-contact-text">+255 XXX XXX</span>
              </li>
              <li className="footer-contact-item">
                <MapPin size={14} className="footer-contact-icon map-icon" />
                <span className="footer-contact-text">Dar es Salaam</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="footer-copy">© {currentYear} Tumbo Eye 2.0. All Rights Reserved.</p>
          <div className="footer-bottom-links">
            <a href="#privacy" className="footer-bottom-link" onClick={(e) => e.preventDefault()}>Privacy Policy</a>
            <span className="footer-bottom-separator">|</span>
            <a href="#terms" className="footer-bottom-link" onClick={(e) => e.preventDefault()}>Terms & Conditions</a>
            <span className="footer-bottom-separator">|</span>
            <a href="#cookies" className="footer-bottom-link" onClick={(e) => e.preventDefault()}>Cookies...</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
