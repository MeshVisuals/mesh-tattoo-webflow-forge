
import React, { useEffect, useState } from 'react';
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
          className="parallax"
          style={{
            transform: `translateY(${scrollY > 0 ? scrollY * 0.1 : 0}px)`,
          }}
        >
          <AboutSection />
        </div>
        
        <div 
          className="parallax"
          style={{
            transform: `translateY(${scrollY > 0 ? scrollY * 0.05 : 0}px)`,
          }}
        >
          <GallerySection />
        </div>
        
        <BookingSection />
        <ContactSection />
        <Footer />
      </div>
      
      {/* Email Popup */}
      <EmailPopup />
    </div>
  );
};

export default Index;
