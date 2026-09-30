import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Intro from './components/Intro';
import FlowExperience from './components/FlowExperience';
import Workshops from './components/Workshops';
import Gallery from './components/Gallery';
import WorkshopInAction from './components/WorkshopInAction';
import Reviews from './components/Reviews';
import AboutSuruchi from './components/AboutSuruchi';
import LocationSection from './components/LocationSection';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import LightboxModal from './components/LightboxModal';
import ImageManagerModal from './components/ImageManagerModal';
import StickyMobileBar from './components/StickyMobileBar';
import { galleryItemsInitial } from './data/flowData';

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedWorkshop, setSelectedWorkshop] = useState(null);
  const [lightboxItem, setLightboxItem] = useState(null);
  const [imageManagerOpen, setImageManagerOpen] = useState(false);

  // Dynamic Image State with LocalStorage memory
  const [heroImage, setHeroImage] = useState('/images/ocean_resin_pedestals.jpg');
  const [studioImage, setStudioImage] = useState('/images/workshop_guidance_heatgun.jpg');
  const [suruchiImage, setSuruchiImage] = useState('/images/suruchi_portrait.jpg');
  const [galleryImages, setGalleryImages] = useState(galleryItemsInitial);

  useEffect(() => {
    const savedHero = localStorage.getItem('flow_hero_img');
    const savedStudio = localStorage.getItem('flow_studio_img');
    const savedSuruchi = localStorage.getItem('flow_suruchi_img');
    const savedGallery = localStorage.getItem('flow_gallery_imgs');

    if (savedHero) setHeroImage(savedHero);
    if (savedStudio) setStudioImage(savedStudio);
    if (savedSuruchi) setSuruchiImage(savedSuruchi);
    if (savedGallery) {
      try {
        setGalleryImages(JSON.parse(savedGallery));
      } catch (e) {
        console.error("Error parsing saved gallery", e);
      }
    }
  }, []);

  const handleOpenBooking = (workshopName = null) => {
    setSelectedWorkshop(workshopName);
    setBookingOpen(true);
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--bg-primary)' }}>
      {/* 1. Navbar Navigation */}
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* 2. Hero Section */}
      <Hero
        onOpenBooking={() => handleOpenBooking()}
        heroImage={heroImage}
      />

      {/* 3. Introduction Section */}
      <Intro studioImage={studioImage} />

      {/* 4. The Flow Experience */}
      <FlowExperience onOpenBooking={() => handleOpenBooking()} />

      {/* 5. Workshops Section */}
      <Workshops
        onOpenBooking={handleOpenBooking}
        galleryImages={galleryImages}
      />

      {/* 6. Artwork Gallery Section */}
      <Gallery
        galleryItems={galleryImages}
        onOpenLightbox={setLightboxItem}
      />

      {/* 7. Workshop In Action Section */}
      <WorkshopInAction
        onOpenBooking={() => handleOpenBooking()}
        studioImage={studioImage}
      />

      {/* 8. Customer Reviews & Reputation */}
      <Reviews />

      {/* 9. About Suruchi Section */}
      <AboutSuruchi suruchiImage={suruchiImage} />

      {/* 10. Location & Contact Section */}
      <LocationSection onOpenBooking={() => handleOpenBooking()} />

      {/* 11. Final Call-to-Action */}
      <FinalCTA onOpenBooking={() => handleOpenBooking()} />

      {/* 12. Footer */}
      <Footer />

      {/* Modals & Helpers */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        selectedWorkshopName={selectedWorkshop}
      />

      <LightboxModal
        item={lightboxItem}
        onClose={() => setLightboxItem(null)}
        onBookItem={(title) => handleOpenBooking(title)}
      />

      <StickyMobileBar onOpenBooking={() => handleOpenBooking()} />
    </div>
  );
}
