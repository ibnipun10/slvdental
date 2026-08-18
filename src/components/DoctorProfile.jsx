import React from 'react';
import { Award, CheckCircle2, Calendar, ShieldCheck, Star, ExternalLink } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export default function DoctorProfile({ onOpenBooking }) {
  const { doctor } = CLINIC_INFO;

  return (
    <section id="doctor" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">
            <Award size={15} />
            Lead Dental Surgeon
          </span>
          <h2 className="section-title">Meet Dr. Abhisheak R Naik</h2>
          <p className="section-desc">
            15+ years of clinical excellence in Oral Medicine, Radiology, and Conservative Dentistry in Haralur.
          </p>
        </div>

        <div className="doctor-card">
          {/* Doctor Image */}
          <div className="doctor-img-container">
            <img 
              src={doctor.photo} 
              alt={doctor.name} 
              className="doctor-photo"
            />
            <div className="doctor-experience-tag">
              <Award size={16} />
              <span>15+ Years Experience • BDS, MDS</span>
            </div>
          </div>

          {/* Doctor Info */}
          <div className="doctor-details">
            <div className="doctor-badge-row">
              <span className="prime-verified-badge">
                <ShieldCheck size={14} />
                Practo Prime Verified
              </span>
              <span className="recommend-badge">
                <Star size={14} fill="#15803d" />
                5.0 ★ (455+ Stories)
              </span>
            </div>

            <h3 className="doctor-name">{doctor.name}</h3>
            <p className="doctor-degrees">{doctor.degrees}</p>

            <p className="doctor-bio">
              {doctor.shortBio}
            </p>

            {/* Quick Highlights List */}
            <div className="doctor-highlights-list">
              {doctor.highlights.map((item, idx) => (
                <div key={idx} className="doc-highlight-item">
                  <CheckCircle2 size={16} className="text-primary" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="doctor-cta-row">
              <button onClick={() => onOpenBooking()} className="btn btn-primary">
                <Calendar size={16} />
                <span>Book Doctor Consultation (₹350)</span>
              </button>

              <a 
                href={CLINIC_INFO.contact.practoUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-outline-dark btn-sm"
              >
                <span>Practo Profile</span>
                <ExternalLink size={13} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

