import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, User, Phone, MessageSquare, CheckCircle, MessageCircle, ShieldCheck } from 'lucide-react';
import { CLINIC_INFO, SERVICES_LIST } from '../data/clinicData';

export default function AppointmentModal({ isOpen, onClose, preselectedTreatment }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    treatment: preselectedTreatment || 'General Consultation & Checkup',
    preferredDate: '',
    preferredSlot: 'Morning (10:00 AM - 01:30 PM)',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedTreatment) {
      setFormData(prev => ({ ...prev, treatment: preselectedTreatment }));
    }
  }, [preselectedTreatment]);

  // Set default minimum date to today
  const today = new Date().toISOString().split('T')[0];

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello SLV Dental Clinic,\n\nI would like to book an appointment:\n• Name: ${formData.name || 'Patient'}\n• Phone: ${formData.phone || 'Not provided'}\n• Treatment: ${formData.treatment}\n• Preferred Date: ${formData.preferredDate || 'Earliest available'}\n• Preferred Slot: ${formData.preferredSlot}\n${formData.notes ? `• Notes: ${formData.notes}` : ''}`
    );
    window.open(`https://wa.me/${CLINIC_INFO.contact.whatsappNumber}?text=${text}`, '_blank');
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      treatment: 'General Consultation & Checkup',
      preferredDate: '',
      preferredSlot: 'Morning (10:00 AM - 01:30 PM)',
      notes: ''
    });
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={handleReset}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={handleReset} aria-label="Close modal">
          <X size={20} />
        </button>

        {!submitted ? (
          <>
            <div className="modal-header">
              <span className="prime-verified-badge" style={{ marginBottom: '8px' }}>
                <ShieldCheck size={14} />
                Doctor Consultation: ₹350
              </span>
              <h3>Book a Dental Appointment</h3>
              <p>Reserve a consultation with Dr. Abhisheak R Naik at our Haralur clinic.</p>
            </div>

            <form onSubmit={handleSubmit} className="booking-form">
              {/* Treatment Selection */}
              <div className="form-group">
                <label>Treatment / Reason for Visit *</label>
                <select
                  className="form-select"
                  value={formData.treatment}
                  onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                  required
                >
                  <option value="General Consultation & Checkup">General Consultation & Checkup (₹350)</option>
                  <option value="Severe Toothache / Emergency">Acute Toothache / Dental Emergency</option>
                  {SERVICES_LIST.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* Name & Phone */}
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name *</label>
                  <div style={{ position: 'relative' }}>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Phone Number *</label>
                  <div style={{ position: 'relative' }}>
                    <input
                      type="tel"
                      className="form-input"
                      placeholder="10-digit mobile number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Date & Time Slot */}
              <div className="form-row">
                <div className="form-group">
                  <label>Preferred Date *</label>
                  <input
                    type="date"
                    min={today}
                    className="form-input"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Preferred OPD Slot *</label>
                  <select
                    className="form-select"
                    value={formData.preferredSlot}
                    onChange={(e) => setFormData({ ...formData, preferredSlot: e.target.value })}
                    required
                  >
                    <option value="Morning (10:00 AM - 01:30 PM)">Morning: 10:00 AM – 01:30 PM</option>
                    <option value="Evening (05:00 PM - 09:00 PM)">Evening: 05:00 PM – 09:00 PM</option>
                  </select>
                </div>
              </div>

              {/* Optional Notes */}
              <div className="form-group">
                <label>Any symptoms or details (Optional)</label>
                <textarea
                  className="form-textarea"
                  rows={2}
                  placeholder="Describe your symptoms (e.g. sensitivity, bleeding gums, jaw pain)..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                />
              </div>

              {/* Submit Buttons */}
              <div className="form-submit-row">
                <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                  <Calendar size={18} />
                  <span>Confirm Appointment Request</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="btn btn-whatsapp"
                  style={{ width: '100%' }}
                >
                  <MessageCircle size={18} />
                  <span>Book Instantly via WhatsApp</span>
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="success-box">
            <div className="success-icon">
              <CheckCircle size={32} />
            </div>
            <h3 style={{ fontSize: '1.4rem', color: '#0f172a' }}>Appointment Request Received!</h3>
            <p style={{ color: '#475569', fontSize: '0.95rem' }}>
              Thank you, <strong>{formData.name}</strong>! Our clinic team will confirm your slot for <strong>{formData.treatment}</strong> on <strong>{formData.preferredDate || 'your selected date'}</strong> ({formData.preferredSlot}).
            </p>

            <div style={{ width: '100%', marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <button
                onClick={handleWhatsAppDirect}
                className="btn btn-whatsapp"
                style={{ width: '100%' }}
              >
                <MessageCircle size={18} />
                <span>Send Details via WhatsApp for Instant Confirmation</span>
              </button>

              <button
                onClick={handleReset}
                className="btn btn-outline-dark"
                style={{ width: '100%' }}
              >
                <span>Done</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
