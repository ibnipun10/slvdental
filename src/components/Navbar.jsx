import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, Phone, Sparkles } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export default function Navbar({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Treatments', href: '#services' },
    { name: 'Dr. Abhisheak', href: '#doctor' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Location & Hours', href: '#location' },
    { name: 'FAQ', href: '#faq' }
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-inner">
          {/* Brand Logo */}
          <a href="#" className="brand-logo">
            <div className="brand-icon-box">
              <Sparkles size={20} />
            </div>
            <div className="brand-text">
              <span className="brand-name">SLV Dental</span>
              <span className="brand-sub">Clinic & Implant Centre</span>
            </div>
          </a>

          {/* Desktop Links */}
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="nav-link">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Nav Actions */}
          <div className="nav-actions">
            <a 
              href={`tel:${CLINIC_INFO.contact.phonePrimary}`} 
              className="btn btn-outline-dark btn-sm desktop-only-btn"
            >
              <Phone size={15} />
              <span>Call Clinic</span>
            </a>

            <button 
              onClick={() => onOpenBooking()} 
              className="btn btn-primary btn-sm"
            >
              <Calendar size={15} />
              <span>Book ₹350</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button 
              className="mobile-menu-toggle" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer" onClick={handleLinkClick}>
          <div className="mobile-drawer-content" onClick={(e) => e.stopPropagation()}>
            <ul className="mobile-nav-list">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="mobile-nav-link" 
                    onClick={handleLinkClick}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mobile-drawer-actions">
              <button 
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }} 
                className="btn btn-primary btn-lg"
                style={{ width: '100%' }}
              >
                <Calendar size={18} />
                <span>Book Appointment (₹350)</span>
              </button>

              <a 
                href={`tel:${CLINIC_INFO.contact.phonePrimary}`} 
                className="btn btn-outline-dark btn-lg"
                style={{ width: '100%' }}
              >
                <Phone size={18} />
                <span>Call {CLINIC_INFO.contact.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

