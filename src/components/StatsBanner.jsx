import React from 'react';
import { CLINIC_INFO } from '../data/clinicData';

export default function StatsBanner() {
  return (
    <div className="container">
      <div className="stats-strip">
        <div className="stats-grid">
          {CLINIC_INFO.stats.map((stat, idx) => (
            <div key={idx} className="stat-item">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-sublabel">{stat.sublabel}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
