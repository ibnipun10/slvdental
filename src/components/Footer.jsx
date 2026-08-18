import React from 'react';
import { Sparkles, MapPin, Phone, Mail, Clock, ShieldCheck, Star, ExternalLink } from 'lucide-react';
import { CLINIC_INFO, SERVICES_LIST } from '../data/clinicData';

export default function Footer({ onOpenBooking }) {
  const { contact, address, doctor } = CLINIC_INFO;

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-brand">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <div className="brand-icon-box" style={{ width: '38px', height: '38px' }}>
                <Sparkles size={20} />
              </div>
              <h3 style={{ margin: 0, fontSize: '1.25rem' }}>{CLINIC_INFO.name}</h3>
            </div>
            
            <p>
              Premier multi-speciality dental clinic and implant center in Haralur, Bangalore. Led by Dr. Abhisheak R Naik (BDS, MDS). Specializing in painless root canals, implants, cosmetic dentistry, and gentle oral surgery.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#f59e0b', fontSize: '0.875rem', fontWeight: 700 }}>
              <Star size={16} fill="#f59e0b" />
              <span>5.0 / 5.0 Rating (455+ Verified Patient Stories)</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#services" className="footer-link">Dental Treatments</a></li>
              <li><a href="#doctor" className="footer-link">Meet Dr. Abhisheak</a></li>
              <li><a href="#why-us" className="footer-link">Why Choose Us</a></li>
              <li><a href="#reviews" className="footer-link">Patient Reviews</a></li>
              <li><a href="#gallery" className="footer-link">Clinic Gallery</a></li>
              <li><a href="#location" className="footer-link">Timings & Directions</a></li>
              <li><a href="#faq" className="footer-link">FAQs</a></li>
            </ul>
          </div>

          {/* Top Treatments */}
          <div className="footer-column">
            <h4>Key Services</h4>
            <ul className="footer-links">
              <li><a href="#services" className="footer-link">Root Canal Treatment (RCT)</a></li>
              <li><a href="#services" className="footer-link">Dental Implants & Crowns</a></li>
              <li><a href="#services" className="footer-link">Wisdom Tooth Extraction</a></li>
              <li><a href="#services" className="footer-link">Cosmetic Smile Makeover</a></li>
              <li><a href="#services" className="footer-link">Teeth Cleaning & Scaling</a></li>
              <li><a href="#services" className="footer-link">Laser Gum Therapy</a></li>
              <li><a href="#services" className="footer-link">TMJ & Bruxism Night Guards</a></li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="footer-column">
            <h4>Clinic Contact</h4>
            
            <div className="footer-contact-item">
              <MapPin size={18} />
              <span>
                {address.line1}, {address.line2}, {address.city} — {address.pincode}
                <br />
                <em style={{ color: '#94a3b8', fontSize: '0.8rem' }}>({address.landmarks.join(', ')})</em>
              </span>
            </div>

            <div className="footer-contact-item">
              <Phone size={18} />
              <a href={`tel:${contact.phonePrimary}`} style={{ color: '#ffffff', fontWeight: 600 }}>
                {contact.phoneDisplay}
              </a>
            </div>

            <div className="footer-contact-item">
              <Mail size={18} />
              <span>{contact.email}</span>
            </div>

            <div className="footer-contact-item">
              <Clock size={18} />
              <span>
                Mon - Sun: 10:00 AM - 1:30 PM & 5:00 PM - 9:00 PM
              </span>
            </div>

            <div style={{ marginTop: '16px', display: 'flex', gap: '8px' }}>
              <a 
                href={contact.practoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-outline-dark btn-sm"
                style={{ color: '#e2e8f0', borderColor: 'rgba(255,255,255,0.2)' }}
              >
                <span>Practo</span>
                <ExternalLink size={12} />
              </a>

              <a 
                href={contact.googleShareUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-outline-dark btn-sm"
                style={{ color: '#e2e8f0', borderColor: 'rgba(255,255,255,0.2)' }}
              >
                <span>Google</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div>
            © {new Date().getFullYear()} {CLINIC_INFO.name}. All rights reserved. Haralur, Bangalore.
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <span>Consultation: ₹350</span>
            <span>•</span>
            <span>Dr. Abhisheak R Naik (BDS, MDS)</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
