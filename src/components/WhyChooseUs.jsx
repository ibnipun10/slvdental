import React from 'react';
import { CheckCircle, Clock, HeartPulse, PhoneCall, ShieldCheck } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/clinicData';

const iconMap = {
  CheckCircle: CheckCircle,
  HeartPulse: HeartPulse,
  Clock: Clock,
  PhoneCall: PhoneCall
};

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">
            <ShieldCheck size={15} />
            The SLV Dental Promise
          </span>
          <h2 className="section-title">Why Patients in Haralur Trust Us</h2>
          <p className="section-desc">
            Ethical dentistry focused purely on preserving your natural teeth with honest advice and transparent care.
          </p>
        </div>

        <div className="why-grid">
          {WHY_CHOOSE_US.map((item, idx) => {
            const IconComp = iconMap[item.icon] || CheckCircle;

            return (
              <div key={idx} className="why-card">
                <div className="why-icon-box">
                  <IconComp size={22} />
                </div>
                <h3 className="why-title">{item.title}</h3>
                <p className="why-desc">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

