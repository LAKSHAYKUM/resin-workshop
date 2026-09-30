import React from 'react';
import { MessageSquare, Calendar } from 'lucide-react';
import { studioInfo, locationDetails } from '../data/flowData';

export default function StickyMobileBar({ onOpenBooking }) {
  return (
    <div className="sticky-mobile-bar" style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 90,
      backgroundColor: 'rgba(18, 17, 16, 0.96)',
      backdropFilter: 'blur(12px)',
      borderTop: '1px solid rgba(247, 244, 239, 0.12)',
      padding: '0.65rem 0.85rem',
      display: 'none',
      justify: 'space-between',
      alignItems: 'center',
      gap: '0.65rem',
      boxShadow: '0 -10px 25px rgba(0,0,0,0.3)'
    }}>
      <button
        onClick={onOpenBooking}
        className="btn-primary"
        style={{
          flex: 1,
          padding: '0.65rem 0.5rem',
          fontSize: '0.75rem',
          backgroundColor: '#C5A87C',
          borderColor: '#C5A87C',
          color: '#121110',
          fontWeight: 600,
          minHeight: '46px',
          borderRadius: '4px'
        }}
      >
        <Calendar size={14} />
        <span>Book Workshop</span>
      </button>

      <a
        href={locationDetails.whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="btn-whatsapp"
        style={{
          flex: 1,
          padding: '0.65rem 0.5rem',
          fontSize: '0.75rem',
          justify: 'center',
          minHeight: '46px',
          borderRadius: '4px'
        }}
      >
        <MessageSquare size={14} />
        <span>WhatsApp</span>
      </a>

      <style>{`
        @media (max-width: 768px) {
          .sticky-mobile-bar { display: flex !important; }
        }
      `}</style>
    </div>
  );
}
