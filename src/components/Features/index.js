import React from 'react';
import './index.css';

const Features = () => {
  const features = [
    {
      icon: '🤖',
      title: 'AI-Powered Content',
      description: 'Generate human-like, valuable content that resonates with your readers using advanced AI algorithms.'
    },
    {
      icon: '🔍',
      title: 'Keyword Research',
      description: 'Find the best keywords around your niche with real volume statistics and competitor analysis.'
    },
    {
      icon: '📝',
      title: 'SEO Optimized',
      description: 'Every article is optimized for search engines with proper meta tags, internal links, and structure.'
    },
    {
      icon: '🚀',
      title: 'Auto Publishing',
      description: 'Seamlessly publish to WordPress, Webflow, Wix, and Shopify with one-click integrations.'
    },
    {
      icon: '📊',
      title: 'Performance Tracking',
      description: 'Get weekly reports to understand your content ROI and track organic traffic growth.'
    },
    {
      icon: '🎨',
      title: 'Media-Rich Content',
      description: 'Auto-generate featured images, thumbnails, and optimize images with alt text for better SEO.'
    }
  ];

  return (
    <section className="features-section" id="features">
      <div className="container">
        <div className="features-header">
          <h2 className="section-title">
            Why Choose <span className="gradient-text">Abun?</span>
          </h2>
          <p className="section-subtitle">
            Everything you need to create, optimize, and publish SEO-friendly content that ranks on Google
          </p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
