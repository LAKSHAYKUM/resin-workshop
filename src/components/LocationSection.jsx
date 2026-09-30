import React from 'react';
import { locationDetails, studioInfo } from '../data/flowData';
import { MapPin, Phone, ExternalLink, MessageSquare, Compass, Clock, Navigation } from 'lucide-react';

export default function LocationSection({ onOpenBooking }) {
  return (
    <section id="location" className="section-padding" style={{
      backgroundColor: 'var(--bg-surface)',
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
          {/* Left Column: Address Details (Span 5) */}
          <div className="location-text-col" style={{ gridColumn: 'span 5' }}>
            <span className="eyebrow" style={{ color: 'var(--accent-clay)' }}>Studio Sanctuary</span>
            
            <h2 className="heading-section" style={{ marginBottom: '1.25rem', color: 'var(--text-main)' }}>
              Visit Flow Studio
            </h2>

            <div className="gold-line"></div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem', margin: '2rem 0' }}>
              {/* Address Box */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '2px',
                  backgroundColor: 'var(--bg-sand)',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justify: 'center',
                  flexShrink: 0
                }}>
                  <MapPin size={20} color="var(--accent-clay)" />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent-clay)', fontWeight: 700 }}>
                    Location
                  </div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--text-main)', marginTop: '0.2rem' }}>
                    {locationDetails.building} - Suite 304
                  </div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                    {locationDetails.neighborhood}, {locationDetails.city}, UAE
                  </div>
                </div>
              </div>

              {/* Phone Box */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '2px',
                  backgroundColor: 'var(--bg-sand)',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justify: 'center',
                  flexShrink: 0
                }}>
                  <Phone size={20} color="var(--accent-clay)" />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent-clay)', fontWeight: 700 }}>
                    Direct Phone / Enquiries
                  </div>
                  <a
                    href={`tel:${studioInfo.phone.replace(/\s+/g, '')}`}
                    style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--text-main)', textDecoration: 'none', marginTop: '0.2rem', display: 'block' }}
                  >
                    {studioInfo.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="location-cta-group" style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '2rem' }}>
              <a
                href={locationDetails.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-primary location-btn"
                style={{ padding: '0.85rem 1.75rem', minHeight: '48px' }}
              >
                <span>Get Directions</span>
                <Navigation size={14} />
              </a>

              <a
                href={locationDetails.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-whatsapp location-btn"
                style={{ padding: '0.85rem 1.75rem', minHeight: '48px' }}
              >
                <MessageSquare size={16} />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

          {/* Right Column: Simulated Dubai Interactive Map (Span 7) */}
          <div className="location-map-col" style={{ gridColumn: 'span 7' }}>
            <div style={{
              position: 'relative',
              backgroundColor: '#1C1A18',
              borderRadius: '8px',
              padding: '2rem 1.5rem',
              color: '#F7F4EF',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-elevated)',
              border: '1px solid var(--border-dark)',
              minHeight: '380px',
              display: 'flex',
              flexDirection: 'column',
              justify: 'space-between'
            }}>
              {/* Map Canvas Background Grid effect */}
              <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: 'radial-gradient(circle, rgba(197, 168, 124, 0.12) 1px, transparent 1px)',
                backgroundSize: '24px 24px',
                opacity: 0.7,
                pointerEvents: 'none'
              }}></div>

              {/* Map Header Overlay */}
              <div style={{ position: 'relative', zIndex: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Compass size={16} color="#C5A87C" />
                  <span style={{ fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C5A87C', fontWeight: 600 }}>
                    Mankhool • Dubai
                  </span>
                </div>

                <div style={{
                  backgroundColor: 'rgba(37, 211, 102, 0.15)',
                  color: '#25D366',
                  padding: '0.25rem 0.65rem',
                  borderRadius: '20px',
                  fontSize: '0.7rem',
                  fontWeight: 600
                }}>
                  Open Sessions
                </div>
              </div>

              {/* Map Pin Box Center */}
              <div style={{
                position: 'relative',
                zIndex: 1,
                margin: '1.5rem auto',
                textAlign: 'center',
                backgroundColor: 'rgba(18, 17, 16, 0.88)',
                backdropFilter: 'blur(10px)',
                padding: '1.5rem 1.25rem',
                borderRadius: '8px',
                border: '1px solid rgba(197, 168, 124, 0.3)',
                width: '100%',
                maxWidth: '400px'
              }}>
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--accent-gold)',
                  color: '#121110',
                  display: 'flex',
                  alignItems: 'center',
                  justify: 'center',
                  margin: '0 auto 0.85rem auto',
                  boxShadow: '0 0 25px rgba(197, 168, 124, 0.5)'
                }}>
                  <MapPin size={24} />
                </div>

                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', color: '#FFFFFF', fontWeight: 500 }}>
                  Flow Studio By Suruchi
                </h3>
                <p style={{ fontSize: '0.825rem', color: 'var(--text-muted-dark)', marginTop: '0.35rem' }}>
                  Mashrabia Building, Suite 304, Mankhool, Dubai, UAE
                </p>

                <div style={{ marginTop: '1.15rem' }}>
                  <button
                    onClick={onOpenBooking}
                    className="btn-primary"
                    style={{ width: '100%', fontSize: '0.75rem', minHeight: '44px' }}
                  >
                    Reserve Session
                  </button>
                </div>
              </div>

              {/* Map Footer Note */}
              <div style={{ position: 'relative', zIndex: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.725rem', color: 'var(--text-muted-dark)', flexWrap: 'wrap', gap: '0.5rem' }}>
                <span>Mankhool • Dubai, UAE</span>
                <a
                  href={locationDetails.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: '#C5A87C', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.3rem', minHeight: '44px' }}
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .location-text-col, .location-map-col { grid-column: span 12 !important; }
          .location-map-col { margin-top: 2rem; }
        }
        @media (max-width: 576px) {
          .location-cta-group { flex-direction: column !important; }
          .location-btn { width: 100% !important; justify-content: center !important; }
        }
      `}</style>
    </section>
  );
}
