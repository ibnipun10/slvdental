import React from 'react';
import { Clock, MapPin, Navigation, Phone, MessageCircle, Calendar, Sun, Moon, CheckCircle2 } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export default function TimingsAndLocation({ onOpenBooking }) {
  const { timings, address, contact } = CLINIC_INFO;

  return (
    <section id="location" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">
            <Clock size={16} />
            Timings & Clinic Location
          </span>
          <h2 className="section-title">Visit Us in Haralur, Bangalore</h2>
          <p className="section-desc">
            Conveniently located at Birla Circle on Haralur Main Road with morning and evening OPD sessions all 7 days a week.
          </p>
        </div>

        <div className="location-grid">
          {/* Left: Schedule Card */}
          <div className="schedule-card">
            <div className="schedule-header">
              <h3 style={{ fontSize: '1.4rem', color: '#0f172a' }}>Clinic Working Hours</h3>
              <span className="open-all-days-badge">
                <CheckCircle2 size={14} />
                Open All 7 Days
              </span>
            </div>

            {/* Sessions Highlight */}
            <div className="schedule-sessions-row">
              <div className="session-box">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', color: '#d97706', marginBottom: '6px' }}>
                  <Sun size={18} />
                  <h5>Morning Session</h5>
                </div>
                <p>10:00 AM – 01:30 PM</p>
              </div>

              <div className="session-box">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', color: '#0284c7', marginBottom: '6px' }}>
                  <Moon size={18} />
                  <h5>Evening Session</h5>
                </div>
                <p>05:00 PM – 09:00 PM</p>
              </div>
            </div>

            {/* Day by Day Schedule Table */}
            <table className="schedule-table">
              <tbody>
                {timings.detailedSchedule.map((item) => (
                  <tr key={item.day}>
                    <td>{item.day}</td>
                    <td>
                      <span style={{ color: '#0d7c8a', fontWeight: 600 }}>10:00 AM - 1:30 PM</span>
                      <span style={{ margin: '0 8px', color: '#cbd5e1' }}>|</span>
                      <span style={{ color: '#0284c7', fontWeight: 600 }}>5:00 PM - 9:00 PM</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div style={{ marginTop: '24px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <button onClick={() => onOpenBooking()} className="btn btn-primary" style={{ flex: '1 1 auto' }}>
                <Calendar size={16} />
                <span>Reserve a Slot</span>
              </button>
              <a 
                href={`https://wa.me/${contact.whatsappNumber}?text=Hi%20SLV%20Dental,%20is%20a%20slot%20available%20today?`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                <MessageCircle size={16} />
                <span>Check Today's Availability</span>
              </a>
            </div>
          </div>

          {/* Right: Location & Map Card */}
          <div className="location-card">
            <h3 style={{ fontSize: '1.4rem', color: '#0f172a', marginBottom: '18px' }}>
              Find Our Clinic
            </h3>

            {/* Address Details */}
            <div className="address-box">
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <MapPin size={22} color="#0d7c8a" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <h4 className="address-title">SLV Dental Clinic & Implant Centre</h4>
                  <p className="address-text">
                    {address.line1}, {address.line2}, {address.area}, {address.city}, {address.state} — {address.pincode}
                  </p>

                  <div className="landmarks-list">
                    {address.landmarks.map((landmark, idx) => (
                      <span key={idx} className="landmark-pill">
                        📍 {landmark}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="map-embed-wrap">
              <iframe
                title="SLV Dental Clinic Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.28821558231!2d77.65453867598858!3d12.894250687413645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14b6932a9341%3A0xb695eef9a8d9b158!2sSLV%20Dental%20Clinic%20And%20Implant%20Centre!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a
                href={contact.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ flex: '1 1 auto' }}
              >
                <Navigation size={16} />
                <span>Get Directions on Google Maps</span>
              </a>

              <a href={`tel:${contact.phonePrimary}`} className="btn btn-outline-dark">
                <Phone size={16} />
                <span>Call Clinic</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
