import React from 'react';
import { MessageCircle, Phone, Calendar } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export default function FloatingActions({ onOpenBooking }) {
  return (
    <>
      {/* Floating WhatsApp Action Button */}
      <a
        href={`https://wa.me/${CLINIC_INFO.contact.whatsappNumber}?text=Hi%20SLV%20Dental%20Clinic,%20I%20would%20like%20to%20book%20an%20appointment.`}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp"
        aria-label="Chat with SLV Dental Clinic on WhatsApp"
        title="Chat on WhatsApp"
      >
        <MessageCircle size={30} />
      </a>

      {/* Sticky Bottom Bar for Mobile Devices */}
      <div className="mobile-sticky-bar">
        <div className="mobile-sticky-inner">
          <a
            href={`tel:${CLINIC_INFO.contact.phonePrimary}`}
            className="btn btn-secondary btn-sm"
            style={{ width: '100%', padding: '10px 12px' }}
          >
            <Phone size={16} />
            <span>Call Now</span>
          </a>

          <button
            onClick={() => onOpenBooking()}
            className="btn btn-primary btn-sm"
            style={{ width: '100%', padding: '10px 12px' }}
          >
            <Calendar size={16} />
            <span>Book (₹350)</span>
          </button>
        </div>
      </div>
    </>
  );
}
