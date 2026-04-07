"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const projectsData = [
  {
    id: "01",
    title: "Gem_Astro",
    description: "An advanced astrological intelligence engine powered by LLMs to provide real-time insights based on planetary alignments.",
    tags: ["Next.js", "GPT-4", "FastAPI", "PostgreSQL"],
    status: "Building",
    links: { linkedin: "https://www.linkedin.com/posts/harsh-raj-861213338_ai-machinelearning-startup-activity-7445172452328062976-zl4m?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFS_wgkBfG5G1Wezqa7T_G8_U0CF1n1Hoa4" }
  },
  {
    id: "02",
    title: "Sami Ai assistent",
    description: "A highly personalized voice-activated AI assistant integrated with local smart home protocols and contextual memory.",
    tags: ["Python", "TensorFlow", "Whisper", "WebSockets"],
    status: "Building",
    links: { linkedin: "https://www.linkedin.com/posts/harsh-raj-861213338_ai-machinelearning-python-activity-7437763534643687424-LcTB?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFS_wgkBfG5G1Wezqa7T_G8_U0CF1n1Hoa4" }
  },
  {
    id: "03",
    title: "AI Auto Reply Engine",
    description: "Automated intent-recognition platform that drafts context-aware responses to customer support tickets in under 200ms.",
    tags: ["TypeScript", "LangChain", "Vector DB", "Redis"],
    status: "Shipped",
    links: { linkedin: "https://www.linkedin.com/in/harsh-raj-861213338" }
  },
  {
    id: "04",
    title: "InsightForge — AI Business Analytics Dashboard",
    description: "Centralized AI-driven dashboard that aggregates complex business metrics and generates predictive performance models.",
    tags: ["React", "Python", "DataSci", "AWS"],
    status: "Live",
    links: {
      live: "https://harshraj9428-stack-insightforge-app-vmrrsq.streamlit.app/",
      github: "https://github.com/harshraj9428-stack/insightforge",
      linkedin: "https://www.linkedin.com/posts/harsh-raj-861213338_dataanalytics-python-ai-activity-7425553229435977728-ai7t?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFS_wgkBfG5G1Wezqa7T_G8_U0CF1n1Hoa4"
    }
  },
  {
    id: "05",
    title: "EMI Calculator — InsightForge Finance Tool",
    description: "Precision financial modeling utility designed for projecting real-time loan amortizations natively within the InsightForge ecosystem.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Math"],
    status: "Live",
    links: {
      live: "https://emi-calculator-harsh.vercel.app/",
      linkedin: "https://www.linkedin.com/posts/harsh-raj-861213338_webdevelopment-frontenddevelopment-reactjs-activity-7427953977373294594-5utM?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFS_wgkBfG5G1Wezqa7T_G8_U0CF1n1Hoa4"
    }
  }
];

const CYCLE_DURATION = 3000;

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projectsData.length);
    }, CYCLE_DURATION);

    return () => clearInterval(timer);
  }, [activeIndex]);

  const handleSelect = (idx: number) => {
    setActiveIndex(idx);
  };

  const cubicEase = [0.22, 1, 0.36, 1];

  return (
    <section id="projects" className="min-h-screen bg-[#0b0b0b] py-16 md:py-32 px-4 md:px-16 lg:px-32 relative z-20 flex flex-col justify-center overflow-hidden">
      
      {/* Background Soft Radial Glow mapped to active index */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none transition-all duration-1000"
        style={{
          background: `radial-gradient(circle 600px at 50% ${25 + activeIndex * 15}%, rgba(255,255,255,0.03), transparent 60%)`,
          transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)"
        }}
      />

      <div className="max-w-6xl mx-auto w-full relative z-10 flex flex-col h-full justify-center">
        
        {/* Top Right Dot Indicators */}
        <div className="absolute -top-8 md:-top-16 right-0 flex space-x-3">
          {projectsData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleSelect(idx)}
              className="w-2 h-2 rounded-full cursor-pointer transition-all duration-500"
              style={{
                backgroundColor: activeIndex === idx ? "#ffffff" : "#272727",
                transform: activeIndex === idx ? "scale(1.5)" : "scale(1)",
                transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)"
              }}
              aria-label={`Select project ${idx + 1}`}
            />
          ))}
        </div>

        {/* Project List */}
        <div className="mt-8 md:mt-16 flex flex-col space-y-6 md:space-y-8">
          {projectsData.map((proj, idx) => {
            const isActive = activeIndex === idx;

            return (
              <div 
                key={proj.id} 
                className="relative flex flex-col group cursor-pointer border-b border-white/5 pb-6 md:pb-8"
                onClick={() => handleSelect(idx)}
              >
                <div className="flex items-center justify-between">
                  {/* Left Side: Number, Bar, Title */}
                  <div className="flex items-center space-x-4 md:space-x-8 w-full md:w-auto">
                    {/* Small number */}
                    <span 
                      className="font-mono text-xs md:text-sm font-light transition-colors duration-500"
                      style={{ color: isActive ? "#ffffff" : "#272727" }}
                    >
                      {proj.id}
                    </span>
                    
                    {/* Dash Bar indicator (Horizontal) */}
                    <div 
                      className="h-[2px] transition-all duration-500" 
                      style={{ 
                         width: isActive ? "40px" : "24px",
                         backgroundColor: isActive ? "#ffffff" : "#272727",
                         transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)"
                      }} 
                    />

                    {/* Project Title */}
                    <h2 
                      className="font-bold transition-all duration-700 m-0 tracking-tight flex-1 min-w-0"
                      style={{
                        fontFamily: "var(--font-syne)",
                        fontSize: isActive ? "clamp(1.25rem, 5.5vw, 4rem)" : "clamp(1rem, 4vw, 3rem)",
                        color: isActive ? "#ffffff" : "#272727",
                        transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)"
                      }}
                    >
                      {proj.title}
                    </h2>
                  </div>

                  {/* Right Side: Status Badge */}
                  <div 
                    className="flex shrink-0 ml-3 px-2.5 md:px-4 py-1 md:py-1.5 border rounded-full text-[9px] md:text-xs uppercase tracking-widest font-mono transition-all duration-500"
                    style={
                      proj.status === "Live" 
                        ? {
                            borderColor: isActive ? "rgba(93,255,170,0.4)" : "rgba(93,255,170,0.05)",
                            backgroundColor: isActive ? "rgba(93,255,170,0.05)" : "transparent",
                            color: isActive ? "#5dffaa" : "#272727",
                            boxShadow: isActive ? "0 0 15px rgba(93,255,170,0.15)" : "none",
                            transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)"
                          }
                        : {
                            borderColor: isActive ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.02)",
                            color: isActive ? "rgba(255,255,255,0.8)" : "#272727",
                            transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)"
                          }
                    }
                  >
                    {proj.status}
                  </div>
                </div>

                {/* Sliding Info Content */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden pl-10 md:pl-[120px]"
                    >
                      <div className="pt-4 md:pt-6 pb-2 pr-0 md:pr-16 max-w-4xl" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        <p className="text-white/70 italic text-sm md:text-xl font-light mb-4 md:mb-6 leading-relaxed">
                          {proj.description}
                        </p>
                        <div className="flex flex-wrap gap-3">
                          {proj.tags.map(tag => (
                            <span key={tag} className="px-3 py-1.5 bg-white/5 border border-white/5 text-white/50 text-[10px] md:text-xs rounded font-mono uppercase tracking-widest transition-all hover:bg-white/10 hover:text-white">
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Link Buttons */}
                        {proj.links && (
                          <motion.div 
                            initial={{ opacity: 0, y: 4 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 0.4 }}
                          className="flex flex-wrap gap-2 md:gap-4 mt-5 md:mt-8 pointer-events-auto"
                            onClick={(e) => e.stopPropagation()} // Prevent triggering project selection when clicking links
                          >
                            {proj.links.live && (
                              <a 
                                href={proj.links.live} 
                                target="_blank" 
                                rel="noreferrer"
                                className="flex items-center gap-2 rounded-[20px] px-[14px] py-[7px] text-[10px] tracking-[1.2px] uppercase font-medium transition-all duration-300 bg-[linear-gradient(135deg,#0d3326,#1a5c40)] text-[#5dffaa] border border-[#1e6644] hover:bg-[linear-gradient(135deg,#164d36,#22784f)] hover:-translate-y-[1px] hover:shadow-[0_4px_20px_rgba(93,255,170,0.2)]"
                              >
                                <span>Live App</span>
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                              </a>
                            )}
                            {proj.links.github && (
                              <a 
                                href={proj.links.github} 
                                target="_blank" 
                                rel="noreferrer"
                                className="flex items-center gap-2 rounded-[20px] px-[14px] py-[7px] text-[10px] tracking-[1.2px] uppercase font-medium transition-all duration-300 bg-[linear-gradient(135deg,#1a1a1a,#252525)] text-[#bbb] border border-[#333] hover:bg-[linear-gradient(135deg,#222,#2e2e2e)] hover:-translate-y-[1px] hover:shadow-[0_4px_14px_rgba(0,0,0,0.4)]"
                              >
                                <span>GitHub</span>
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                              </a>
                            )}
                            {proj.links.linkedin && (
                              <a 
                                href={proj.links.linkedin} 
                                target="_blank" 
                                rel="noreferrer"
                                className="flex items-center gap-2 rounded-[20px] px-[14px] py-[7px] text-[10px] tracking-[1.2px] uppercase font-medium transition-all duration-300 bg-[linear-gradient(135deg,#0d1f3c,#132d56)] text-[#60a5fa] border border-[#1a3a6e] hover:bg-[linear-gradient(135deg,#132d56,#1a3d70)] hover:-translate-y-[1px] hover:shadow-[0_4px_20px_rgba(96,165,250,0.2)]"
                              >
                                <span>View Profile</span>
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                              </a>
                            )}
                          </motion.div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Bottom Active Progress Bar indicator (Thin horizontal bar overlaying the border) */}
                {isActive && (
                  <motion.div
                    key={`progress-${idx}`}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: CYCLE_DURATION / 1000, ease: "linear" }}
                    className="absolute bottom-[-1px] left-0 h-[2px] bg-white origin-left w-full z-10"
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
