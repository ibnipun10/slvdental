import React from 'react';
import { Phone, Clock, MapPin, MessageCircle } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export default function TopBar() {
  return (
    <div className="top-bar">
      <div className="container top-bar-inner">
        <div className="top-bar-left">
          <div className="top-bar-item">
            <Clock size={14} className="text-primary" />
            <span>Open All 7 Days: <strong>10:00 AM - 1:30 PM | 5:00 PM - 9:00 PM</strong></span>
          </div>
          <div className="top-bar-item">
            <MapPin size={14} className="text-primary" />
            <span>Birla Circle, Haralur, Bangalore</span>
          </div>
        </div>

        <div className="top-bar-right">
          <a href={`tel:${CLINIC_INFO.contact.phonePrimary}`} className="top-bar-item hover:text-white transition">
            <Phone size={14} />
            <span>Call: <strong>{CLINIC_INFO.contact.phoneDisplay}</strong></span>
          </a>
          <a 
            href={`https://wa.me/${CLINIC_INFO.contact.whatsappNumber}?text=Hi%20SLV%20Dental%20Clinic,%20I%20would%20like%20to%20book%20an%20appointment.`}
            target="_blank" 
            rel="noopener noreferrer"
            className="top-bar-item hover:text-green-300 transition"
          >
            <MessageCircle size={14} />
            <span>WhatsApp Appointment</span>
          </a>
        </div>
      </div>
    </div>
  );
}
