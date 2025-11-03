import React, { useState } from 'react';
import './index.css';

const Pricing = () => {
  // State for monthly/yearly toggle
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: 'Starter',
      icon: '🚀',
      monthlyPrice: 29,
      yearlyPrice: 290,
      description: 'Perfect for individuals and small blogs',
      features: [
        '10 AI articles per month',
        'Basic keyword research',
        'SEO optimization',
        'WordPress integration',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      icon: '⚡',
      monthlyPrice: 79,
      yearlyPrice: 790,
      description: 'Best for growing businesses and agencies',
      features: [
        '50 AI articles per month',
        'Advanced keyword research',
        'SEO optimization + analysis',
        'All platform integrations',
        'Priority support',
        'Custom AI training',
        'Team collaboration'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      icon: '🏆',
      monthlyPrice: 199,
      yearlyPrice: 1990,
      description: 'For large teams and businesses',
      features: [
        'Unlimited AI articles',
        'Enterprise keyword tools',
        'White-label solution',
        'API access',
        'Dedicated account manager',
        'Custom integrations',
        'Advanced analytics',
        '24/7 phone support'
      ],
      popular: false
    }
  ];

  return (
    <section className="pricing-section" id="pricing">
      <div className="container">
        <div className="pricing-header">
          <h2 className="section-title">
            Simple, <span className="gradient-text">Transparent Pricing</span>
          </h2>
          <p className="section-subtitle">
            Choose the perfect plan for your content needs. No hidden fees.
          </p>

          {/* Monthly/Yearly Toggle */}
          <div className="pricing-toggle">
            <span className={!isYearly ? 'active' : ''}>Monthly</span>
            <button
              className={`toggle-switch ${isYearly ? 'yearly' : ''}`}
              onClick={() => setIsYearly(!isYearly)}
            >
              <span className="toggle-slider"></span>
            </button>
            <span className={isYearly ? 'active' : ''}>
              Yearly <span className="save-badge">Save 20%</span>
            </span>
          </div>
        </div>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`pricing-card ${plan.popular ? 'popular' : ''}`}
            >
              {plan.popular && <div className="popular-badge">Most Popular</div>}
              
              <div className="plan-icon">{plan.icon}</div>
              <h3 className="plan-name">{plan.name}</h3>
              <p className="plan-description">{plan.description}</p>
              
              <div className="plan-price">
                <span className="currency">$</span>
                <span className="amount">
                  {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                </span>
                <span className="period">
                  /{isYearly ? 'year' : 'month'}
                </span>
              </div>

              <button className={plan.popular ? 'btn-primary' : 'btn-outline-primary'}>
                Get Started
              </button>

              <ul className="plan-features">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>
                    <span className="check-icon">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
