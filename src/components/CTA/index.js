import React from 'react';
import './index.css';

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">
            Ready to Rank on Google?
          </h2>
          <p className="cta-description">
            Join 5,325+ founders, marketers, and SEO professionals who trust Abun 
            to create valuable content that ranks and converts.
          </p>
          <div className="cta-buttons">
            <button className="btn-primary btn-large">
              Start Free Trial
            </button>
            <button className="btn-outline-light btn-large">
              View Pricing Plans
            </button>
          </div>
          <p className="cta-note">
            No credit card required • 3 free articles • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
