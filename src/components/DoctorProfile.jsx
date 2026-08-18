import React from 'react';
import { Award, CheckCircle2, HeartHandshake, PhoneCall, Calendar, ShieldCheck, Star } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export default function DoctorProfile({ onOpenBooking }) {
  const { doctor } = CLINIC_INFO;

  return (
    <section id="doctor" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">
            <Award size={16} />
            Lead Dental Surgeon
          </span>
          <h2 className="section-title">Meet Dr. Abhisheak R Naik</h2>
          <p className="section-desc">
            15+ years of specialized clinical experience in Oral Medicine, Digital Radiology, and Cosmetic Surgery, committed to ethical, conservative dental care.
          </p>
        </div>

        <div className="doctor-card">
          {/* Doctor Image Container */}
          <div className="doctor-img-container">
            <img 
              src={doctor.photo} 
              alt={doctor.name} 
              className="doctor-photo"
            />
            <div className="doctor-experience-tag">
              <Award size={18} className="text-primary" />
              <span>15+ Years Overall Clinical Experience</span>
            </div>
          </div>

          {/* Doctor Details */}
          <div className="doctor-details">
            <div className="doctor-badge-row">
              <span className="prime-verified-badge">
                <ShieldCheck size={14} />
                Practo Prime Verified
              </span>
              <span className="recommend-badge">
                <Star size={14} fill="#15803d" />
                100% Recommended (455+ Votes)
              </span>
            </div>

            <h3 className="doctor-name">{doctor.name}</h3>
            <p className="doctor-degrees">{doctor.degrees}</p>

            <p className="doctor-bio">
              {doctor.bio}
            </p>

            {/* Core Pillars */}
            <div className="doctor-pillars">
              <div className="pillar-box">
                <h5>
                  <CheckCircle2 size={16} color="#0d7c8a" />
                  Honest Diagnostics First
                </h5>
                <p>No unnecessary procedures. If sensitivity paste or preventive treatment works, we tell you openly.</p>
              </div>

              <div className="pillar-box">
                <h5>
                  <PhoneCall size={16} color="#0d7c8a" />
                  Post-Procedure WhatsApp Care
                </h5>
                <p>Personal check-ins after every extraction or root canal to ensure quick healing without stress.</p>
              </div>

              <div className="pillar-box">
                <h5>
                  <HeartHandshake size={16} color="#0d7c8a" />
                  Gentle & Empathetic Approach
                </h5>
                <p>Detailed explanations on digital screens so you feel calm, informed, and in control of your health.</p>
              </div>

              <div className="pillar-box">
                <h5>
                  <ShieldCheck size={16} color="#0d7c8a" />
                  Precision Oral Radiology
                </h5>
                <p>Specialized MDS radiology training ensures pinpoint diagnosis of hidden decay, TMJ, and bone health.</p>
              </div>
            </div>

            {/* Actions */}
            <div className="doctor-cta-row">
              <button onClick={() => onOpenBooking()} className="btn btn-primary">
                <Calendar size={16} />
                <span>Consult Dr. Abhisheak (₹350)</span>
              </button>

              <a 
                href={CLINIC_INFO.contact.practoUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-outline-dark btn-sm"
              >
                <span>View Practo Profile & Stories →</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
