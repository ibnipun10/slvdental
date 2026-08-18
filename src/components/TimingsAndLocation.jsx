import React from 'react';
import { Clock, MapPin, Navigation, Phone, MessageCircle, Calendar, Sun, Moon, CheckCircle2 } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export default function TimingsAndLocation({ onOpenBooking }) {
  const { address, contact, timings } = CLINIC_INFO;

  return (
    <section id="location" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">
            <Clock size={15} />
            Timings & Location
          </span>
          <h2 className="section-title">Visit Us in Haralur, Bangalore</h2>
          <p className="section-desc">
            Conveniently located at Birla Circle on Haralur Main Road with morning and evening sessions every day.
          </p>
        </div>

        <div className="location-grid">
          {/* Left: Schedule Card */}
          <div className="schedule-card">
            <div className="schedule-header">
              <h3 style={{ fontSize: '1.25rem', color: '#0f172a' }}>Working Hours</h3>
              <span className="open-all-days-badge">
                <CheckCircle2 size={13} />
                Open All 7 Days
              </span>
            </div>

            {/* Sessions Highlight */}
            <div className="schedule-sessions-row">
              <div className="session-box">
                <div className="session-header-tag morning">
                  <Sun size={16} />
                  <span>Morning OPD</span>
                </div>
                <div className="session-time-text">{timings.morning}</div>
              </div>

              <div className="session-box">
                <div className="session-header-tag evening">
                  <Moon size={16} />
                  <span>Evening OPD</span>
                </div>
                <div className="session-time-text">{timings.evening}</div>
              </div>
            </div>

            <div className="schedule-note">
              <p>🗓️ <strong>Monday – Sunday:</strong> Both morning and evening slots open. Emergency same-day appointments available.</p>
            </div>

            <div className="schedule-btn-group">
              <button onClick={() => onOpenBooking()} className="btn btn-primary" style={{ flex: '1 1 auto' }}>
                <Calendar size={15} />
                <span>Book Appointment</span>
              </button>
              <a 
                href={`https://wa.me/${contact.whatsappNumber}?text=Hi%20SLV%20Dental,%20is%20a%20slot%20available%20today?`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                <MessageCircle size={15} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right: Address & Map Card */}
          <div className="location-card">
            <div className="address-box">
              <MapPin size={20} className="text-primary" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <h4 className="address-title">SLV Dental Clinic & Implant Centre</h4>
                <p className="address-text">
                  {address.line1}, {address.line2}, {address.area} — {address.pincode}
                </p>
                <span className="landmark-pill">
                  📍 {address.landmarks}
                </span>
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="map-embed-wrap">
              <iframe
                title="SLV Dental Clinic Location"
                src={contact.googleMapsEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Map Actions */}
            <div className="location-actions-row">
              <a
                href={contact.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
                style={{ flex: '1 1 auto' }}
              >
                <Navigation size={15} />
                <span>Get Directions on Google Maps</span>
              </a>

              <a href={`tel:${contact.phonePrimary}`} className="btn btn-outline-dark btn-sm">
                <Phone size={15} />
                <span>Call Clinic</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

