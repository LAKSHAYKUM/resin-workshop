import React from 'react';
import { flowSteps } from '../data/flowData';
import { ArrowRight } from 'lucide-react';

export default function FlowExperience({ onOpenBooking }) {
  const stepImages = [
    '/images/ocean_resin_pedestals.jpg',
    '/images/workshop_guidance_heatgun.jpg',
    '/images/workshop_students_table.jpg',
    '/images/branded_packaging.jpg'
  ];

  return (
    <section id="experience" className="section-padding" style={{
      backgroundColor: 'var(--bg-dark)',
      color: 'var(--text-on-dark)'
    }}>
      <div className="container-custom">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 4rem auto' }}>
          <span className="eyebrow" style={{ color: 'var(--accent-clay)' }}>Interactive Process</span>
          <h2 className="heading-section" style={{ color: '#FFFFFF', marginBottom: '1rem' }}>
            The Workshop Journey
          </h2>
          <div className="gold-line" style={{ margin: '1rem auto' }}></div>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted-dark)' }}>
            From your initial color palette selection to taking home your glass-like masterpiece, we guide you through every creative moment.
          </p>
        </div>

        {/* 4-Step Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1.75rem'
        }} className="experience-grid">
          {flowSteps.map((step, idx) => (
            <div
              key={step.number}
              className="card-editorial tilt-card"
              style={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justify: 'space-between',
                height: '100%',
                backgroundColor: 'var(--bg-dark-card)',
                border: '1px solid var(--border-dark)',
                borderRadius: '20px',
                padding: '1.75rem'
              }}
            >
              <div>
                {/* Step Visual Preview */}
                <div className="img-container rounded-img-frame" style={{
                  height: '140px',
                  width: '100%',
                  borderRadius: '14px',
                  marginBottom: '1.25rem',
                  overflow: 'hidden',
                  border: '1px solid var(--border-dark)'
                }}>
                  <img
                    src={stepImages[idx]}
                    alt={step.title}
                    className="img-editorial"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>

                <div style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '2.4rem',
                  fontWeight: 400,
                  color: 'var(--accent-gold)',
                  lineHeight: 1,
                  marginBottom: '0.75rem'
                }}>
                  {step.number}
                </div>

                <h3 style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.35rem',
                  fontWeight: 500,
                  color: '#FFFFFF',
                  marginBottom: '0.75rem'
                }}>
                  {step.title}
                </h3>

                <p style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.875rem',
                  color: 'var(--text-muted-dark)',
                  lineHeight: 1.6
                }}>
                  {step.description}
                </p>
              </div>

              <div style={{
                marginTop: '2rem',
                paddingTop: '1rem',
                borderTop: '1px solid var(--border-dark)',
                display: 'flex',
                alignItems: 'center',
                justify: 'space-between'
              }}>
                <span style={{
                  fontSize: '0.7rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  color: 'var(--accent-gold)',
                  fontWeight: 600
                }}>
                  Step {idx + 1} of 4
                </span>
                <ArrowRight size={14} color="var(--accent-gold)" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout */}
        <div style={{
          marginTop: '3.5rem',
          textAlign: 'center'
        }}>
          <button
            onClick={onOpenBooking}
            className="btn-primary"
            style={{
              backgroundColor: 'var(--accent-gold)',
              borderColor: 'var(--accent-gold)',
              color: '#121110',
              fontWeight: 600,
              padding: '0.9rem 2.25rem'
            }}
          >
            <span>Reserve Your Experience Seat</span>
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .experience-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 1.5rem !important; }
        }
        @media (max-width: 640px) {
          .experience-grid { grid-template-columns: 1fr !important; gap: 1.25rem !important; }
          .experience-grid .rounded-img-frame { height: 180px !important; }
        }
      `}</style>
    </section>
  );
}
