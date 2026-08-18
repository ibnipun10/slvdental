import React, { useState } from 'react';
import { Star, MessageSquare, CheckCircle, ExternalLink, ThumbsUp } from 'lucide-react';
import { CLINIC_INFO, PATIENT_REVIEWS } from '../data/clinicData';

export default function PatientReviews() {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filterOptions = [
    'All',
    'Root Canal Treatment',
    'Wisdom Tooth',
    'Honest Diagnosis',
    'Cosmetic Dentistry',
    'Cleaning & Fillings'
  ];

  const filteredReviews = selectedFilter === 'All'
    ? PATIENT_REVIEWS
    : PATIENT_REVIEWS.filter(r => {
        if (selectedFilter === 'Root Canal Treatment') return r.treatment.includes('RCT') || r.treatment.includes('Root Canal');
        if (selectedFilter === 'Wisdom Tooth') return r.treatment.includes('Wisdom');
        if (selectedFilter === 'Honest Diagnosis') return r.treatment.includes('Sensitivity') || r.treatment.includes('Honest');
        if (selectedFilter === 'Cosmetic Dentistry') return r.treatment.includes('Cosmetic');
        if (selectedFilter === 'Cleaning & Fillings') return r.treatment.includes('Cleaning') || r.treatment.includes('Filling') || r.treatment.includes('Scaling');
        return true;
      });

  return (
    <section id="reviews" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">
            <MessageSquare size={16} />
            Verified Patient Feedback
          </span>
          <h2 className="section-title">Real Patient Stories & Google Reviews</h2>
          <p className="section-desc">
            Discover why 455+ patients have rated Dr. Abhisheak R Naik and SLV Dental Clinic with 5.0 stars and a 100% recommendation score on Practo and Google.
          </p>
        </div>

        {/* Reviews Filter & Score Header */}
        <div className="reviews-filter-bar">
          <div className="reviews-score-badge">
            <div className="score-num">
              <span>5.0</span>
              <Star size={22} fill="#f59e0b" color="#f59e0b" />
            </div>
            <div>
              <strong style={{ display: 'block', fontSize: '0.9rem', color: '#0f172a' }}>
                455+ Patient Stories & Reviews
              </strong>
              <span style={{ fontSize: '0.775rem', color: '#15803d', fontWeight: 700 }}>
                100% Recommendation Rate
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {filterOptions.map((opt) => (
              <button
                key={opt}
                className={`tab-btn ${selectedFilter === opt ? 'active' : ''}`}
                onClick={() => setSelectedFilter(opt)}
                style={{ fontSize: '0.8rem', padding: '6px 14px' }}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="reviews-grid">
          {filteredReviews.map((rev) => (
            <div key={rev.id} className="review-card">
              <div className="review-header">
                <div className="review-stars">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} size={15} fill="#f59e0b" color="#f59e0b" />
                  ))}
                </div>
                <span className="review-source-pill">{rev.source}</span>
              </div>

              <span className="review-tag">{rev.tag}</span>

              <blockquote className="review-quote-highlight">
                "{rev.highlight}"
              </blockquote>

              <p className="review-body">
                {rev.review}
              </p>

              <div className="review-footer">
                <div>
                  <div className="reviewer-name">{rev.name}</div>
                  <div className="reviewer-treatment">{rev.treatment}</div>
                </div>
                <div style={{ color: '#10b981', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.75rem', fontWeight: 700 }}>
                  <CheckCircle size={14} />
                  <span>Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* External Links Bar */}
        <div style={{ textAlign: 'center', marginTop: '40px', display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <a
            href={CLINIC_INFO.contact.practoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-dark"
          >
            <span>Read all 455+ Stories on Practo</span>
            <ExternalLink size={15} />
          </a>

          <a
            href={CLINIC_INFO.contact.googleShareUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            <span>View Photos & Reviews on Google</span>
            <ExternalLink size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
