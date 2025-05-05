
import React, { useEffect, useState, useRef } from 'react';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import MasonryGallery from '@/components/MasonryGallery';
import ContactSection from '@/components/ContactSection';
import BookingSection from '@/components/BookingSection';
import EmailPopup from '@/components/EmailPopup';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import CalendlyBooking from '@/components/CalendlyBooking';
import { Toaster } from "@/components/ui/sonner";

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  
  // Refs for parallax sections
  const aboutRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const bookingRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  
  // Background images for parallax
  const parallaxBackgrounds = [
    '/lovable-uploads/5661558a-86b4-4378-8f1f-d3684e77fa74.png',
    '/lovable-uploads/d75616e1-d5a7-4bee-8315-7b7ed2dc5f5c.png',
    '/lovable-uploads/1a3dfa6a-25a1-4c85-b6f3-5aa3c58b5dba.png',
    '/lovable-uploads/69c088be-e629-4737-8011-b235c07e72c5.png',
    '/lovable-uploads/0572c16c-a772-4c83-b7c4-5ad1aabc1483.png',
    '/lovable-uploads/d88b8ebf-e4f6-4597-9d68-401c5479b213.png'
  ];
  
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
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Parallax wrapper for scrolling content */}
      <div className="relative">
        {/* Background Image Parallax Layers */}
        <div 
          className="fixed inset-0 bg-cover bg-center z-0 opacity-20"
          style={{
            backgroundImage: `url('${parallaxBackgrounds[0]}')`,
            transform: `translateY(${scrollY * 0.05}px)`,
          }}
        ></div>
        
        {/* Content Sections with Parallax */}
        <div 
          ref={aboutRef}
          className="relative z-10"
          style={{
            transform: `translateY(${scrollY > 0 ? scrollY * -0.05 : 0}px)`,
          }}
        >
          <AboutSection />
        </div>
        
        {/* Gallery Section */}
        <div className="relative z-10">
          <div 
            className="absolute inset-0 -z-10 bg-cover bg-center opacity-10"
            style={{
              backgroundImage: `url('${parallaxBackgrounds[1]}')`,
              transform: `translateY(${scrollY * 0.03}px)`,
            }}
          ></div>
          <MasonryGallery />
        </div>
        
        {/* Booking Section with Calendly */}
        <div 
          ref={bookingRef}
          className="relative z-10 section-container bg-black"
          id="book"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0.85)), url('${parallaxBackgrounds[2]}')`,
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="container mx-auto">
            <h2 className="section-title font-sans">Book a Session</h2>
            <div className="mt-12">
              <CalendlyBooking />
            </div>
          </div>
        </div>
        
        {/* Contact Section */}
        <div 
          ref={contactRef}
          className="relative z-10"
        >
          <div 
            className="absolute inset-0 -z-10 bg-cover bg-center opacity-15"
            style={{
              backgroundImage: `url('${parallaxBackgrounds[4]}')`,
              transform: `translateY(${scrollY * 0.02}px)`,
            }}
          ></div>
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
