import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Star, Sparkles, Image as ImageIcon } from 'lucide-react';
import { studioInfo } from '../data/flowData';

export default function Navbar({ onOpenBooking, onOpenImageManager }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Experience', href: '#experience' },
    { name: 'Workshops', href: '#workshops' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'About', href: '#about' },
    { name: 'Location', href: '#location' },
  ];

  return (
    <>
      {/* Top Banner for Dubai Location & Reputation */}
      <div style={{
        backgroundColor: '#121110',
        color: '#D6C5B3',
        fontSize: '0.725rem',
        letterSpacing: '0.06em',
        padding: '0.45rem 0',
        borderBottom: '1px solid rgba(247, 244, 239, 0.08)'
      }}>
        <div className="container-custom" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '0.35rem 1rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <span style={{
              display: 'inline-block',
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              backgroundColor: '#C5A87C',
              flexShrink: 0
            }}></span>
            <span>Mankhool • Dubai, UAE</span>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#E8D2B4' }}>
              <Star size={12} fill="#C5A87C" color="#C5A87C" />
              <span style={{ fontWeight: 600 }}>{studioInfo.rating}</span>
              <span className="hide-mobile-meta" style={{ color: '#9E968B' }}>({studioInfo.reviewCount} Reviews)</span>
            </div>
            
            <a 
              href={`https://wa.me/${studioInfo.whatsappNumber}`} 
              target="_blank" 
              rel="noreferrer"
              style={{ color: '#D6C5B3', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.3rem' }}
            >
              <Phone size={12} />
              <span>{studioInfo.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: scrolled ? 'rgba(250, 243, 240, 0.96)' : 'rgba(250, 243, 240, 0.94)',
        backdropFilter: 'blur(12px)',
        borderBottom: scrolled ? '1px solid var(--border-subtle)' : '1px solid transparent',
        transition: 'all 0.3s ease',
        padding: scrolled ? '0.75rem 0' : '1rem 0'
      }}>
        <div className="container-custom" style={{
          display: 'flex',
          alignItems: 'center',
          justify: 'space-between',
          gap: '0.75rem'
        }}>
          {/* Logo */}
          <a href="#hero" style={{ textDecoration: 'none', color: 'var(--text-main)' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span className="navbar-logo-title" style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.45rem',
                fontWeight: 600,
                letterSpacing: '0.06em',
                lineHeight: 1
              }}>
                FLOW STUDIO
              </span>
              <span style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.575rem',
                letterSpacing: '0.28em',
                color: 'var(--accent-gold-dark)',
                textTransform: 'uppercase',
                marginTop: '0.2rem',
                fontWeight: 600
              }}>
                BY SURUCHI
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="desktop-nav" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2rem'
          }}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                style={{
                  textDecoration: 'none',
                  color: 'var(--text-main)',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  letterSpacing: '0.05em',
                  transition: 'color 0.25s ease'
                }}
                onMouseOver={(e) => e.target.style.color = 'var(--accent-gold-dark)'}
                onMouseOut={(e) => e.target.style.color = 'var(--text-main)'}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            {/* Primary Header CTA */}
            <button
              onClick={() => onOpenBooking()}
              className="btn-primary header-cta-btn"
              style={{
                padding: '0.65rem 1.15rem',
                fontSize: '0.725rem',
                minHeight: '40px',
                borderRadius: '4px'
              }}
            >
              <span className="cta-full-text">Book a Workshop</span>
              <span className="cta-short-text">Book Now</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-toggle"
              style={{
                display: 'none',
                background: 'none',
                border: '1px solid var(--border-subtle)',
                borderRadius: '4px',
                cursor: 'pointer',
                color: 'var(--text-main)',
                padding: '0.5rem',
                minWidth: '44px',
                minHeight: '44px',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div style={{
            position: 'fixed',
            top: 'calc(100% - 1px)',
            left: 0,
            width: '100%',
            height: 'calc(100vh - 100%)',
            backgroundColor: 'rgba(250, 243, 240, 0.98)',
            backdropFilter: 'blur(16px)',
            borderBottom: '1px solid var(--border-subtle)',
            padding: '1.75rem 0 3rem 0',
            boxShadow: '0 25px 40px rgba(0,0,0,0.12)',
            overflowY: 'auto',
            zIndex: 99
          }}>
            <div className="container-custom" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    textDecoration: 'none',
                    color: 'var(--text-main)',
                    fontSize: '1.25rem',
                    fontFamily: 'var(--font-serif)',
                    fontWeight: 500,
                    letterSpacing: '0.03em',
                    borderBottom: '1px solid var(--border-subtle)',
                    padding: '0.9rem 0',
                    display: 'flex',
                    alignItems: 'center',
                    justify: 'space-between',
                    minHeight: '48px'
                  }}
                >
                  <span>{link.name}</span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--accent-clay)' }}>→</span>
                </a>
              ))}
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginTop: '1.5rem' }}>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="btn-primary"
                  style={{ width: '100%', minHeight: '50px', fontSize: '0.85rem' }}
                >
                  Book a Workshop
                </button>

                <a
                  href={`https://wa.me/${studioInfo.whatsappNumber}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-whatsapp"
                  style={{ width: '100%', textAlign: 'center', justifyContent: 'center', minHeight: '50px', fontSize: '0.85rem' }}
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      <style>{`
        .cta-short-text { display: none; }
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: inline-flex !important; }
        }
        @media (max-width: 520px) {
          .navbar-logo-title { font-size: 1.25rem !important; }
          .cta-full-text { display: none !important; }
          .cta-short-text { display: inline !important; }
          .hide-mobile-meta { display: none !important; }
        }
      `}</style>
    </>
  );
}
