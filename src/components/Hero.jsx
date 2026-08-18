import React from 'react';
import { Star, CheckCircle, Calendar, MessageCircle, Phone, ShieldCheck } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import clinicChair from '../assets/clinic_chair.jpg';

export default function Hero({ onOpenBooking }) {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Left Hero Content */}
          <div className="hero-content">
            {/* Rating Pill */}
            <div className="hero-rating-pill">
              <div className="hero-rating-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} fill="#f59e0b" color="#f59e0b" />
                ))}
              </div>
              <div className="hero-rating-text">
                <strong>5.0 / 5.0</strong> <span>(455+ Practo & Google Stories)</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="hero-title">
              Painless Dental Care with <span className="highlight-text">Honest Diagnosis</span> in Haralur
            </h1>

            {/* Subtitle */}
            <p className="hero-desc">
              Led by <strong>Dr. Abhisheak R Naik</strong> (BDS, MDS Oral Medicine & Radiology • 15+ Years Exp). Painless Root Canals, Implants & 15-Minute Extractions with conservative care.
            </p>

            {/* Key Quick Badges */}
            <div className="hero-badges-row">
              <span className="hero-badge-chip">
                <CheckCircle size={15} />
                <span>No Unneeded RCTs</span>
              </span>
              <span className="hero-badge-chip">
                <CheckCircle size={15} />
                <span>Open All 7 Days</span>
              </span>
              <span className="hero-badge-chip">
                <CheckCircle size={15} />
                <span>Digital Mini X-Rays</span>
              </span>
            </div>

            {/* Call To Action Buttons */}
            <div className="hero-cta-group">
              <button onClick={() => onOpenBooking()} className="btn btn-primary btn-lg">
                <Calendar size={18} />
                <span>Book Appointment (₹350)</span>
              </button>

              <a 
                href={`https://wa.me/${CLINIC_INFO.contact.whatsappNumber}?text=Hi%20Dr.%20Abhisheak,%20I%20would%20like%20to%20consult%20regarding%20dental%20treatment%20at%20SLV%20Dental%20Clinic.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-lg"
              >
                <MessageCircle size={18} />
                <span>WhatsApp</span>
              </a>

              <a href={`tel:${CLINIC_INFO.contact.phonePrimary}`} className="btn btn-outline-dark btn-lg hero-call-btn">
                <Phone size={18} />
                <span>Call Clinic</span>
              </a>
            </div>

            {/* Trust Micro-bar */}
            <div className="hero-trust-note">
              <ShieldCheck size={16} />
              <span>₹350 Consultation • Birla Circle, Haralur • 100% Sterilized Operatory</span>
            </div>
          </div>

          {/* Right Hero Visual Card */}
          <div className="hero-visual-card">
            <div className="hero-main-img-wrap">
              <img 
                src={clinicChair} 
                alt="SLV Dental Clinic Operatory" 
                className="hero-main-img"
              />
            </div>

            {/* Floating Doctor Profile Card */}
            <div className="hero-floating-doctor">
              <img 
                src={CLINIC_INFO.doctor.photo} 
                alt={CLINIC_INFO.doctor.name} 
                className="hero-doc-avatar"
              />
              <div className="hero-doc-info">
                <h4>{CLINIC_INFO.doctor.name}</h4>
                <p>BDS, MDS • 15+ Yrs Clinical Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

