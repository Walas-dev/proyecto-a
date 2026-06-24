"use client";
import React, { useEffect, useRef } from "react";

export default function MagneticGridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let isVisible = true;

    const spacing = 30; 
    const lineLength = 12; 
    const baseOpacity = 0.15;
    const peakOpacity = 0.9; 
    
    const waveCycleDuration = 8; 
    const waveWidth = 400;
    const maxRotation = Math.PI;

    let grid: any[] = [];

    const buildGrid = () => {
      grid = [];
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.parentElement?.getBoundingClientRect() || { width: window.innerWidth, height: window.innerHeight };

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;

      const padding = spacing; 
      const cols = Math.floor((rect.width - padding ) / spacing) + 1;
      const rows = Math.floor((rect.height - padding ) / spacing) + 1;

      const offsetX = (rect.width - ((cols - 1) * spacing)) / 2;
      const offsetY = (rect.height - ((rows - 1) * spacing)) / 2;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = offsetX + (i * spacing);
          const y = offsetY + (j * spacing);
          grid.push({
            x,
            y,
            diagonalPos: x + y 
          });
        }
      }
    };

    window.addEventListener("resize", buildGrid);
    buildGrid();

    let lastTime = 0;
    const fps = 30; 
    const interval = 1000 / fps;

    const draw = (currentTime: number) => {
      if (!isVisible) return;
      animationFrameId = requestAnimationFrame(draw);
      
      const deltaTime = currentTime - lastTime;
      if (deltaTime < interval) return;
      lastTime = currentTime - (deltaTime % interval);

      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      ctx.lineWidth = 1.5;
      ctx.lineCap = "round";

      const timeInSeconds = currentTime / 1000;
      const maxDistance = rect.width + rect.height; 
      const progress = (timeInSeconds % waveCycleDuration) / waveCycleDuration;
      const currentWavePosition = (progress * (maxDistance + waveWidth * 2)) - waveWidth;

      for (let i = 0; i < grid.length; i++) {
        const item = grid[i];
        const distanceToWave = Math.abs(item.diagonalPos - currentWavePosition);
        
        let angle = 0;
        let currentOpacity = baseOpacity; 

        if (distanceToWave < waveWidth) {
          const force = 1 - (distanceToWave / waveWidth);
          const smoothForce = force * force * (3 - 2 * force); 
          
          angle = smoothForce * maxRotation;
          currentOpacity = baseOpacity + (smoothForce * (peakOpacity - baseOpacity));
        }

        ctx.save();
        ctx.translate(item.x, item.y);
        ctx.rotate(angle);
        
        ctx.strokeStyle = `rgba(196, 139, 85, ${currentOpacity})`;
        
        ctx.beginPath();
        ctx.moveTo(-lineLength / 2, 0);
        ctx.lineTo(lineLength / 2, 0);
        ctx.stroke();
        
        ctx.restore();
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          if (!isVisible) {
            isVisible = true;
            animationFrameId = requestAnimationFrame(draw);
          }
        } else {
          isVisible = false;
        }
      },
      { threshold: 0.01 }
    );

    observer.observe(canvas);

    return () => {
      window.removeEventListener("resize", buildGrid);
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none"
    />
  );
}