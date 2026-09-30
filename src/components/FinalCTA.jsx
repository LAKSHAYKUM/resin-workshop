import React from 'react';
import { studioInfo, locationDetails } from '../data/flowData';
import { ArrowUpRight, MessageSquare, Sparkles } from 'lucide-react';

export default function FinalCTA({ onOpenBooking }) {
  return (
    <section className="section-padding" style={{
      backgroundColor: 'var(--bg-primary)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="container-custom">
        <div style={{
          backgroundColor: 'var(--bg-dark)',
          color: 'var(--text-on-dark)',
          borderRadius: '4px',
          padding: 'clamp(3rem, 6vw, 6rem) clamp(2rem, 5vw, 4rem)',
          textAlign: 'center',
          position: 'relative',
          boxShadow: 'var(--shadow-elevated)',
          border: '1px solid var(--border-dark)'
        }}>
          {/* Decorative Sparkle Tag */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            marginBottom: '1.25rem'
          }}>
            <Sparkles size={16} color="var(--accent-gold)" />
            <span style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.75rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'var(--accent-gold)',
              fontWeight: 600
            }}>
              Dubai Creative Workshop
            </span>
          </div>

          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2.2rem, 5vw, 4.2rem)',
            fontWeight: 400,
            lineHeight: 1.1,
            color: '#FFFFFF',
            maxWidth: '820px',
            margin: '0 auto 1.5rem auto'
          }}>
            {studioInfo.closingHeadline}
          </h2>

          <p style={{
            fontSize: 'clamp(1rem, 1.4vw, 1.25rem)',
            color: 'var(--text-muted-dark)',
            maxWidth: '620px',
            margin: '0 auto 2.5rem auto',
            lineHeight: 1.6
          }}>
            {studioInfo.closingSubtitle}
          </p>

          <div className="gold-line" style={{ margin: '0 auto 2.5rem auto' }}></div>

          {/* Action Buttons */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justify: 'center',
            flexWrap: 'wrap',
            gap: '1.25rem'
          }}>
            <button
              onClick={onOpenBooking}
              className="btn-primary"
              style={{
                backgroundColor: 'var(--accent-gold)',
                borderColor: 'var(--accent-gold)',
                color: '#121110',
                fontWeight: 600,
                padding: '1.1rem 2.5rem'
              }}
            >
              <span>Book a Workshop</span>
              <ArrowUpRight size={16} />
            </button>

            <a
              href={locationDetails.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-whatsapp"
              style={{ padding: '1.1rem 2.25rem' }}
            >
              <MessageSquare size={18} />
              <span>WhatsApp Flow Studio</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
