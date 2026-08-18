import React from 'react';
import { 
  CheckCircle, 
  Clock, 
  Scan, 
  HeartPulse, 
  PhoneCall, 
  Shield, 
  ShieldCheck 
} from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/clinicData';

const iconMap = {
  CheckCircle: CheckCircle,
  Clock: Clock,
  Scan: Scan,
  HeartPulse: HeartPulse,
  PhoneCall: PhoneCall,
  Shield: Shield
};

export default function WhyChooseUs({ onOpenBooking }) {
  return (
    <section id="why-us" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">
            <ShieldCheck size={16} />
            The SLV Dental Difference
          </span>
          <h2 className="section-title">Why Patients in Haralur Trust Us</h2>
          <p className="section-desc">
            We believe dental visits should be transparent, gentle, and strictly focused on what is genuinely best for your natural teeth.
          </p>
        </div>

        <div className="why-grid">
          {WHY_CHOOSE_US.map((item, idx) => {
            const IconComp = iconMap[item.icon] || CheckCircle;

            return (
              <div key={idx} className="why-card">
                <div className="why-icon-box">
                  <IconComp size={26} />
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
