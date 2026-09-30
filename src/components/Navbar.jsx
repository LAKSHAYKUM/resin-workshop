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
        fontSize: '0.75rem',
        letterSpacing: '0.08em',
        padding: '0.5rem 0',
        borderBottom: '1px solid rgba(247, 244, 239, 0.08)'
      }}>
        <div className="container-custom" style={{
          display: 'flex',
          justify: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '0.5rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{
              display: 'inline-block',
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              backgroundColor: '#C5A87C'
            }}></span>
            <span>Mashrabia Building, Mankhool • Dubai, UAE</span>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#E8D2B4' }}>
              <Star size={12} fill="#C5A87C" color="#C5A87C" />
              <span style={{ fontWeight: 600 }}>{studioInfo.rating}</span>
              <span style={{ color: '#9E968B' }}>({studioInfo.reviewCount} Google Reviews)</span>
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
        backgroundColor: scrolled ? 'rgba(250, 243, 240, 0.96)' : 'rgba(250, 243, 240, 0.92)',
        backdropFilter: 'blur(12px)',
        borderBottom: scrolled ? '1px solid var(--border-subtle)' : '1px solid transparent',
        transition: 'all 0.3s ease',
        padding: scrolled ? '0.85rem 0' : '1.25rem 0'
      }}>
        <div className="container-custom" style={{
          display: 'flex',
          alignItems: 'center',
          justify: 'space-between'
        }}>
          {/* Logo */}
          <a href="#hero" style={{ textDecoration: 'none', color: 'var(--text-main)' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.6rem',
                fontWeight: 600,
                letterSpacing: '0.08em',
                lineHeight: 1
              }}>
                FLOW STUDIO
              </span>
              <span style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.625rem',
                letterSpacing: '0.3em',
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
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            {/* Primary CTA */}
            <button
              onClick={() => onOpenBooking()}
              className="btn-primary"
              style={{ padding: '0.75rem 1.4rem', fontSize: '0.75rem' }}
            >
              Book a Workshop
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-toggle"
              style={{
                display: 'none',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--text-main)',
                padding: '0.25rem'
              }}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            width: '100%',
            backgroundColor: '#FAF8F5',
            borderBottom: '1px solid var(--border-subtle)',
            padding: '1.5rem 0',
            boxShadow: '0 20px 30px rgba(0,0,0,0.08)'
          }}>
            <div className="container-custom" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    textDecoration: 'none',
                    color: 'var(--text-main)',
                    fontSize: '1.1rem',
                    fontFamily: 'var(--font-serif)',
                    fontWeight: 500,
                    letterSpacing: '0.04em',
                    borderBottom: '1px solid var(--border-subtle)',
                    paddingBottom: '0.5rem'
                  }}
                >
                  {link.name}
                </a>
              ))}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '0.5rem' }}>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="btn-primary"
                  style={{ width: '100%' }}
                >
                  Book a Workshop
                </button>

                <a
                  href={locationDetails?.whatsappUrl || `https://wa.me/${studioInfo.whatsappNumber}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-whatsapp"
                  style={{ textAlign: 'center', justifyContent: 'center' }}
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
          .hide-mobile { display: none !important; }
        }
      `}</style>
    </>
  );
}
