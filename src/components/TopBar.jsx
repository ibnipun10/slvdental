import React from 'react';
import { Clock, MapPin, Phone, MessageCircle } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export default function TopBar() {
  return (
    <div className="top-bar">
      <div className="container top-bar-inner">
        <div className="top-bar-left">
          <span className="top-bar-item">
            <Clock size={13} />
            <span>Mon–Sun: <strong>10am–1:30pm | 5pm–9pm</strong></span>
          </span>
          <span className="top-bar-item">
            <MapPin size={13} />
            <span>Birla Circle, Haralur</span>
          </span>
        </div>

        <div className="top-bar-right">
          <a href={`tel:${CLINIC_INFO.contact.phonePrimary}`} className="top-bar-item">
            <Phone size={13} />
            <span>{CLINIC_INFO.contact.phoneDisplay}</span>
          </a>
          <a 
            href={`https://wa.me/${CLINIC_INFO.contact.whatsappNumber}?text=Hi%20SLV%20Dental%20Clinic,%20I%20would%20like%20to%20book%20an%20appointment.`}
            target="_blank" 
            rel="noopener noreferrer"
            className="top-bar-item top-bar-whatsapp"
          >
            <MessageCircle size={13} />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}

