import React from 'react';
import './index.css';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Enter Your Keyword',
      description: 'Simply input your target keyword or let our AI suggest trending topics in your niche.'
    },
    {
      number: '02',
      title: 'AI Generates Content',
      description: 'Our advanced AI creates a fully researched, SEO-optimized article in 3-5 minutes.'
    },
    {
      number: '03',
      title: 'Review & Customize',
      description: 'Edit the content, adjust images, optimize meta descriptions, and add your personal touch.'
    },
    {
      number: '04',
      title: 'Publish & Rank',
      description: 'Auto-publish to your website or schedule posts. Watch your organic traffic grow!'
    }
  ];

  return (
    <section className="how-it-works-section" id="how-it-works">
      <div className="container">
        <div className="how-it-works-header">
          <h2 className="section-title">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="section-subtitle">
            From keyword to published article in 4 simple steps
          </p>
        </div>
        <div className="steps-container">
          {steps.map((step, index) => (
            <div className="step-card" key={index}>
              <div className="step-number">{step.number}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
              {index < steps.length - 1 && <div className="step-arrow">→</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
