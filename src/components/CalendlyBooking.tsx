
import React, { useEffect } from 'react';

const CalendlyBooking: React.FC = () => {
  useEffect(() => {
    // Load Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="w-full h-[700px] rounded-lg overflow-hidden border border-mesh-orange">
      <div 
        className="calendly-inline-widget" 
        data-url="https://calendly.com/stephcolors/tattoo-planing?hide_gdpr_banner=1" 
        style={{ minWidth: '320px', height: '700px' }}
      ></div>
    </div>
  );
};

export default CalendlyBooking;
