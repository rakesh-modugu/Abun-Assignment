import React, { useState, useEffect } from 'react';
import './index.css';

const Testimonials = () => {
  // State to track current active testimonial
  const [activeIndex, setActiveIndex] = useState(0);

  // Array of testimonial data - in real project this comes from API
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Content Manager',
      company: 'TechStartup Inc.',
      image: '',
      rating: 5,
      text: 'Abun helped us rank #1 on Google for our target keywords in just 45 days! The AI content is surprisingly good and saves us 20+ hours per week.'
    },
    {
      name: 'Michael Chen',
      role: 'Founder',
      company: 'GrowthHackers',
      image: '',
      rating: 5,
      text: 'As a non-writer, I was skeptical. But Abun creates content that actually converts. Our organic traffic increased by 300% in 2 months!'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Marketing Head',
      company: 'EcoShop',
      image: '',
      rating: 5,
      text: 'The auto-publishing feature is a game-changer. Set it once and forget it. Our blog now publishes 3 SEO articles weekly on autopilot.'
    },
    {
      name: 'David Kumar',
      role: 'SEO Specialist',
      company: 'Digital Agency',
      image: '',
      rating: 5,
      text: 'I manage 15 clients and Abun saves me tons of time. The keyword research tool alone is worth the price. Highly recommended!'
    }
  ];

  // Auto-scroll testimonials every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    // Cleanup function - important to prevent memory leaks!
    return () => clearInterval(timer);
  }, [testimonials.length]);

  // Function to manually select testimonial
  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="testimonials-header">
          <h2 className="section-title">
            What Our <span className="gradient-text">Users Say</span>
          </h2>
          <p className="section-subtitle">
            Trusted by 5,325+ founders, marketers, and content creators worldwide
          </p>
        </div>

        <div className="testimonials-slider">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`testimonial-card ${
                index === activeIndex ? 'active' : ''
              }`}
            >
              <div className="stars">
                {/* Render 5 stars based on rating */}
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <div className="author-image">{testimonial.image}</div>
                <div className="author-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role} at {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation dots */}
        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === activeIndex ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
