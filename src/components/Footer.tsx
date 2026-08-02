import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Send } from 'lucide-react';
import logoMark from '../assets/tumbo-mark.svg';

const INSTAGRAM_URL = 'https://www.instagram.com/ema.tumbo/';
const OFFICE_ADDRESS = '46 Gray Ave, Klipfontein, eMalahleni, 1035';

const InstagramIcon: React.FC = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="2.5" y="2.5" width="19" height="19" rx="5" stroke="currentColor" strokeWidth="2" />
    <circle cx="12" cy="12" r="4.25" stroke="currentColor" strokeWidth="2" />
    <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" />
  </svg>
);

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      email
        ? 'Newsletter signup is Coming Soon. Thank you for your interest.'
        : 'Enter your email address',
    );
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid footer-grid-modern">
          <div className="footer-brand-col">
            <Link to="/" className="footer-logo-link" onClick={handleScrollTop}>
              <span className="footer-logo-word">TUMBO</span>
              <img src={logoMark} alt="" className="footer-logo-mark" aria-hidden="true" />
            </Link>
            <p className="footer-desc">
              Tumbo is a South African digital community empowerment platform connecting communities,
              businesses, governments and development partners through verified data and trusted
              digital services.
            </p>
            <div className="footer-social">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="Tumbo on Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href="mailto:support@tumbo.co.za"
                className="footer-social-link"
                aria-label="Email Tumbo"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Explore</h4>
            <ul className="footer-links-list">
              <li>
                <Link to="/" className="footer-link" onClick={handleScrollTop}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="footer-link" onClick={handleScrollTop}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/ecosystem" className="footer-link" onClick={handleScrollTop}>
                  Ecosystem
                </Link>
              </li>
              <li>
                <Link to="/opportunities" className="footer-link" onClick={handleScrollTop}>
                  Opportunities
                </Link>
              </li>
              <li>
                <Link to="/resources" className="footer-link" onClick={handleScrollTop}>
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/success-stories" className="footer-link" onClick={handleScrollTop}>
                  Success Stories
                </Link>
              </li>
              <li>
                <Link to="/partners" className="footer-link" onClick={handleScrollTop}>
                  Partners
                </Link>
              </li>
              <li>
                <Link to="/ai-assistant" className="footer-link" onClick={handleScrollTop}>
                  Tumiso AI
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link" onClick={handleScrollTop}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Resources</h4>
            <ul className="footer-links-list">
              <li>
                <Link to="/resources#resource-library" className="footer-link">
                  Resource Library
                </Link>
              </li>
              <li>
                <Link to="/resources#free-resources" className="footer-link">
                  Free Downloads
                </Link>
              </li>
              <li>
                <Link to="/resources#learning-hub" className="footer-link">
                  Learning Hub
                </Link>
              </li>
              <li>
                <Link to="/opportunities" className="footer-link">
                  Browse Opportunities
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-col footer-newsletter-col">
            <h4 className="footer-col-title">Newsletter</h4>
            <p className="footer-newsletter-desc">
              Stay connected. Subscribe for the latest Tumbo updates.
            </p>
            <form className="footer-newsletter-form" onSubmit={handleNewsletter}>
              <label className="visually-hidden" htmlFor="footer-newsletter-email">
                Email address
              </label>
              <input
                id="footer-newsletter-email"
                type="email"
                className="footer-newsletter-input"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" className="footer-newsletter-btn" aria-label="Subscribe">
                <Send size={15} />
              </button>
            </form>
            <p className="footer-newsletter-note">Newsletter delivery — Coming Soon</p>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Contact</h4>
            <ul className="footer-contact-list">
              <li className="footer-contact-item">
                <Mail size={14} className="footer-contact-icon email-icon" />
                <a href="mailto:support@tumbo.co.za" className="footer-contact-text">
                  support@tumbo.co.za
                </a>
              </li>
              <li className="footer-contact-item">
                <MapPin size={14} className="footer-contact-icon map-icon" />
                <span className="footer-contact-text">{OFFICE_ADDRESS}</span>
              </li>
              <li className="footer-contact-item">
                <span className="footer-contact-icon social-icon" aria-hidden="true">
                  <InstagramIcon />
                </span>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-contact-text"
                >
                  @ema.tumbo
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">© {currentYear} Tumbo Eye 2.0. All Rights Reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/privacy" className="footer-bottom-link" onClick={handleScrollTop}>
              Privacy Policy
            </Link>
            <span className="footer-bottom-separator">|</span>
            <Link to="/terms" className="footer-bottom-link" onClick={handleScrollTop}>
              Terms &amp; Conditions
            </Link>
            <span className="footer-bottom-separator">|</span>
            <Link to="/contact" className="footer-bottom-link" onClick={handleScrollTop}>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
