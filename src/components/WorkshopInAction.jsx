import React from 'react';
import { workshopPillars, studioInfo } from '../data/flowData';
import { HeartHandshake, Sparkles, Palette, Award, Check } from 'lucide-react';

export default function WorkshopInAction({ onOpenBooking, studioImage }) {
  const currentImg = studioImage || '/images/studio.jpg';

  const iconMap = {
    HeartHandshake: <HeartHandshake size={24} color="var(--accent-gold-dark)" />,
    Sparkles: <Sparkles size={24} color="var(--accent-gold-dark)" />,
    Palette: <Palette size={24} color="var(--accent-gold-dark)" />,
    Award: <Award size={24} color="var(--accent-gold-dark)" />
  };

  return (
    <section className="section-padding" style={{
      backgroundColor: 'var(--bg-dark)',
      color: 'var(--text-on-dark)',
      position: 'relative'
    }}>
      <div className="container-custom">
        {/* Section Header */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '3rem',
          alignItems: 'center',
          marginBottom: '4rem'
        }}>
          <div className="action-text-col" style={{ gridColumn: 'span 7' }}>
            <span className="eyebrow" style={{ color: 'var(--accent-gold)' }}>The Studio Atmosphere</span>
            <h2 className="heading-section" style={{ color: '#FFFFFF', marginBottom: '1.25rem' }}>
              {studioInfo.actionHeadline}
            </h2>
            <div className="gold-line"></div>
            <p style={{
              fontSize: '1.15rem',
              color: 'var(--text-muted-dark)',
              lineHeight: 1.6,
              maxWidth: '560px'
            }}>
              Whether you arrive solo, with friends, or as a couple, Flow Studio offers a peaceful, inspiring space away from city noise. Learn resin pouring techniques step-by-step with patient instruction.
            </p>
          </div>

          <div className="action-badge-col" style={{ gridColumn: 'span 5', textAlign: 'right' }}>
            <div style={{
              display: 'inline-block',
              padding: '2rem',
              backgroundColor: 'var(--bg-dark-card)',
              border: '1px solid var(--border-dark)',
              borderRadius: '16px',
              textAlign: 'left'
            }} className="animate-pulse-subtle">
              <div style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '2.5rem',
                color: 'var(--accent-gold)',
                lineHeight: 1
              }}>
                100%
              </div>
              <div style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.85rem',
                color: '#FFFFFF',
                fontWeight: 600,
                marginTop: '0.5rem'
              }}>
                Hands-on Creation
              </div>
              <div style={{
                fontSize: '0.75rem',
                color: 'var(--text-muted-dark)',
                marginTop: '0.25rem'
              }}>
                You mix, pour, lace, and finish your own resin piece under Suruchi’s warm guidance.
              </div>
            </div>
          </div>
        </div>

        {/* Authentic Workshop Visual Showcase */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '2rem',
          marginBottom: '3.5rem'
        }} className="action-visual-row">
          <div style={{
            gridColumn: 'span 6',
            position: 'relative',
            borderRadius: '20px',
            overflow: 'hidden',
            height: '300px',
            border: '1px solid var(--border-dark)',
            boxShadow: 'var(--shadow-elevated)'
          }} className="rounded-img-frame tilt-card">
            <img
              src="/images/workshop_students_table.jpg"
              alt="Flow Studio Mankhool Workshop Table"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 35%' }}
            />
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              padding: '1.25rem 1.5rem',
              background: 'linear-gradient(to top, rgba(18, 17, 16, 0.92), transparent)',
              color: '#F7F4EF'
            }}>
              <div style={{ fontSize: '0.7rem', color: 'var(--accent-gold)', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600 }}>
                Studio Atmosphere
              </div>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', marginTop: '0.15rem' }}>
                Group Ocean Masterclass in Session
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted-dark)' }}>
                Attendees in Mankhool mixing deep sea pigments & natural sands
              </div>
            </div>
          </div>

          <div style={{
            gridColumn: 'span 6',
            position: 'relative',
            borderRadius: '20px',
            overflow: 'hidden',
            height: '300px',
            border: '1px solid var(--border-dark)',
            boxShadow: 'var(--shadow-elevated)'
          }} className="rounded-img-frame tilt-card">
            <img
              src="/images/workshop_guidance_heatgun.jpg"
              alt="Hands-on Resin Wave Guidance"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%' }}
            />
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              padding: '1.25rem 1.5rem',
              background: 'linear-gradient(to top, rgba(18, 17, 16, 0.92), transparent)',
              color: '#F7F4EF'
            }}>
              <div style={{ fontSize: '0.7rem', color: 'var(--accent-gold)', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600 }}>
                Technique Guidance
              </div>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', marginTop: '0.15rem' }}>
                Mastering Heat Gun Wave Lacing
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted-dark)' }}>
                Patient step-by-step instruction to create realistic sea foam cells
              </div>
            </div>
          </div>
        </div>

        {/* 4 Feature Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1.75rem'
        }} className="action-grid">
          {workshopPillars.map((pillar, idx) => (
            <div
              key={idx}
              className="tilt-card"
              style={{
                backgroundColor: 'var(--bg-dark-card)',
                border: '1px solid var(--border-dark)',
                padding: '2rem',
                borderRadius: '16px',
                display: 'flex',
                flexDirection: 'column',
                justify: 'space-between',
                transition: 'all 0.3s ease'
              }}
            >
              <div>
                <div style={{ marginBottom: '1.25rem' }}>
                  {iconMap[pillar.icon]}
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.25rem',
                  color: '#FFFFFF',
                  fontWeight: 500,
                  marginBottom: '0.75rem'
                }}>
                  {pillar.title}
                </h3>
                <p style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.875rem',
                  color: 'var(--text-muted-dark)',
                  lineHeight: 1.6
                }}>
                  {pillar.description}
                </p>
              </div>

              <div style={{
                marginTop: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                fontSize: '0.75rem',
                color: 'var(--accent-gold)',
                fontWeight: 600
              }}>
                <Check size={14} />
                <span>Verified Studio Standard</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .action-text-col, .action-badge-col { grid-column: span 12 !important; textAlign: left !important; }
          .action-visual-row > div { grid-column: span 12 !important; height: 240px !important; }
          .action-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .action-grid { grid-template-columns: 1fr !important; }
          .action-visual-row > div { height: 210px !important; }
        }
      `}</style>
    </section>
  );
}
