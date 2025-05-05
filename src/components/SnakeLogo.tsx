
import React, { useRef, useEffect } from 'react';

interface SnakeLogoProps {
  className?: string;
}

const SnakeLogo: React.FC<SnakeLogoProps> = ({ className }) => {
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const logo = logoRef.current;
    if (!logo) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!logo) return;
      
      // Get logo position and dimensions
      const rect = logo.getBoundingClientRect();
      const logoX = rect.left + rect.width / 2;
      const logoY = rect.top + rect.height / 2;
      
      // Calculate mouse position relative to center of logo
      const mouseX = e.clientX - logoX;
      const mouseY = e.clientY - logoY;
      
      // Calculate rotation based on mouse position
      // Limit the rotation to a small amount for subtle effect
      const rotateX = mouseY * 0.01;
      const rotateY = mouseX * -0.01;
      
      // Apply the transform with a smooth transition
      logo.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const resetTransform = () => {
      if (!logo) return;
      logo.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    };

    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove);
    logo.addEventListener('mouseleave', resetTransform);

    // Clean up
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (logo) {
        logo.removeEventListener('mouseleave', resetTransform);
      }
    };
  }, []);

  return (
    <div 
      ref={logoRef} 
      className={`transition-transform duration-200 ${className || ''}`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      <img 
        src="/lovable-uploads/00e90c25-b8e2-4cc6-9abc-170fcd36c6fb.png" 
        alt="MeshTattoo Logo" 
        className="w-full h-full object-contain animate-snake-move"
      />
    </div>
  );
};

export default SnakeLogo;
