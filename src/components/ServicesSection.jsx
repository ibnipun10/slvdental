import React, { useState } from 'react';
import { 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  Smile, 
  Activity, 
  Layers, 
  Moon, 
  Grid, 
  Scan, 
  HeartHandshake, 
  ChevronDown, 
  ChevronUp, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { CORE_SERVICES, MORE_SERVICES } from '../data/clinicData';

const iconMap = {
  Sparkles: Sparkles,
  ShieldCheck: ShieldCheck,
  Zap: Zap,
  Smile: Smile,
  Activity: Activity,
  Layers: Layers,
  Moon: Moon,
  Grid: Grid,
  Scan: Scan,
  HeartHandshake: HeartHandshake
};

export default function ServicesSection({ onOpenBooking }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="services" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">
            <Sparkles size={15} />
            Key Dental Treatments
          </span>
          <h2 className="section-title">Gentle, Tech-Driven Dental Solutions</h2>
          <p className="section-desc">
            Painless procedures, modern equipment, and conservative treatment plans designed for long-term oral health.
          </p>
        </div>

        {/* 6 Core Services Grid */}
        <div className="services-grid">
          {CORE_SERVICES.map((service) => {
            const IconComponent = iconMap[service.icon] || Sparkles;

            return (
              <div key={service.id} className="service-card">
                <div className="service-header">
                  <div className="service-icon-box">
                    <IconComponent size={22} />
                  </div>
                  <span className="service-tag">{service.tag}</span>
                </div>

                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.desc}</p>

                <div className="service-key-point">
                  <CheckCircle2 size={14} className="text-primary" />
                  <span>{service.highlight}</span>
                </div>

                <div className="service-footer">
                  <button 
                    onClick={() => onOpenBooking(service.title)}
                    className="service-book-btn"
                  >
                    <span>Book Treatment</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Expandable More Treatments */}
        {showMore && (
          <div className="more-services-grid" style={{ marginTop: '24px' }}>
            {MORE_SERVICES.map((service) => {
              const IconComponent = iconMap[service.icon] || Sparkles;

              return (
                <div key={service.id} className="service-card more-card">
                  <div className="service-header">
                    <div className="service-icon-box">
                      <IconComponent size={20} />
                    </div>
                    <span className="service-tag">{service.tag}</span>
                  </div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-desc">{service.desc}</p>
                  <div className="service-footer">
                    <button 
                      onClick={() => onOpenBooking(service.title)}
                      className="service-book-btn"
                    >
                      <span>Book Slot</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Toggle Button for More Services */}
        <div style={{ textAlign: 'center', marginTop: '32px' }}>
          <button 
            className="btn btn-outline-dark btn-sm"
            onClick={() => setShowMore(!showMore)}
          >
            <span>{showMore ? "Show Fewer Treatments" : "View All Specialized Treatments (+4)"}</span>
            {showMore ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
        </div>
      </div>
    </section>
  );
}

