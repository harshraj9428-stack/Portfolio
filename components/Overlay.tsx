"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion, cubicBezier } from "framer-motion";

export default function Overlay() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const easing = cubicBezier(0.22, 1, 0.36, 1);

  // Section 1: Hero (0% - 15%)
  const o1 = useTransform(scrollYProgress, [0, 0.1, 0.2, 1], [1, 1, 0, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.2, 1], [0, -50, -50]);
  const s1 = useTransform(scrollYProgress, [0, 0.2, 1], [1, 1.05, 1.05]);
  const b1 = useTransform(scrollYProgress, [0, 0.1, 0.2, 1], ["blur(0px)", "blur(0px)", "blur(12px)", "blur(12px)"]);

  // Section 2: Education (25% - 40%)
  const o2 = useTransform(scrollYProgress, [0, 0.15, 0.25, 0.4, 0.5, 1], [0, 0, 1, 1, 0, 0]);
  const y2 = useTransform(scrollYProgress, [0, 0.15, 0.5, 1], [50, 50, -50, -50]);
  const b2 = useTransform(scrollYProgress, [0, 0.15, 0.25, 0.4, 0.5, 1], ["blur(12px)", "blur(12px)", "blur(0px)", "blur(0px)", "blur(12px)", "blur(12px)"]);

  // Section 3: Specialization (55% - 70%)
  const o3 = useTransform(scrollYProgress, [0, 0.45, 0.55, 0.7, 0.8, 1], [0, 0, 1, 1, 0, 0]);
  const y3 = useTransform(scrollYProgress, [0, 0.45, 0.8, 1], [50, 50, -50, -50]);
  const b3 = useTransform(scrollYProgress, [0, 0.45, 0.55, 0.7, 0.8, 1], ["blur(12px)", "blur(12px)", "blur(0px)", "blur(0px)", "blur(12px)", "blur(12px)"]);

  // Section 4: Tagline (80% - 92%)
  const o4 = useTransform(scrollYProgress, [0, 0.72, 0.80, 0.86, 0.92, 1], [0, 0, 1, 1, 0, 0]);
  const y4 = useTransform(scrollYProgress, [0, 0.72, 0.80, 0.86, 0.92, 1], [50, 50, 0, 0, -50, -50]);
  const b4 = useTransform(scrollYProgress, [0, 0.72, 0.80, 0.86, 0.92, 1], ["blur(12px)", "blur(12px)", "blur(0px)", "blur(0px)", "blur(12px)", "blur(12px)"]);

  return (
    <div ref={containerRef} className="absolute top-0 left-0 w-full h-[800vh] pointer-events-none z-10">
      <div className="sticky top-0 h-[100dvh] w-full pointer-events-auto overflow-hidden">
        
        {/* Sidebar Social Icons (Fixed on left edge) */}
        <div className="absolute left-6 md:left-10 bottom-0 top-0 flex flex-col items-center justify-end pb-12 lg:pb-16 z-50 pointer-events-auto">
          <div className="flex flex-col items-center gap-6">
            <a href="https://github.com/harshraj9428-stack" target="_blank" rel="noreferrer" className="text-white/40 hover:text-cyan-400 hover:scale-110 transition-all duration-300">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>
            <a href="https://www.linkedin.com/in/harsh-raj-861213338" target="_blank" rel="noreferrer" className="text-white/40 hover:text-cyan-400 hover:scale-110 transition-all duration-300">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            {/* Vertical Line */}
            <div className="w-[1px] h-20 bg-gradient-to-b from-white/20 to-transparent mt-2"></div>
          </div>
        </div>

        {/* Section 1 (Hero): Bottom-Left */}
        <motion.div
          style={{ opacity: o1, y: y1, scale: s1, filter: b1 }}
          className="absolute inset-0 flex flex-col items-start justify-end pl-24 md:pl-32 pb-16 lg:pb-24 pointer-events-none w-full z-20"
        >
          <div className="flex flex-col items-start drop-shadow-2xl">
            <h1 className="text-5xl md:text-8xl lg:text-[110px] font-black tracking-widest text-white drop-shadow-[0_0_40px_rgba(0,0,0,0.8)] leading-none uppercase">
              HARSH RAJ.
            </h1>
            <div className="flex items-center mt-6 mb-10 overflow-hidden">
              <span className="text-cyan-400 mr-4 font-light tracking-widest">——</span>
              <p className="text-lg md:text-2xl text-cyan-400 font-light tracking-wide animate-typing">
                Building Intelligence · Shaping What Comes Next
              </p>
            </div>
            
            <a href="#projects" className="pointer-events-auto inline-block border border-cyan-400/30 text-white px-8 py-3 rounded-full uppercase tracking-widest text-xs font-semibold hover:bg-cyan-400/20 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(0,191,255,0.4)] transition-all duration-300 backdrop-blur-sm">
              View My Work
            </a>
          </div>
        </motion.div>

        {/* Scroll Indicator (Fades out with Hero) */}
        <motion.div 
          style={{ opacity: o1 }} 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none z-20"
        >
          <span className="text-[10px] uppercase tracking-widest text-white/50 font-bold mb-1">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>
          </motion.div>
        </motion.div>

        {/* Section 2 (Education): Left aligned */}
        <motion.div
          style={{ opacity: o2, y: y2, filter: b2 }}
          className="absolute inset-0 flex items-center justify-start p-6 md:p-16 lg:p-32 pointer-events-none w-full"
        >
          <div className="w-full max-w-2xl lg:max-w-3xl bg-black/50 backdrop-blur-md border border-white/5 rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl flex flex-col items-start text-left">
            <h2 className="text-3xl md:text-5xl font-light tracking-tight leading-tight text-white drop-shadow-md">
              Computer Science <span className="text-cyan-400">&</span> Data Analytics
            </h2>
            <h3 className="text-xl md:text-3xl text-gray-300 font-light tracking-wide mt-4">
              Indian Institute of Technology Patna
            </h3>
            <div className="w-24 h-[2px] bg-gradient-to-r from-cyan-500 to-transparent mt-10"></div>
          </div>
        </motion.div>

        {/* Section 3 (Specialization): Framed panel on the right */}
        <motion.div
          style={{ opacity: o3, y: y3, filter: b3 }}
          className="absolute inset-0 flex items-center justify-end p-6 md:p-16 lg:p-32 pointer-events-none w-full"
        >
          <div className="w-full max-w-2xl lg:max-w-3xl bg-black/50 backdrop-blur-md border border-white/5 rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl flex flex-col items-end text-right">
            <h2 className="text-2xl md:text-4xl lg:text-[42px] font-light tracking-tight leading-snug text-white">
              Focused on building <span className="text-cyan-400 font-medium">AI-powered applications</span>,
              automation systems, and intelligent full-stack products
              using modern technologies and <span className="text-cyan-400 font-medium">large language models</span>.
            </h2>
            <div className="w-24 h-[2px] bg-gradient-to-r from-transparent to-cyan-500 mt-10"></div>
          </div>
        </motion.div>

        {/* Section 4 (Tagline): Center aligned */}
        <motion.div
          style={{ opacity: o4, y: y4, filter: b4 }}
          className="absolute inset-0 flex items-center justify-center p-6 md:p-16 lg:p-32 pointer-events-none w-full"
        >
          <div className="w-full max-w-2xl lg:max-w-4xl bg-black/50 backdrop-blur-md border border-white/5 rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl flex flex-col items-center text-center">
            <h2 className="text-3xl md:text-5xl font-light tracking-tight leading-tight text-white drop-shadow-md">
              Designing intelligent systems <br className="hidden md:block"/> <span className="italic text-cyan-400">&</span> AI-driven digital experiences.
            </h2>
            <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent mt-10"></div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
