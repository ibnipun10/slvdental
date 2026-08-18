import React, { useState } from 'react';
import { Image as ImageIcon, Maximize2, X } from 'lucide-react';
import { CLINIC_GALLERY } from '../data/clinicData';

export default function ClinicGallery() {
  const [activePhoto, setActivePhoto] = useState(null);

  return (
    <section id="gallery" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">
            <ImageIcon size={16} />
            Clinic Ambiance & Technology
          </span>
          <h2 className="section-title">Inside SLV Dental Clinic</h2>
          <p className="section-desc">
            Take a look at our hygienic, modern clinic operatory, diagnostic setup, and welcoming environment located at Birla Circle, Haralur.
          </p>
        </div>

        <div className="gallery-grid">
          {CLINIC_GALLERY.map((item) => (
            <div 
              key={item.id} 
              className="gallery-card"
              onClick={() => setActivePhoto(item)}
            >
              <img 
                src={item.src} 
                alt={item.alt} 
                className="gallery-img"
              />
              <div className="gallery-overlay">
                <h4>{item.title}</h4>
                <p>{item.subtitle}</p>
                <div style={{ position: 'absolute', top: '16px', right: '16px', color: '#ffffff' }}>
                  <Maximize2 size={18} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Zoom Modal */}
      {activePhoto && (
        <div className="modal-overlay" onClick={() => setActivePhoto(null)}>
          <div 
            className="modal-card" 
            style={{ maxWidth: '800px', padding: '16px', backgroundColor: '#092c35' }}
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="modal-close-btn" 
              style={{ top: '12px', right: '12px', backgroundColor: 'rgba(255,255,255,0.2)', color: '#fff' }}
              onClick={() => setActivePhoto(null)}
            >
              <X size={20} />
            </button>

            <img 
              src={activePhoto.src} 
              alt={activePhoto.alt} 
              style={{ width: '100%', maxHeight: '70vh', objectFit: 'contain', borderRadius: '12px' }}
            />
            
            <div style={{ padding: '16px 8px 4px 8px', color: '#ffffff' }}>
              <h3 style={{ fontSize: '1.25rem', color: '#ffffff', marginBottom: '4px' }}>{activePhoto.title}</h3>
              <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>{activePhoto.subtitle}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
