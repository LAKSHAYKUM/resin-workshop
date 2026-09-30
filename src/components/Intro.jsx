import React from 'react';
import { studioInfo } from '../data/flowData';
import { Sparkles, ShieldCheck } from 'lucide-react';

export default function Intro({ studioImage }) {
  const currentStudioImg = studioImage || '/images/workshop_guidance_heatgun.jpg';

  const getIntroObjectPosition = (imgSrc) => {
    if (imgSrc.includes('workshop_guidance_heatgun')) return 'center 20%';
    if (imgSrc.includes('workshop_students_table')) return 'center 35%';
    if (imgSrc.includes('suruchi_portrait')) return 'center 22%';
    if (imgSrc.includes('ocean_resin_pedestals')) return 'center 65%';
    return 'center center';
  };

  return (
    <section id="intro" className="section-padding" style={{
      backgroundColor: 'var(--bg-sand)',
      borderTop: '1px solid var(--border-subtle)',
      borderBottom: '1px solid var(--border-subtle)'
    }}>
      <div className="container-custom">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '3rem',
          alignItems: 'center'
        }}>
          {/* Left Column: Workshop Photography (Span 6) */}
          <div className="intro-img-col" style={{ gridColumn: 'span 6', position: 'relative' }}>
            <div className="img-container rounded-img-frame tilt-card" style={{
              borderRadius: '20px',
              aspectRatio: '4/4.5',
              maxHeight: '440px',
              maxWidth: '480px',
              margin: '0 auto',
              boxShadow: 'var(--shadow-subtle)',
              border: '1px solid var(--border-subtle)'
            }}>
              <img
                src={currentStudioImg}
                alt="Flow Studio Mankhool Dubai Workshop Table"
                className="img-editorial"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: getIntroObjectPosition(currentStudioImg) }}
              />
            </div>

            {/* Subtle Studio Badge */}
            <div style={{
              position: 'absolute',
              top: '-1rem',
              left: '-1rem',
              backgroundColor: 'var(--bg-dark)',
              color: 'var(--text-on-dark)',
              padding: '0.85rem 1.25rem',
              borderRadius: '16px',
              border: '1px solid var(--border-dark)',
              boxShadow: 'var(--shadow-elevated)'
            }} className="animate-float">
              <div style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.1rem',
                color: 'var(--accent-gold)'
              }}>
                Mankhool Studio
              </div>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-muted-dark)' }}>
                Suite 304 • Dubai, UAE
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Copy (Span 6) */}
          <div className="intro-text-col" style={{ gridColumn: 'span 6' }}>
            <span className="eyebrow">The Studio Concept</span>
            
            <h2 className="heading-section" style={{ marginBottom: '1.5rem', color: 'var(--text-main)' }}>
              {studioInfo.introHeadline}
            </h2>

            <div className="gold-line"></div>

            <p style={{
              fontSize: '1.125rem',
              color: 'var(--text-muted)',
              lineHeight: 1.7,
              marginBottom: '1.5rem',
              fontWeight: 400
            }}>
              {studioInfo.introBody}
            </p>

            <p style={{
              fontSize: '0.975rem',
              color: 'var(--text-muted)',
              lineHeight: 1.6,
              marginBottom: '2rem'
            }}>
              From mastering fluid resin cell lacing to crafting bespoke ocean wall clocks, every workshop provides a personal, unhurried space to explore color, depth, and tactile craftsmanship.
            </p>

            {/* Key Quality Chips derived from customer reviews */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '1rem',
              paddingTop: '1rem',
              borderTop: '1px solid var(--border-subtle)'
            }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <Sparkles size={18} color="var(--accent-clay)" style={{ marginTop: '0.2rem', flexShrink: 0 }} />
                <div>
                  <h4 style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-main)', fontFamily: 'var(--font-sans)' }}>
                    Beginner Friendly
                  </h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: 0 }}>
                    No prior experience needed
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <ShieldCheck size={18} color="var(--accent-clay)" style={{ marginTop: '0.2rem', flexShrink: 0 }} />
                <div>
                  <h4 style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-main)', fontFamily: 'var(--font-sans)' }}>
                    All Materials Included
                  </h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: 0 }}>
                    Resin, pigments & tools provided
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .intro-img-col, .intro-text-col { grid-column: span 12 !important; }
        }
      `}</style>
    </section>
  );
}
