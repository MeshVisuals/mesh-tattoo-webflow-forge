
import React, { useEffect, useRef } from 'react';

const RainAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const resizeObserver = new ResizeObserver(entries => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
    
    resizeObserver.observe(document.body);
    
    // Rain drops
    const raindrops: {x: number; y: number; length: number; speed: number; opacity: number}[] = [];
    
    for (let i = 0; i < 100; i++) {
      raindrops.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        length: Math.random() * 20 + 10,
        speed: Math.random() * 15 + 5,
        opacity: Math.random() * 0.2 + 0.1
      });
    }
    
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      ctx.lineWidth = 1;
      ctx.lineCap = 'round';
      
      raindrops.forEach(drop => {
        ctx.beginPath();
        ctx.moveTo(drop.x, drop.y);
        ctx.lineTo(drop.x, drop.y + drop.length);
        
        const gradient = ctx.createLinearGradient(drop.x, drop.y, drop.x, drop.y + drop.length);
        gradient.addColorStop(0, `rgba(255, 255, 255, 0)`);
        gradient.addColorStop(1, `rgba(255, 255, 255, ${drop.opacity})`);
        
        ctx.strokeStyle = gradient;
        ctx.stroke();
        
        drop.y += drop.speed;
        
        if (drop.y > canvas.height) {
          drop.y = -drop.length;
          drop.x = Math.random() * canvas.width;
        }
      });
      
      requestAnimationFrame(draw);
    };
    
    const animationId = requestAnimationFrame(draw);
    
    return () => {
      cancelAnimationFrame(animationId);
      resizeObserver.disconnect();
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full" 
      style={{ backgroundColor: 'transparent' }}
    />
  );
};

export default RainAnimation;
