import React from 'react';
import { studioInfo, locationDetails } from '../data/flowData';
import { ArrowUp, Phone, MapPin, MessageSquare, Compass } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      backgroundColor: 'var(--bg-dark)',
      color: 'var(--text-on-dark)',
      paddingTop: '4rem',
      paddingBottom: '3rem',
      borderTop: '1px solid var(--border-dark)'
    }}>
      <div className="container-custom">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '3rem',
          marginBottom: '3.5rem'
        }}>
          {/* Brand Info (Span 4) */}
          <div style={{ gridColumn: 'span 4' }}>
            <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '1.25rem' }}>
              <span style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.8rem',
                fontWeight: 600,
                letterSpacing: '0.08em',
                color: '#FFFFFF'
              }}>
                FLOW STUDIO
              </span>
              <span style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.65rem',
                letterSpacing: '0.3em',
                color: 'var(--accent-gold)',
                textTransform: 'uppercase',
                marginTop: '0.2rem',
                fontWeight: 600
              }}>
                BY SURUCHI
              </span>
            </div>

            <p style={{
              fontSize: '0.875rem',
              color: 'var(--text-muted-dark)',
              lineHeight: 1.6,
              maxWidth: '320px',
              marginBottom: '1.5rem'
            }}>
              Resin art studio & creative workshops in Dubai. Hands-on guided experiences for beginners and art lovers.
            </p>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <a
                href={locationDetails.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255,255,255,0.06)',
                  color: 'var(--accent-gold)',
                  display: 'flex',
                  alignItems: 'center',
                  justify: 'center',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease'
                }}
                aria-label="WhatsApp"
              >
                <MessageSquare size={16} />
              </a>
              <a
                href={locationDetails.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255,255,255,0.06)',
                  color: 'var(--accent-gold)',
                  display: 'flex',
                  alignItems: 'center',
                  justify: 'center',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease'
                }}
                aria-label="Google Maps"
              >
                <MapPin size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links (Span 4) */}
          <div style={{ gridColumn: 'span 4' }}>
            <h4 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.2rem',
              color: '#FFFFFF',
              marginBottom: '1.25rem'
            }}>
              Navigation
            </h4>

            <ul style={{
              listStyle: 'none',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
              fontSize: '0.875rem',
              color: 'var(--text-muted-dark)'
            }}>
              <li><a href="#hero" style={{ color: 'inherit', textDecoration: 'none' }}>Home</a></li>
              <li><a href="#intro" style={{ color: 'inherit', textDecoration: 'none' }}>Studio Philosophy</a></li>
              <li><a href="#experience" style={{ color: 'inherit', textDecoration: 'none' }}>Workshop Experience</a></li>
              <li><a href="#workshops" style={{ color: 'inherit', textDecoration: 'none' }}>Available Sessions</a></li>
              <li><a href="#gallery" style={{ color: 'inherit', textDecoration: 'none' }}>Artwork Gallery</a></li>
              <li><a href="#location" style={{ color: 'inherit', textDecoration: 'none' }}>Studio Location</a></li>
            </ul>
          </div>

          {/* Location & Contact Summary (Span 4) */}
          <div style={{ gridColumn: 'span 4' }}>
            <h4 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.2rem',
              color: '#FFFFFF',
              marginBottom: '1.25rem'
            }}>
              Mankhool Studio
            </h4>

            <div style={{ fontSize: '0.875rem', color: 'var(--text-muted-dark)', lineHeight: 1.6 }}>
              <p style={{ marginBottom: '0.5rem' }}>{studioInfo.name} By Suruchi</p>
              <p style={{ marginBottom: '0.5rem' }}>{studioInfo.address}</p>
              <p style={{ color: 'var(--accent-gold)', marginTop: '1rem', fontWeight: 500 }}>
                {studioInfo.phone}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div style={{
          paddingTop: '2rem',
          borderTop: '1px solid var(--border-dark)',
          display: 'flex',
          justify: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.75rem',
          color: 'var(--text-muted-dark)'
        }}>
          <div>
            © {new Date().getFullYear()} Flow Studio By Suruchi. Resin Art Dubai. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--accent-gold)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.75rem',
              fontWeight: 600
            }}
          >
            <span>Back to Top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          footer .container-custom > div:first-child > div {
            grid-column: span 12 !important;
          }
        }
      `}</style>
    </footer>
  );
}
