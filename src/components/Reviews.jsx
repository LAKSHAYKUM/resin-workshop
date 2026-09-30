import React from 'react';
import { googleReviews, studioInfo } from '../data/flowData';
import { Star, Quote, CheckCircle } from 'lucide-react';

export default function Reviews() {
  return (
    <section className="section-padding" style={{
      backgroundColor: 'var(--bg-sand)',
      borderTop: '1px solid var(--border-subtle)',
      borderBottom: '1px solid var(--border-subtle)'
    }}>
      <div className="container-custom">
        {/* Header */}
        <div style={{
          display: 'flex',
          justify: 'space-between',
          alignItems: 'flex-end',
          flexWrap: 'wrap',
          gap: '2rem',
          marginBottom: '3.5rem'
        }}>
          <div>
            <span className="eyebrow" style={{ color: 'var(--accent-clay)' }}>Customer Reputation</span>
            <h2 className="heading-section" style={{ color: 'var(--text-main)' }}>
              Why People Love Flow Studio
            </h2>
          </div>

          {/* Rating Summary Box */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.25rem',
            padding: '1rem 1.75rem',
            backgroundColor: 'var(--bg-surface)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '4px'
          }}>
            <div style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '2.8rem',
              fontWeight: 600,
              color: 'var(--text-main)',
              lineHeight: 1
            }}>
              {studioInfo.rating}
            </div>

            <div>
              <div style={{ display: 'flex', gap: '0.2rem', marginBottom: '0.25rem' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#C5A87C" color="#C5A87C" />
                ))}
              </div>
              <div style={{ fontSize: '0.8125rem', color: 'var(--text-main)', fontWeight: 600 }}>
                {studioInfo.reviewCount} Verified Google Reviews
              </div>
              <div style={{ fontSize: '0.725rem', color: 'var(--text-light)' }}>
                Flow Studio By Suruchi • Dubai
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '2rem'
        }} className="reviews-grid">
          {googleReviews.map((review) => (
            <div
              key={review.id}
              className="card-editorial tilt-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justify: 'space-between',
                backgroundColor: 'var(--bg-surface)',
                borderRadius: '16px',
                position: 'relative'
              }}
            >
              <div>
                {/* Top Badge & Quote Icon */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                  <div style={{ display: 'flex', gap: '0.15rem' }}>
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={14} fill="#C5A87C" color="#C5A87C" />
                    ))}
                  </div>

                  <span style={{
                    fontSize: '0.7rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: 'var(--accent-clay)',
                    fontWeight: 600,
                    backgroundColor: 'rgba(158, 107, 85, 0.12)',
                    padding: '0.25rem 0.6rem',
                    borderRadius: '2px'
                  }}>
                    {review.tag}
                  </span>
                </div>

                <h3 style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.25rem',
                  fontWeight: 500,
                  color: 'var(--text-main)',
                  marginBottom: '0.75rem',
                  lineHeight: 1.3
                }}>
                  “{review.highlight}”
                </h3>

                <p style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.925rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.65,
                  marginBottom: '1.5rem'
                }}>
                  {review.text}
                </p>
              </div>

              {/* Author Info */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justify: 'space-between',
                paddingTop: '1rem',
                borderTop: '1px solid var(--border-subtle)'
              }}>
                <div>
                  <div style={{
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    color: 'var(--text-main)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem'
                  }}>
                    <span>{review.author}</span>
                    <CheckCircle size={13} color="#25D366" />
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-light)' }}>
                    {review.date}
                  </div>
                </div>

                <Quote size={22} color="var(--accent-gold-light)" style={{ opacity: 0.6 }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .reviews-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
