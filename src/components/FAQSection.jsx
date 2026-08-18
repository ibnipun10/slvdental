import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { FAQS } from '../data/clinicData';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">
            <HelpCircle size={16} />
            Frequently Asked Questions
          </span>
          <h2 className="section-title">Common Questions Answered</h2>
          <p className="section-desc">
            Have questions about your upcoming dental visit? Here are answers to the most common queries we receive.
          </p>
        </div>

        <div className="faq-list">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div key={idx} className={`faq-item ${isOpen ? 'active' : ''}`}>
                <button
                  className="faq-question-btn"
                  onClick={() => toggleFAQ(idx)}
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <ChevronDown size={20} className="faq-icon-toggle" />
                </button>

                {isOpen && (
                  <div className="faq-answer">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
