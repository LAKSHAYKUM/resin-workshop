import React from 'react';
import { X, Sparkles, MapPin, Tag } from 'lucide-react';

export default function LightboxModal({ item, onClose, onBookItem }) {
  if (!item) return null;

  return (
    <div className="lightbox-overlay" onClick={onClose} style={{ zIndex: 3000 }}>
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'relative',
          maxWidth: '1000px',
          width: '100%',
          backgroundColor: '#121110',
          borderRadius: '4px',
          overflow: 'hidden',
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          border: '1px solid rgba(247, 244, 239, 0.15)',
          boxShadow: 'var(--shadow-elevated)'
        }}
        className="lightbox-content"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            zIndex: 10,
            background: 'rgba(0,0,0,0.6)',
            border: 'none',
            color: '#FFFFFF',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justify: 'center'
          }}
        >
          <X size={20} />
        </button>

        {/* Left Column Image (Span 7) */}
        <div style={{ gridColumn: 'span 7', backgroundColor: '#000000', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img
            src={item.src}
            alt={item.title}
            style={{ width: '100%', maxHeight: '75vh', objectFit: 'contain' }}
          />
        </div>

        {/* Right Column Editorial Info (Span 5) */}
        <div style={{
          gridColumn: 'span 5',
          padding: '2.5rem',
          color: '#F7F4EF',
          display: 'flex',
          flexDirection: 'column',
          justify: 'space-between',
          backgroundColor: '#1C1A18'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.5rem' }}>
              <Tag size={13} color="#C5A87C" />
              <span style={{ fontSize: '0.725rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C5A87C', fontWeight: 600 }}>
                {item.category}
              </span>
            </div>

            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', fontWeight: 500, color: '#FFFFFF', marginBottom: '0.75rem', lineHeight: 1.15 }}>
              {item.title}
            </h3>

            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted-dark)', marginBottom: '1.5rem', lineHeight: 1.5 }}>
              {item.subtitle}
            </p>

            <div className="gold-line" style={{ margin: '1.25rem 0' }}></div>

            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted-dark)', lineHeight: 1.6 }}>
              <p style={{ marginBottom: '0.5rem' }}>• High-gloss non-yellowing epoxy resin coating</p>
              <p style={{ marginBottom: '0.5rem' }}>• Created during guided sessions in Mankhool, Dubai</p>
              <p style={{ marginBottom: '0.5rem' }}>• Custom pigments, cell lacing & metallic gilding</p>
            </div>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <button
              onClick={() => {
                onClose();
                onBookItem(item.title);
              }}
              className="btn-primary"
              style={{ width: '100%', backgroundColor: '#C5A87C', borderColor: '#C5A87C', color: '#121110', fontWeight: 600 }}
            >
              Enquire About Creating This Piece
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 800px) {
          .lightbox-content { grid-template-columns: 1fr !important; }
          .lightbox-content > div { grid-column: span 12 !important; }
        }
      `}</style>
    </div>
  );
}
