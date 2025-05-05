
import React, { useEffect, useState, useRef } from 'react';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import GallerySection from '@/components/GallerySection';
import ContactSection from '@/components/ContactSection';
import BookingSection from '@/components/BookingSection';
import EmailPopup from '@/components/EmailPopup';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import { Toaster } from "@/components/ui/sonner";

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const aboutRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-black text-white min-h-screen">
      <Toaster />
      
      {/* NavBar appears after scrolling past the hero */}
      <NavBar />
      
      {/* Sections */}
      <HeroSection />
      
      {/* Parallax wrapper for scrolling content */}
      <div className="relative">
        <div 
          ref={aboutRef}
          className="parallax"
          style={{
            transform: `translateY(${scrollY > 0 ? scrollY * 0.15 : 0}px)`,
            opacity: Math.min(1, Math.max(0.3, 1 - scrollY * 0.001)),
          }}
        >
          <AboutSection />
        </div>
        
        <div 
          ref={galleryRef}
          className="parallax"
          style={{
            transform: `translateY(${scrollY > 0 ? scrollY * 0.05 : 0}px)`,
            perspective: '1000px',
            transformStyle: 'preserve-3d',
          }}
        >
          <GallerySection />
        </div>
        
        <div className="relative z-10">
          <BookingSection />
          <ContactSection />
          <Footer />
        </div>
      </div>
      
      {/* Email Popup */}
      <EmailPopup />
    </div>
  );
};

export default Index;
