import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, Phone, Sparkles } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export default function Navbar({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Meet the Doctor', href: '#doctor' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Timings & Location', href: '#location' },
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
              <Sparkles size={22} />
            </div>
            <div className="brand-text">
              <h1>SLV Dental</h1>
              <span>Clinic & Implant Centre</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
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
              className="btn btn-outline-dark btn-sm"
              style={{ display: 'none' }}
            >
              <Phone size={16} />
              <span>{CLINIC_INFO.contact.phoneDisplay}</span>
            </a>

            <button 
              onClick={() => onOpenBooking()} 
              className="btn btn-primary btn-sm"
            >
              <Calendar size={16} />
              <span>Book Appointment</span>
            </button>

            {/* Mobile menu toggle */}
            <button 
              className="mobile-menu-toggle" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer">
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="nav-link" 
                  style={{ fontSize: '1.1rem', display: 'block', padding: '8px 0' }}
                  onClick={handleLinkClick}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '16px' }}>
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
              className="btn btn-secondary btn-lg"
              style={{ width: '100%' }}
            >
              <Phone size={18} />
              <span>Call Clinic ({CLINIC_INFO.contact.phoneDisplay})</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
