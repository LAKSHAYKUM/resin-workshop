import React from 'react';
import { workshopTemplates } from '../data/flowData';
import { Clock, Users, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Workshops({ onOpenBooking, galleryImages }) {
  return (
    <section id="workshops" className="section-padding" style={{
      backgroundColor: 'var(--bg-surface)',
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
            <span className="eyebrow">Creative Offerings</span>
            <h2 className="heading-section" style={{ color: 'var(--text-main)' }}>
              Resin Art Workshops
            </h2>
          </div>
          <p style={{
            fontSize: '1rem',
            color: 'var(--text-muted)',
            maxWidth: '460px',
            lineHeight: 1.6
          }}>
            Explore our hands-on guided sessions in Mankhool, Dubai. Each workshop is tailored for beginners, providing all high-end materials, personal instruction, and a finished piece to keep.
          </p>
        </div>

        {/* Workshop Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '2.5rem'
        }} className="workshops-grid">
          {workshopTemplates.map((item, index) => {
            // Use custom image if available
            const cardImg = (galleryImages && galleryImages[index]?.src) || item.image;

            const getCardObjectPosition = (imgSrc) => {
              if (imgSrc.includes('workshop_guidance_heatgun')) return 'center 22%';
              if (imgSrc.includes('branded_packaging')) return 'left 75%';
              if (imgSrc.includes('ocean_resin_pedestals')) return 'center 65%';
              if (imgSrc.includes('workshop_students_table')) return 'center 35%';
              if (imgSrc.includes('suruchi_portrait')) return 'center 22%';
              return 'center center';
            };

            return (
              <div
                key={item.id}
                className="luxury-product-card tilt-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justify: 'space-between',
                  height: '100%',
                  backgroundColor: 'var(--bg-surface)'
                }}
              >
                <div>
                  {/* Square (1:1) Rounded Artwork Frame */}
                  <div className="rounded-img-frame" style={{
                    aspectRatio: '1/1',
                    width: '100%',
                    maxHeight: '340px',
                    position: 'relative'
                  }}>
                    <img
                      src={cardImg}
                      alt={item.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: getCardObjectPosition(cardImg)
                      }}
                    />
                    
                    {/* Floating Glass Pill Badge */}
                    <div style={{
                      position: 'absolute',
                      top: '1rem',
                      right: '1rem',
                      backgroundColor: 'rgba(25, 20, 20, 0.82)',
                      backdropFilter: 'blur(10px)',
                      color: 'var(--accent-gold)',
                      padding: '0.45rem 0.95rem',
                      borderRadius: '20px',
                      fontSize: '0.725rem',
                      fontFamily: 'var(--font-sans)',
                      fontWeight: 600,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      border: '1px solid rgba(207, 163, 130, 0.3)',
                      boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
                    }} className="animate-float">
                      {item.accent}
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div style={{ paddingTop: '1.5rem', display: 'flex', flexDirection: 'column' }}>
                    <h3 style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.65rem',
                      fontWeight: 500,
                      color: 'var(--text-main)',
                      marginBottom: '0.4rem',
                      lineHeight: 1.2
                    }}>
                      {item.title}
                    </h3>

                    <p style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.875rem',
                      color: 'var(--text-muted)',
                      marginBottom: '1.25rem',
                      lineHeight: 1.5
                    }}>
                      {item.tagline}
                    </p>

                    {/* Meta Info Pill Chips */}
                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.6rem',
                      fontSize: '0.785rem',
                      color: 'var(--text-main)',
                      paddingBottom: '1.25rem',
                      borderBottom: '1px solid var(--border-subtle)',
                      marginBottom: '1.25rem'
                    }}>
                      <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        padding: '0.35rem 0.75rem',
                        backgroundColor: 'var(--bg-primary)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: '20px',
                        fontWeight: 600
                      }}>
                        <Clock size={13} color="var(--accent-clay)" />
                        <span>{item.duration}</span>
                      </div>
                      <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        padding: '0.35rem 0.75rem',
                        backgroundColor: 'var(--bg-primary)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: '20px',
                        fontWeight: 600
                      }}>
                        <Users size={13} color="var(--accent-clay)" />
                        <span>{item.groupSize}</span>
                      </div>
                      <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        padding: '0.35rem 0.75rem',
                        backgroundColor: 'var(--bg-primary)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: '20px',
                        fontWeight: 600
                      }}>
                        <Sparkles size={13} color="var(--accent-clay)" />
                        <span>{item.level}</span>
                      </div>
                    </div>

                    {/* Features Checklist */}
                    <ul style={{
                      listStyle: 'none',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.55rem',
                      marginBottom: '1.75rem'
                    }}>
                      {item.includes.map((inc, idx) => (
                        <li key={idx} style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.6rem',
                          fontSize: '0.835rem',
                          color: 'var(--text-main)'
                        }}>
                          <CheckCircle2 size={14} color="var(--accent-clay)" style={{ flexShrink: 0 }} />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Bottom CTA */}
                <div className="workshop-card-footer" style={{
                  display: 'flex',
                  alignItems: 'center',
                  justify: 'space-between',
                  gap: '0.85rem',
                  paddingTop: '1.25rem',
                  borderTop: '1px solid var(--border-subtle)',
                  marginTop: '0.5rem'
                }}>
                  <span style={{
                    fontSize: '0.725rem',
                    color: 'var(--accent-clay)',
                    fontWeight: 700,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase'
                  }}>
                    Enquire for Availability
                  </span>

                  <button
                    onClick={() => onOpenBooking(item.title)}
                    className="btn-primary workshop-book-btn"
                    style={{
                      padding: '0.75rem 1.35rem',
                      fontSize: '0.75rem',
                      borderRadius: '4px',
                      minHeight: '44px'
                    }}
                  >
                    <span>Book Workshop</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .workshops-grid { grid-template-columns: 1fr !important; gap: 1.75rem !important; }
        }
        @media (max-width: 576px) {
          .workshop-card-footer { flex-direction: column !important; align-items: stretch !important; text-align: center !important; }
          .workshop-book-btn { width: 100% !important; justify-content: center !important; }
        }
      `}</style>
    </section>
  );
}
