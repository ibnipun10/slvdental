import React, { useState } from 'react';
import { 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  Smile, 
  Layers, 
  Activity, 
  Moon, 
  Grid, 
  Scan, 
  HeartHandshake, 
  PhoneCall, 
  Clock, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';
import { SERVICES_CATEGORIES, SERVICES_LIST } from '../data/clinicData';

// Map icon string names to Lucide icon components
const iconMap = {
  Sparkles: Sparkles,
  ShieldCheck: ShieldCheck,
  Zap: Zap,
  Smile: Smile,
  Layers: Layers,
  Activity: Activity,
  Moon: Moon,
  Grid: Grid,
  Scan: Scan,
  HeartHandshake: HeartHandshake,
  PhoneCall: PhoneCall
};

export default function ServicesSection({ onOpenBooking }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredServices = activeCategory === 'All'
    ? SERVICES_LIST
    : SERVICES_LIST.filter(s => s.category === activeCategory);

  return (
    <section id="services" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">
            <Sparkles size={16} />
            Comprehensive Dental Treatments
          </span>
          <h2 className="section-title">World-Class Dental Solutions Under One Roof</h2>
          <p className="section-desc">
            From single-sitting painless root canals to permanent titanium dental implants and cosmetic smile design, experience gentle, tech-driven dentistry in Haralur.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="services-tabs">
          {SERVICES_CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`tab-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {filteredServices.map((service) => {
            const IconComponent = iconMap[service.icon] || Sparkles;

            return (
              <div key={service.id} className="service-card">
                <div className="service-header">
                  <div className="service-icon-box">
                    <IconComponent size={24} />
                  </div>
                  <span className="service-tag">{service.tag}</span>
                </div>

                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.shortDesc}</p>

                <ul className="service-benefits-list">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="service-benefit-item">
                      <CheckCircle2 size={15} />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                <div className="service-footer">
                  <div className="service-duration">
                    <Clock size={14} />
                    <span>{service.duration}</span>
                  </div>

                  <button 
                    onClick={() => onOpenBooking(service.title)}
                    className="service-action-link"
                  >
                    <span>Book Slot</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
