import React, { useState } from 'react';
import { Maximize2, Upload } from 'lucide-react';

export default function Gallery({ galleryItems, onOpenLightbox, onOpenImageManager }) {
  const [activeTab, setActiveTab] = useState('All Works');

  const categories = ['All Works', 'Ocean Waves', 'Geode & Agate', 'Studio Shots'];

  const filteredItems = activeTab === 'All Works'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeTab);

  return (
    <section id="gallery" className="section-padding" style={{
      backgroundColor: 'var(--bg-sand-dark)',
      borderTop: '1px solid var(--border-subtle)',
      borderBottom: '1px solid var(--border-subtle)'
    }}>
      <div className="container-custom">
        {/* Gallery Header */}
        <div style={{
          textAlign: 'center',
          maxWidth: '720px',
          margin: '0 auto 3rem auto'
        }}>
          <span className="eyebrow" style={{ color: 'var(--accent-clay)' }}>Visual Gallery</span>
          <h2 className="heading-section" style={{ color: 'var(--text-main)', marginBottom: '0.75rem' }}>
            Made by You.
          </h2>
          <div className="gold-line" style={{ margin: '1rem auto' }}></div>
          <p style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1.25rem',
            color: 'var(--text-muted)',
            fontStyle: 'italic',
            lineHeight: 1.5
          }}>
            “Every piece begins with an idea — and ends with something uniquely yours.”
          </p>
        </div>

        {/* Filter Tabs */}
        <div style={{
          display: 'flex',
          justify: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '0.75rem',
          marginBottom: '2.5rem',
          borderBottom: '1px solid var(--border-subtle)',
          paddingBottom: '1.25rem'
        }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              style={{
                background: activeTab === cat ? 'var(--text-main)' : 'var(--bg-primary)',
                color: activeTab === cat ? '#FFFFFF' : 'var(--text-main)',
                border: activeTab === cat ? '1px solid var(--text-main)' : '1px solid var(--border-subtle)',
                padding: '0.55rem 1.35rem',
                fontSize: '0.8125rem',
                fontFamily: 'var(--font-sans)',
                fontWeight: 600,
                letterSpacing: '0.05em',
                cursor: 'pointer',
                borderRadius: '20px',
                transition: 'all 0.3s ease'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Asymmetrical Masonry Grid Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '1.75rem'
        }} className="gallery-masonry">
          {filteredItems.map((item, index) => {
            // Determine span based on item aspect ratio or index
            const isWide = item.aspectRatio === 'wide' || index % 3 === 0;
            const spanCols = isWide ? 'span 7' : 'span 5';

            return (
              <div
                key={item.id}
                onClick={() => onOpenLightbox(item)}
                style={{
                  gridColumn: spanCols,
                  position: 'relative',
                  cursor: 'pointer',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-subtle)',
                  border: '1px solid var(--border-subtle)',
                  minHeight: '340px'
                }}
                className="gallery-item-card tilt-card"
              >
                <div className="img-container" style={{ width: '100%', height: '100%', position: 'relative' }}>
                  <img
                    src={item.src}
                    alt={item.title}
                    className="img-editorial"
                    style={{ width: '100%', height: '100%', minHeight: '340px', objectFit: 'cover' }}
                  />

                  {/* Overlay Gradient on Hover */}
                  <div className="gallery-overlay" style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(18, 17, 16, 0.88), rgba(18, 17, 16, 0.2) 60%, transparent)',
                    display: 'flex',
                    flexDirection: 'column',
                    justify: 'flex-end',
                    padding: '1.75rem',
                    color: '#F7F4EF',
                    opacity: 0,
                    transition: 'opacity 0.4s var(--ease-out-smooth)'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                      <div>
                        <span style={{
                          fontSize: '0.6875rem',
                          textTransform: 'uppercase',
                          letterSpacing: '0.15em',
                          color: 'var(--accent-gold)',
                          fontWeight: 600
                        }}>
                          {item.category}
                        </span>
                        <h4 style={{
                          fontFamily: 'var(--font-serif)',
                          fontSize: '1.4rem',
                          fontWeight: 500,
                          lineHeight: 1.2,
                          marginTop: '0.25rem'
                        }}>
                          {item.title}
                        </h4>
                        <p style={{
                          fontSize: '0.8rem',
                          color: 'var(--text-muted-dark)',
                          marginTop: '0.25rem'
                        }}>
                          {item.subtitle}
                        </p>
                      </div>

                      <div style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(255,255,255,0.15)',
                        backdropFilter: 'blur(6px)',
                        display: 'flex',
                        alignItems: 'center',
                        justify: 'center',
                        color: '#FFFFFF'
                      }}>
                        <Maximize2 size={16} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .gallery-item-card:hover .gallery-overlay {
          opacity: 1 !important;
        }
        @media (max-width: 900px) {
          .gallery-masonry > div { grid-column: span 12 !important; min-height: 280px !important; }
        }
      `}</style>
    </section>
  );
}
