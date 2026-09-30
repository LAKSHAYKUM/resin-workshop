import React from 'react';
import { ArrowUpRight, MapPin, Sparkles, Star } from 'lucide-react';
import { studioInfo } from '../data/flowData';

export default function Hero({ onOpenBooking, heroImage }) {
  const currentHeroImg = heroImage || '/images/hero.jpg';

  const getHeroObjectPosition = (imgSrc) => {
    if (imgSrc.includes('ocean_resin_pedestals')) return 'center 65%';
    if (imgSrc.includes('suruchi_portrait')) return 'center 22%';
    if (imgSrc.includes('workshop_guidance_heatgun')) return 'center 20%';
    if (imgSrc.includes('workshop_students_table')) return 'center 35%';
    if (imgSrc.includes('branded_packaging')) return 'left 75%';
    return 'center 45%';
  };

  return (
    <section id="hero" style={{
      position: 'relative',
      backgroundColor: 'var(--bg-primary)',
      paddingTop: '2.5rem',
      paddingBottom: '4rem',
      overflow: 'hidden'
    }}>
      <div className="container-custom">
        {/* Editorial Header Split Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '2.5rem',
          alignItems: 'center'
        }}>
          {/* Left Column: Story & CTAs (Span 7) */}
          <div className="hero-text-col" style={{ gridColumn: 'span 7' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <span className="eyebrow" style={{ margin: 0 }}>Dubai Creative Studio</span>
              <span style={{ width: '30px', height: '1px', backgroundColor: 'var(--accent-clay)' }}></span>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.75rem',
                color: 'var(--text-muted)',
                fontFamily: 'var(--font-sans)',
                fontWeight: 600
              }}>
                <MapPin size={13} color="var(--accent-clay)" />
                <span>Mankhool, Dubai</span>
              </div>
            </div>

            <h1 className="heading-hero" style={{ marginBottom: '1.5rem', color: 'var(--text-main)' }}>
              Create Something <br />
              <span style={{
                fontStyle: 'italic',
                color: 'var(--accent-clay)',
                fontWeight: 400
              }}>
                Beautiful.
              </span>
            </h1>

            <p style={{
              fontSize: 'clamp(1.05rem, 1.6vw, 1.35rem)',
              color: 'var(--text-muted)',
              maxWidth: '540px',
              fontWeight: 400,
              lineHeight: 1.5,
              marginBottom: '2.25rem'
            }}>
              {studioInfo.heroSubtitle}
            </p>

            {/* CTAs & Social Proof Badge */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '1rem'
              }}>
                <button
                  onClick={onOpenBooking}
                  className="btn-primary"
                >
                  <span>Book a Workshop</span>
                  <ArrowUpRight size={16} />
                </button>

                <a
                  href="#workshops"
                  className="btn-secondary"
                >
                  Explore Workshops
                </a>
              </div>

              {/* Review Badge */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '0.75rem 1.25rem',
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '4px',
                maxWidth: 'fit-content'
              }}>
                <div style={{ display: 'flex', gap: '0.15rem' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="#C5A87C" color="#C5A87C" />
                  ))}
                </div>
                <div style={{ fontSize: '0.8125rem', color: 'var(--text-main)' }}>
                  <strong style={{ fontWeight: 600 }}>4.9 Stars</strong> on Google Reviews
                  <span style={{ color: 'var(--text-light)', marginLeft: '0.4rem' }}>(152 Reviews)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Hero Card (Span 5) */}
          <div className="hero-img-col" style={{ gridColumn: 'span 5', position: 'relative' }}>
            {/* Background Decorative Accent Ring */}
            <div style={{
              position: 'absolute',
              top: '-5%',
              right: '-5%',
              width: '110%',
              height: '110%',
              border: '1px solid var(--border-light)',
              borderRadius: '24px',
              pointerEvents: 'none',
              zIndex: 0
            }} className="animate-pulse-subtle"></div>

            {/* Main Visual Frame */}
            <div className="img-container rounded-img-frame tilt-card" style={{
              position: 'relative',
              zIndex: 1,
              borderRadius: '20px',
              boxShadow: 'var(--shadow-elevated)',
              aspectRatio: '4/5',
              maxHeight: '580px',
              border: '1px solid var(--border-subtle)',
              overflow: 'hidden'
            }}>
              <img
                src={currentHeroImg}
                alt="Flow Studio Resin Artwork Dubai"
                className="img-editorial"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: getHeroObjectPosition(currentHeroImg) }}
              />

              {/* Overlay Glass Badge */}
              <div style={{
                position: 'absolute',
                bottom: '1.5rem',
                left: '1.5rem',
                right: '1.5rem',
                backgroundColor: 'rgba(25, 20, 20, 0.82)',
                backdropFilter: 'blur(10px)',
                color: '#F7F4EF',
                padding: '1.25rem',
                borderRadius: '16px',
                border: '1px solid rgba(247, 244, 239, 0.15)'
              }} className="animate-float">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                  <Sparkles size={14} color="#C5A87C" />
                  <span style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.6875rem',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: '#C5A87C',
                    fontWeight: 600
                  }}>
                    Featured Creation
                  </span>
                </div>
                <div style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.25rem',
                  fontWeight: 500,
                  lineHeight: 1.2
                }}>
                  Signature Ocean Wave Art Boards
                </div>
                <div style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.75rem',
                  color: 'var(--text-muted-dark)',
                  marginTop: '0.25rem'
                }}>
                  Hand-poured with non-yellowing epoxy resin, beach sand & sea foam lacing
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .hero-text-col { grid-column: span 12 !important; }
          .hero-img-col { grid-column: span 12 !important; margin-top: 2rem; }
        }
      `}</style>
    </section>
  );
}
