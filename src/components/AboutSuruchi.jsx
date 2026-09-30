import React from 'react';
import { Heart, Sparkles, Award } from 'lucide-react';

export default function AboutSuruchi({ suruchiImage }) {
  const currentImg = suruchiImage || '/images/suruchi_portrait.jpg';

  return (
    <section id="about" className="section-padding" style={{
      backgroundColor: 'var(--bg-clay-tint)',
      borderTop: '1px solid var(--border-subtle)',
      borderBottom: '1px solid var(--border-subtle)'
    }}>
      <div className="container-custom">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '3.5rem',
          alignItems: 'center'
        }}>
          {/* Left Editorial Text Column (Span 7) */}
          <div className="about-text-col" style={{ gridColumn: 'span 7' }}>
            <span className="eyebrow" style={{ color: 'var(--accent-clay)' }}>Meet Your Instructor</span>
            
            <h2 className="heading-section" style={{ marginBottom: '1.25rem', color: 'var(--text-main)' }}>
              Guided by creativity. <span className="about-br"><br /></span>
              <span style={{ fontStyle: 'italic', color: 'var(--accent-clay)' }}>
                Built around you.
              </span>
            </h2>

            <div className="gold-line"></div>

            <p style={{
              fontSize: '1.05rem',
              color: 'var(--text-muted)',
              lineHeight: 1.65,
              marginBottom: '1.25rem'
            }}>
              Suruchi founded Flow Studio with a clear mission: to create an approachable, high-end resin art studio in Dubai where anyone can explore fluid art with confidence.
            </p>

            <p style={{
              fontSize: '0.925rem',
              color: 'var(--text-muted)',
              lineHeight: 1.6,
              marginBottom: '1.75rem'
            }}>
              Known throughout Google reviews for her patient instruction, clear explanations, and welcoming teaching style, Suruchi breaks down complex resin pouring, heat gun lacing, and color blending into an enjoyable, rewarding process.
            </p>

            {/* Core Values / Teaching Qualities */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.85rem',
              padding: '1.25rem',
              backgroundColor: 'var(--bg-surface)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '16px'
            }} className="tilt-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Heart size={18} color="var(--accent-clay)" style={{ flexShrink: 0 }} />
                <span style={{ fontSize: '0.875rem', color: 'var(--text-main)', fontWeight: 600 }}>
                  Warm, patient, and unhurried teaching pace
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Sparkles size={18} color="var(--accent-clay)" style={{ flexShrink: 0 }} />
                <span style={{ fontSize: '0.875rem', color: 'var(--text-main)', fontWeight: 600 }}>
                  Encouraging beginner-friendly creative guidance
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Award size={18} color="var(--accent-clay)" style={{ flexShrink: 0 }} />
                <span style={{ fontSize: '0.875rem', color: 'var(--text-main)', fontWeight: 600 }}>
                  Practical techniques & flawless high-gloss finish tips
                </span>
              </div>
            </div>
          </div>

          {/* Right Image Frame (Span 5) */}
          <div className="about-img-col" style={{ gridColumn: 'span 5', position: 'relative' }}>
            <div className="img-container rounded-img-frame tilt-card about-img-frame" style={{
              borderRadius: '20px',
              aspectRatio: '4/5',
              maxHeight: '440px',
              maxWidth: '380px',
              margin: '0 auto',
              boxShadow: 'var(--shadow-elevated)',
              border: '1px solid var(--border-subtle)'
            }}>
              <img
                src={currentImg}
                alt="Suruchi - Founder & Resin Artist, Flow Studio Dubai"
                className="img-editorial"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 22%' }}
              />

              <div style={{
                position: 'absolute',
                bottom: '1.25rem',
                left: '1.25rem',
                right: '1.25rem',
                backgroundColor: 'rgba(250, 247, 242, 0.94)',
                backdropFilter: 'blur(8px)',
                padding: '1rem 1.15rem',
                borderRadius: '14px',
                border: '1px solid var(--border-subtle)'
              }} className="animate-float">
                <div style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.2rem',
                  fontWeight: 600,
                  color: 'var(--text-main)'
                }}>
                  Suruchi
                </div>
                <div style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.725rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--accent-clay)',
                  fontWeight: 700
                }}>
                  Founder & Resin Artist
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .about-text-col, .about-img-col { grid-column: span 12 !important; }
          .about-img-col { margin-top: 2rem; }
          .about-img-frame { maxHeight: 360px !important; }
        }
        @media (max-width: 576px) {
          .about-br { display: none !important; }
        }
      `}</style>
    </section>
  );
}
