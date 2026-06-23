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

    const spacing = 30; 
    const lineLength = 12; 
    const influenceRadius = 250;
    const baseOpacity = 0.15;
    const peakOpacity = 0.9; 

    let pointer = { x: -1000, y: -1000 };
    let targetPointer = { x: -1000, y: -1000 };

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.parentElement?.getBoundingClientRect() || { width: window.innerWidth, height: window.innerHeight };

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
    };

    window.addEventListener("resize", resize);
    resize();

    const handlePointerMove = (clientX: number, clientY: number) => {
      const rect = canvas.getBoundingClientRect();
      targetPointer.x = clientX - rect.left;
      targetPointer.y = clientY - rect.top;
    };

    const handlePointerLeave = () => {
      targetPointer = { x: -1000, y: -1000 };
    };

    const onMouseMove = (e: MouseEvent) => handlePointerMove(e.clientX, e.clientY);
    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) handlePointerMove(e.touches[0].clientX, e.touches[0].clientY);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", handlePointerLeave);
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", handlePointerLeave);

    const draw = () => {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      pointer.x += (targetPointer.x - pointer.x) * 0.1;
      pointer.y += (targetPointer.y - pointer.y) * 0.1;

      const padding = spacing; 
      
      const cols = Math.floor((rect.width - padding ) / spacing) + 1;
      const rows = Math.floor((rect.height - padding ) / spacing) + 1;

      const offsetX = (rect.width - ((cols - 1) * spacing)) / 2;
      const offsetY = (rect.height - ((rows - 1) * spacing)) / 2;
      // -----------------------------------------------------------

      ctx.lineWidth = 1.5;
      ctx.lineCap = "round";

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          
          const x = offsetX + (i * spacing);
          const y = offsetY + (j * spacing);

          const dx = pointer.x - x;
          const dy = pointer.y - y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          let angle = 0;
          let currentOpacity = baseOpacity; 

          if (distance < influenceRadius) {
            const force = 1 - (distance / influenceRadius); 
            angle = Math.atan2(dy, dx) * force;
            currentOpacity = baseOpacity + (force * (peakOpacity - baseOpacity));
          }

          ctx.save();
          ctx.translate(x, y);
          ctx.rotate(angle);
          
          ctx.strokeStyle = `rgba(196, 139, 85, ${currentOpacity})`;
          
          ctx.beginPath();
          ctx.moveTo(-lineLength / 2, 0);
          ctx.lineTo(lineLength / 2, 0);
          ctx.stroke();
          
          ctx.restore();
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", handlePointerLeave);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", handlePointerLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-auto"
    />
  );
}