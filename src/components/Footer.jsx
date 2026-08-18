import React from 'react';
import { Sparkles, MapPin, Phone, Clock, Star, ExternalLink, MessageCircle } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export default function Footer({ onOpenBooking }) {
  const { contact, address } = CLINIC_INFO;

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-brand">
            <div className="footer-brand-header">
              <div className="brand-icon-box" style={{ width: '34px', height: '34px' }}>
                <Sparkles size={18} />
              </div>
              <h3 style={{ margin: 0, fontSize: '1.2rem', color: '#fff' }}>{CLINIC_INFO.name}</h3>
            </div>
            
            <p style={{ fontSize: '0.875rem', color: '#94a3b8', lineHeight: '1.6', marginTop: '12px' }}>
              Advanced multi-speciality dental clinic in Haralur led by <strong>Dr. Abhisheak R Naik (BDS, MDS)</strong>. Honest diagnostics, painless root canals, dental implants & gentle oral surgery.
            </p>

            <div className="footer-rating-pill">
              <Star size={14} fill="#f59e0b" color="#f59e0b" />
              <span>5.0 / 5.0 Rating (455+ Verified Patient Stories)</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#services" className="footer-link">Dental Treatments</a></li>
              <li><a href="#doctor" className="footer-link">Dr. Abhisheak R Naik</a></li>
              <li><a href="#why-us" className="footer-link">Why Choose Us</a></li>
              <li><a href="#reviews" className="footer-link">Patient Reviews</a></li>
              <li><a href="#location" className="footer-link">Timings & Location</a></li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="footer-column">
            <h4>Clinic & Appointments</h4>
            
            <div className="footer-contact-item">
              <MapPin size={16} />
              <span>{address.line1}, {address.line2}, {address.area} (Opp. Passion Apartment)</span>
            </div>

            <div className="footer-contact-item">
              <Phone size={16} />
              <a href={`tel:${contact.phonePrimary}`} style={{ color: '#fff', fontWeight: 600 }}>
                {contact.phoneDisplay}
              </a>
            </div>

            <div className="footer-contact-item">
              <Clock size={16} />
              <span>Mon – Sun: 10:00 AM – 2:00 PM & 5:00 PM – 9:00 PM</span>
            </div>

            <div className="footer-social-links">
              <a 
                href={contact.practoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-outline-dark btn-sm"
                style={{ color: '#e2e8f0', borderColor: 'rgba(255,255,255,0.2)' }}
              >
                <span>Practo Profile</span>
                <ExternalLink size={12} />
              </a>

              <a 
                href={contact.googleShareUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-outline-dark btn-sm"
                style={{ color: '#e2e8f0', borderColor: 'rgba(255,255,255,0.2)' }}
              >
                <span>Google Maps</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div>
            © {new Date().getFullYear()} {CLINIC_INFO.name}. Birla Circle, Haralur Main Road, Bangalore.
          </div>
          <div>
            Dr. Abhisheak R Naik (BDS, MDS) • 15+ Yrs Experience
          </div>
        </div>
      </div>
    </footer>
  );
}

