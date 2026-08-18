import React from 'react';
import { MessageCircle, Phone, Calendar } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export default function FloatingActions({ onOpenBooking }) {
  return (
    <>
      {/* Floating WhatsApp Action Button for Desktop */}
      <a
        href={`https://wa.me/${CLINIC_INFO.contact.whatsappNumber}?text=Hi%20SLV%20Dental%20Clinic,%20I%20would%20like%20to%20book%20an%20appointment.`}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp"
        aria-label="Chat with SLV Dental Clinic on WhatsApp"
        title="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
      </a>

      {/* Sticky Bottom Bar for Mobile Devices */}
      <div className="mobile-sticky-bar">
        <div className="mobile-sticky-inner">
          <a
            href={`tel:${CLINIC_INFO.contact.phonePrimary}`}
            className="mobile-bar-btn mobile-bar-call"
            aria-label="Call Clinic"
          >
            <Phone size={17} />
            <span>Call</span>
          </a>

          <a
            href={`https://wa.me/${CLINIC_INFO.contact.whatsappNumber}?text=Hi%20SLV%20Dental%20Clinic,%20I%20would%20like%20to%20book%20an%20appointment.`}
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-bar-btn mobile-bar-whatsapp"
            aria-label="WhatsApp"
          >
            <MessageCircle size={17} />
            <span>WhatsApp</span>
          </a>

          <button
            onClick={() => onOpenBooking()}
            className="mobile-bar-btn mobile-bar-book"
            aria-label="Book Appointment"
          >
            <Calendar size={17} />
            <span>Book Appt</span>
          </button>
        </div>
      </div>
    </>
  );
}

