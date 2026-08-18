import React from 'react';
import { Star, CheckCircle, Calendar, MessageCircle, Phone, Award, ShieldCheck, Clock } from 'lucide-react';
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
                  <Star key={i} size={16} fill="#f59e0b" color="#f59e0b" />
                ))}
              </div>
              <div className="hero-rating-text">
                <strong>5.0 / 5.0</strong> Rating <span>(455+ Verified Patient Stories)</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="hero-title">
              Painless Dental Care with <span className="highlight-text">Honest Diagnosis</span> in Haralur
            </h1>

            {/* Subtitle */}
            <p className="hero-desc">
              Led by <strong>Dr. Abhisheak R Naik</strong> (BDS, MDS Oral Medicine & Radiology with 15+ Years Experience). Specializing in painless single-sitting Root Canals, Dental Implants, 15-minute Wisdom Tooth Extractions & Cosmetic Smile Makeovers.
            </p>

            {/* Key Value Points */}
            <div className="hero-highlights">
              <div className="hero-highlight-item">
                <CheckCircle size={18} />
                <span>Honest Diagnosis (No Unneeded RCTs)</span>
              </div>
              <div className="hero-highlight-item">
                <CheckCircle size={18} />
                <span>Open All 7 Days (Morning & Evening)</span>
              </div>
              <div className="hero-highlight-item">
                <CheckCircle size={18} />
                <span>In-House Digital Mini X-Rays</span>
              </div>
              <div className="hero-highlight-item">
                <CheckCircle size={18} />
                <span>Personal WhatsApp Post-Op Follow-up</span>
              </div>
            </div>

            {/* Call To Action Row */}
            <div className="hero-cta-group">
              <button onClick={() => onOpenBooking()} className="btn btn-primary btn-lg">
                <Calendar size={18} />
                <span>Book Appointment</span>
              </button>

              <a 
                href={`https://wa.me/${CLINIC_INFO.contact.whatsappNumber}?text=Hi%20Dr.%20Abhisheak,%20I%20would%20like%20to%20consult%20regarding%20dental%20treatment%20at%20SLV%20Dental%20Clinic.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-lg"
              >
                <MessageCircle size={18} />
                <span>Chat on WhatsApp</span>
              </a>

              <a href={`tel:${CLINIC_INFO.contact.phonePrimary}`} className="btn btn-outline-dark btn-lg">
                <Phone size={18} />
                <span>Call Clinic</span>
              </a>
            </div>

            {/* Consultation Fee Callout */}
            <div className="hero-fee-badge">
              <ShieldCheck size={18} />
              <span>Standard Consultation: ₹350 • No Hidden Booking Fees • 100% Sterilized Operatory</span>
            </div>
          </div>

          {/* Right Hero Visual Card */}
          <div className="hero-visual-card">
            {/* Top floating badge */}
            <div className="hero-floating-badge-top">
              <div className="badge-circle-icon">
                <Award size={20} />
              </div>
              <div>
                <strong style={{ fontSize: '0.875rem', color: '#0f172a', display: 'block' }}>Practo Prime Verified</strong>
                <span style={{ fontSize: '0.75rem', color: '#10b981', fontWeight: 700 }}>100% Patient Recommended</span>
              </div>
            </div>

            {/* Main Clinic Image */}
            <div className="hero-main-img-wrap">
              <img 
                src={clinicChair} 
                alt="SLV Dental Clinic Modern Operatory" 
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
                <p>BDS, MDS - Oral Medicine & Radiology (15+ Yrs Exp)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
