import React from 'react';
import { Star, MessageSquare, CheckCircle, ExternalLink } from 'lucide-react';
import { CLINIC_INFO, PATIENT_REVIEWS } from '../data/clinicData';

export default function PatientReviews() {
  return (
    <section id="reviews" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">
            <MessageSquare size={15} />
            Verified Patient Feedback
          </span>
          <h2 className="section-title">What Our Patients Say</h2>
          <p className="section-desc">
            Rated 5.0 ★ across 455+ verified patient stories on Practo and Google Reviews.
          </p>
        </div>

        {/* Reviews Cards Grid */}
        <div className="reviews-grid">
          {PATIENT_REVIEWS.map((rev) => (
            <div key={rev.id} className="review-card">
              <div className="review-header">
                <div className="review-stars">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} size={14} fill="#f59e0b" color="#f59e0b" />
                  ))}
                </div>
                <span className="review-source-pill">{rev.source}</span>
              </div>

              <span className="review-tag">{rev.tag}</span>

              <blockquote className="review-quote-highlight">
                "{rev.quote}"
              </blockquote>

              <div className="review-footer">
                <div>
                  <div className="reviewer-name">{rev.name}</div>
                  <div className="reviewer-treatment">{rev.treatment}</div>
                </div>
                <div className="verified-badge-chip">
                  <CheckCircle size={13} />
                  <span>Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* External Links Bar */}
        <div className="reviews-actions-row">
          <a
            href={CLINIC_INFO.contact.practoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-dark btn-sm"
          >
            <span>Read 455+ Stories on Practo</span>
            <ExternalLink size={14} />
          </a>

          <a
            href={CLINIC_INFO.contact.googleShareUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-dark btn-sm"
          >
            <span>Google Reviews & Photos</span>
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}

