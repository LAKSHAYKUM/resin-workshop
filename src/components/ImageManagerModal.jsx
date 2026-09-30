import React, { useState } from 'react';
import { X, Upload, Check, RefreshCw, Sparkles, Image as ImageIcon } from 'lucide-react';

export default function ImageManagerModal({
  isOpen,
  onClose,
  heroImage,
  setHeroImage,
  studioImage,
  setStudioImage,
  suruchiImage,
  setSuruchiImage,
  galleryImages,
  setGalleryImages
}) {
  const [newHeroUrl, setNewHeroUrl] = useState('');
  const [newStudioUrl, setNewStudioUrl] = useState('');
  const [newGalleryUrl, setNewGalleryUrl] = useState('');
  const [newGalleryTitle, setNewGalleryTitle] = useState('');
  const [newGalleryCategory, setNewGalleryCategory] = useState('Ocean Waves');
  const [savedMessage, setSavedMessage] = useState('');

  if (!isOpen) return null;

  const handleFileUpload = (e, target) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result;
        if (target === 'hero') {
          setHeroImage(result);
          localStorage.setItem('flow_hero_img', result);
        } else if (target === 'studio') {
          setStudioImage(result);
          localStorage.setItem('flow_studio_img', result);
        } else if (target === 'suruchi') {
          setSuruchiImage(result);
          localStorage.setItem('flow_suruchi_img', result);
        } else if (target === 'gallery') {
          const newItem = {
            id: Date.now(),
            title: newGalleryTitle || 'Dubai Studio Creation',
            category: newGalleryCategory,
            subtitle: 'Uploaded Flow Studio Google photo',
            src: result,
            aspectRatio: 'square',
            tags: ['Uploaded Photo', 'Flow Studio']
          };
          const updated = [newItem, ...galleryImages];
          setGalleryImages(updated);
          localStorage.setItem('flow_gallery_imgs', JSON.stringify(updated));
        }
        showSuccess('Photo updated seamlessly across the site!');
      };
      reader.readAsDataURL(file);
    }
  };

  const showSuccess = (msg) => {
    setSavedMessage(msg);
    setTimeout(() => setSavedMessage(''), 3000);
  };

  const resetToDefaults = () => {
    localStorage.removeItem('flow_hero_img');
    localStorage.removeItem('flow_studio_img');
    localStorage.removeItem('flow_suruchi_img');
    localStorage.removeItem('flow_gallery_imgs');
    setHeroImage('/images/ocean_resin_pedestals.jpg');
    setStudioImage('/images/workshop_guidance_heatgun.jpg');
    setSuruchiImage('/images/suruchi_portrait.jpg');
    window.location.reload();
  };

  return (
    <div className="lightbox-overlay" style={{ zIndex: 4000 }}>
      <div style={{
        backgroundColor: 'var(--bg-primary)',
        width: '100%',
        maxWidth: '680px',
        borderRadius: '4px',
        border: '1px solid var(--border-light)',
        boxShadow: 'var(--shadow-elevated)',
        padding: '2.25rem',
        position: 'relative',
        maxHeight: '90vh',
        overflowY: 'auto'
      }}>
        {/* Close */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            background: 'none',
            border: 'none',
            color: 'var(--text-main)',
            cursor: 'pointer'
          }}
        >
          <X size={22} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
          <ImageIcon size={16} color="var(--accent-gold-dark)" />
          <span className="eyebrow" style={{ margin: 0 }}>Studio Asset Manager</span>
        </div>

        <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>
          Upload & Swap Studio Photos
        </h3>

        <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: 1.5 }}>
          Upload actual photographs from Flow Studio’s Google profile or camera roll. Uploaded images instantly replace hero, studio, and gallery slots.
        </p>

        {savedMessage && (
          <div style={{
            padding: '0.75rem 1rem',
            backgroundColor: 'rgba(37, 211, 102, 0.15)',
            color: '#15803D',
            borderRadius: '2px',
            fontSize: '0.85rem',
            fontWeight: 600,
            marginBottom: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <Check size={16} />
            <span>{savedMessage}</span>
          </div>
        )}

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
          {/* Section 1: Hero Image Swap */}
          <div style={{
            padding: '1.25rem',
            backgroundColor: '#FFFFFF',
            border: '1px solid var(--border-subtle)',
            borderRadius: '2px'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', color: 'var(--text-main)' }}>
                1. Hero Section Main Photo
              </h4>
              <span style={{ fontSize: '0.725rem', color: 'var(--accent-gold-dark)', fontWeight: 600 }}>Active</span>
            </div>

            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <img
                src={heroImage}
                alt="Current Hero"
                style={{ width: '70px', height: '70px', objectFit: 'cover', borderRadius: '2px', border: '1px solid var(--border-subtle)' }}
              />

              <label style={{
                cursor: 'pointer',
                background: 'var(--text-main)',
                color: '#FFFFFF',
                padding: '0.65rem 1.25rem',
                fontSize: '0.8rem',
                fontWeight: 500,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                borderRadius: '2px'
              }}>
                <Upload size={14} />
                <span>Upload Hero Image</span>
                <input type="file" accept="image/*" style={{ display: 'none' }} onChange={(e) => handleFileUpload(e, 'hero')} />
              </label>
            </div>
          </div>

          {/* Section 2: Studio / Introduction Photo Swap */}
          <div style={{
            padding: '1.25rem',
            backgroundColor: '#FFFFFF',
            border: '1px solid var(--border-subtle)',
            borderRadius: '2px'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', color: 'var(--text-main)' }}>
                2. Studio / Workshop Intro Photo
              </h4>
              <span style={{ fontSize: '0.725rem', color: 'var(--accent-gold-dark)', fontWeight: 600 }}>Active</span>
            </div>

            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <img
                src={studioImage}
                alt="Current Studio"
                style={{ width: '70px', height: '70px', objectFit: 'cover', borderRadius: '2px', border: '1px solid var(--border-subtle)' }}
              />

              <label style={{
                cursor: 'pointer',
                background: 'var(--text-main)',
                color: '#FFFFFF',
                padding: '0.65rem 1.25rem',
                fontSize: '0.8rem',
                fontWeight: 500,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                borderRadius: '2px'
              }}>
                <Upload size={14} />
                <span>Upload Studio Image</span>
                <input type="file" accept="image/*" style={{ display: 'none' }} onChange={(e) => handleFileUpload(e, 'studio')} />
              </label>
            </div>
          </div>

          {/* Section 2b: Instructor Portrait Photo Swap */}
          <div style={{
            padding: '1.25rem',
            backgroundColor: '#FFFFFF',
            border: '1px solid var(--border-subtle)',
            borderRadius: '2px'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', color: 'var(--text-main)' }}>
                3. Suruchi / Instructor Portrait Photo
              </h4>
              <span style={{ fontSize: '0.725rem', color: 'var(--accent-gold-dark)', fontWeight: 600 }}>Active</span>
            </div>

            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <img
                src={suruchiImage}
                alt="Current Suruchi Portrait"
                style={{ width: '70px', height: '70px', objectFit: 'cover', borderRadius: '2px', border: '1px solid var(--border-subtle)' }}
              />

              <label style={{
                cursor: 'pointer',
                background: 'var(--text-main)',
                color: '#FFFFFF',
                padding: '0.65rem 1.25rem',
                fontSize: '0.8rem',
                fontWeight: 500,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                borderRadius: '2px'
              }}>
                <Upload size={14} />
                <span>Upload Suruchi Photo</span>
                <input type="file" accept="image/*" style={{ display: 'none' }} onChange={(e) => handleFileUpload(e, 'suruchi')} />
              </label>
            </div>
          </div>

          {/* Section 4: Add to Gallery */}
          <div style={{
            padding: '1.25rem',
            backgroundColor: '#FFFFFF',
            border: '1px solid var(--border-subtle)',
            borderRadius: '2px'
          }}>
            <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', color: 'var(--text-main)', marginBottom: '0.75rem' }}>
              4. Add New Artwork Photo to Gallery
            </h4>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <input
                type="text"
                placeholder="Artwork Title (e.g. Ocean Board)"
                value={newGalleryTitle}
                onChange={(e) => setNewGalleryTitle(e.target.value)}
                style={{ padding: '0.65rem', fontSize: '0.8rem', border: '1px solid var(--border-subtle)' }}
              />
              <select
                value={newGalleryCategory}
                onChange={(e) => setNewGalleryCategory(e.target.value)}
                style={{ padding: '0.65rem', fontSize: '0.8rem', border: '1px solid var(--border-subtle)' }}
              >
                <option value="Ocean Waves">Ocean Waves</option>
                <option value="Geode & Agate">Geode & Agate</option>
                <option value="Studio Shots">Studio Shots</option>
              </select>
            </div>

            <label style={{
              cursor: 'pointer',
              background: 'var(--accent-gold-dark)',
              color: '#FFFFFF',
              padding: '0.65rem 1.25rem',
              fontSize: '0.8rem',
              fontWeight: 500,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              borderRadius: '2px'
            }}>
              <Upload size={14} />
              <span>Select Photo File & Append to Gallery</span>
              <input type="file" accept="image/*" style={{ display: 'none' }} onChange={(e) => handleFileUpload(e, 'gallery')} />
            </label>
          </div>
        </div>

        <div style={{
          marginTop: '2rem',
          paddingTop: '1rem',
          borderTop: '1px solid var(--border-subtle)',
          display: 'flex',
          justify: 'space-between',
          alignItems: 'center'
        }}>
          <button
            onClick={resetToDefaults}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-light)',
              cursor: 'pointer',
              fontSize: '0.75rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.3rem'
            }}
          >
            <RefreshCw size={12} />
            <span>Reset Default Assets</span>
          </button>

          <button onClick={onClose} className="btn-secondary" style={{ padding: '0.6rem 1.25rem', fontSize: '0.75rem' }}>
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
