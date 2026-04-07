"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const FRAME_COUNT = 192; // frames from 000 to 191

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);
  
  // Cinematic Parallax: slowly push the canvas towards the user
  const canvasScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  useEffect(() => {
    const loadedImages: HTMLImageElement[] = new Array(FRAME_COUNT);

    // 1. Progressive Preloading: Load first 30 frames instantly
    for (let i = 0; i < 30; i++) {
      const img = new Image();
      const id = i.toString().padStart(3, "0");
      img.src = `/sequence/frame_${id}_delay-0.041s.png`;
      loadedImages[i] = img;
    }

    // 2. Lazy load the rest slightly after the initial priority load
    setTimeout(() => {
      for (let i = 30; i < FRAME_COUNT; i++) {
        const img = new Image();
        const id = i.toString().padStart(3, "0");
        img.src = `/sequence/frame_${id}_delay-0.041s.png`;
        loadedImages[i] = img;
      }
      // Force a trigger to render the newly loaded images if we scrolled too fast
      setImages([...loadedImages]);
    }, 500);

    setImages(loadedImages);
  }, []);

  useEffect(() => {
    if (images.length === 0 || !canvasRef.current) return;

    let animationFrameId: number;
    let lastDrawnFrame = -1;

    const render = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const context = canvas.getContext("2d");
      if (!context) return;

      const targetFrame = Math.round(frameIndex.get());
      
      // Canvas Debouncing: Only draw if the frame actually changed
      if (lastDrawnFrame !== targetFrame) {
        const img = images[targetFrame];
        
        if (img && img.complete) {
          const dpr = window.devicePixelRatio || 1;
          const width = window.innerWidth;
          const height = window.innerHeight;

          if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            canvas.style.width = width + "px";
            canvas.style.height = height + "px";
            context.scale(dpr, dpr);
          }

          context.clearRect(0, 0, width, height);

          const imgRatio = img.width / img.height;
          const canvasRatio = width / height;
          let drawWidth, drawHeight, x, y;

          if (canvasRatio > imgRatio) {
            drawWidth = width;
            drawHeight = width / imgRatio;
            x = 0;
            y = (height - drawHeight) / 2;
          } else {
            drawWidth = height * imgRatio;
            drawHeight = height;
            x = (width - drawWidth) / 2;
            y = 0;
          }

          context.drawImage(img, x, y, drawWidth, drawHeight);
          lastDrawnFrame = targetFrame;
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animationFrameId);
  }, [images, frameIndex]);

  return (
    <div ref={containerRef} className="relative h-[800vh] w-full bg-[#121212]">
      {/* 100dvh for mobile optimization */}
      <div className="sticky top-0 left-0 w-full h-[100dvh] overflow-hidden">
        <motion.canvas 
          ref={canvasRef} 
          className="w-full h-full" 
          style={{ scale: canvasScale, willChange: "transform" }}
        />
        {/* Subtle noise/grain texture overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.04] z-0 mix-blend-overlay w-full h-full" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
        
        {/* Dynamic Vignette Overlay purely for visual cinematic depth */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_transparent_10%,_#000000_110%)] opacity-90 z-[1]"></div>
      </div>
    </div>
  );
}
