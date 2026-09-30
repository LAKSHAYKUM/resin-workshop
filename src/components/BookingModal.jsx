import React, { useState } from 'react';
import { X, Calendar, Users, Sparkles, MessageSquare, CheckCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { workshopTemplates, studioInfo } from '../data/flowData';

export default function BookingModal({ isOpen, onClose, selectedWorkshopName }) {
  const [selectedWorkshop, setSelectedWorkshop] = useState(selectedWorkshopName || workshopTemplates[0].title);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [participants, setParticipants] = useState('1 Person');
  const [preferredDay, setPreferredDay] = useState('Weekend Session');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Trigger celebratory confetti animation
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });

    // Prepare prefilled WhatsApp message URL
    const message = `Hello Suruchi! I would like to book / enquire about a workshop at Flow Studio:
    
- Workshop: ${selectedWorkshop}
- Name: ${name || 'Interested Guest'}
- Phone: ${phone || 'Not provided'}
- Participants: ${participants}
- Preferred Day: ${preferredDay}
${notes ? `- Notes: ${notes}` : ''}`;

    const whatsappUrl = `https://wa.me/${studioInfo.whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 1200);
  };

  return (
    <div className="lightbox-overlay" style={{ zIndex: 2000 }}>
      <div style={{
        backgroundColor: 'var(--bg-primary)',
        width: '100%',
        maxWidth: '560px',
        borderRadius: '4px',
        border: '1px solid var(--border-light)',
        boxShadow: 'var(--shadow-elevated)',
        padding: '2.25rem',
        position: 'relative',
        maxHeight: '90vh',
        overflowY: 'auto'
      }}>
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            background: 'none',
            border: 'none',
            color: 'var(--text-main)',
            cursor: 'pointer',
            padding: '0.25rem'
          }}
        >
          <X size={22} />
        </button>

        {!submitted ? (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <Sparkles size={16} color="var(--accent-gold-dark)" />
              <span className="eyebrow" style={{ margin: 0 }}>Enquire / Reserve Seat</span>
            </div>

            <h3 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.8rem',
              color: 'var(--text-main)',
              marginBottom: '0.5rem'
            }}>
              Book a Workshop
            </h3>

            <p style={{
              fontSize: '0.875rem',
              color: 'var(--text-muted)',
              marginBottom: '1.75rem',
              lineHeight: 1.5
            }}>
              Select your preferred resin art session. We will immediately confirm current availability and details with you via WhatsApp or phone.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {/* Select Workshop */}
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.4rem' }}>
                  Select Workshop Medium
                </label>
                <select
                  value={selectedWorkshop}
                  onChange={(e) => setSelectedWorkshop(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '2px',
                    border: '1px solid var(--border-subtle)',
                    backgroundColor: '#FFFFFF',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.875rem',
                    color: 'var(--text-main)'
                  }}
                >
                  {workshopTemplates.map(w => (
                    <option key={w.id} value={w.title}>{w.title}</option>
                  ))}
                </select>
              </div>

              {/* Name & Phone */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.4rem' }}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '2px',
                      border: '1px solid var(--border-subtle)',
                      backgroundColor: '#FFFFFF',
                      fontSize: '0.875rem'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.4rem' }}>
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+971 50 ..."
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '2px',
                      border: '1px solid var(--border-subtle)',
                      backgroundColor: '#FFFFFF',
                      fontSize: '0.875rem'
                    }}
                  />
                </div>
              </div>

              {/* Participants & Day */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.4rem' }}>
                    Group Size
                  </label>
                  <select
                    value={participants}
                    onChange={(e) => setParticipants(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '2px',
                      border: '1px solid var(--border-subtle)',
                      backgroundColor: '#FFFFFF',
                      fontSize: '0.875rem'
                    }}
                  >
                    <option value="1 Person (Solo)">1 Person (Solo)</option>
                    <option value="2 People (Duo)">2 People (Duo)</option>
                    <option value="3-5 People (Group)">3-5 People (Group)</option>
                    <option value="Private Booking (6+)">Private Booking (6+)</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.4rem' }}>
                    Preferred Timing
                  </label>
                  <select
                    value={preferredDay}
                    onChange={(e) => setPreferredDay(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '2px',
                      border: '1px solid var(--border-subtle)',
                      backgroundColor: '#FFFFFF',
                      fontSize: '0.875rem'
                    }}
                  >
                    <option value="Weekend Morning">Weekend Morning</option>
                    <option value="Weekend Afternoon">Weekend Afternoon</option>
                    <option value="Weekday Evening">Weekday Evening</option>
                    <option value="Custom Private Date">Custom Private Date</option>
                  </select>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.4rem' }}>
                  Special Requests / Questions (Optional)
                </label>
                <textarea
                  rows="2"
                  placeholder="e.g. Birthday celebration, specific color theme..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '2px',
                    border: '1px solid var(--border-subtle)',
                    backgroundColor: '#FFFFFF',
                    fontSize: '0.875rem',
                    fontFamily: 'var(--font-sans)'
                  }}
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn-primary"
                style={{ width: '100%', marginTop: '0.5rem' }}
              >
                <MessageSquare size={16} />
                <span>Send WhatsApp Enquiry</span>
              </button>
            </form>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
            <div style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              backgroundColor: 'rgba(37, 211, 102, 0.15)',
              color: '#25D366',
              display: 'flex',
              alignItems: 'center',
              justify: 'center',
              margin: '0 auto 1.25rem auto'
            }}>
              <CheckCircle size={36} />
            </div>

            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>
              Enquiry Sent!
            </h3>

            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.75rem' }}>
              Redirecting you to WhatsApp to connect directly with Suruchi...
            </p>

            <button onClick={onClose} className="btn-secondary">
              Close Window
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
