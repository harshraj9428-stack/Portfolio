"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  Variants,
} from "framer-motion";
import { useRef } from "react";

const skills = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
  { category: "Backend", items: ["Python", "FastAPI", "Firebase", "SQLite"] },
  { category: "AI / ML", items: ["Groq API", "Ollama", "OpenCV", "Whisper", "Edge-TTS"] },
  { category: "Tools", items: ["Git", "Streamlit", "Telegram Bots", "ReportLab"] },
];

const stats = [
  { label: "Projects shipped", value: "5+" },
  { label: "Family business", value: "Digitized" },
  { label: "Build approach", value: "AI-first" },
  { label: "Working mode", value: "Solo" },
];

function TiltCard({
  children,
  disabled,
}: {
  children: React.ReactNode;
  disabled?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [7, -7]), {
    stiffness: 250,
    damping: 22,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-7, 7]), {
    stiffness: 250,
    damping: 22,
  });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (disabled || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={disabled ? undefined : { rotateX, rotateY, transformPerspective: 700 }}
      whileHover={disabled ? undefined : { scale: 1.035 }}
      className="bg-white/[0.02] border border-white/5 rounded-2xl p-5 text-left transition-colors duration-300 hover:border-cyan-400/30 hover:bg-white/[0.04]"
    >
      {children}
    </motion.div>
  );
}

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function About() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-white/5 bg-[#0b0b0b] px-4 py-20 md:px-16 md:py-32 lg:px-32"
    >
      {/* Ambient background glow */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]"
        animate={
          reduceMotion
            ? undefined
            : { opacity: [0.4, 0.7, 0.4], scale: [1, 1.08, 1] }
        }
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 mx-auto max-w-4xl">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.span
            variants={item}
            className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-400 md:text-sm"
          >
            About
          </motion.span>

          <motion.div variants={item} className="mt-4 mb-8">
            <h2
              className="text-3xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Who I am
            </h2>
            <motion.div
              className="mt-4 h-[2px] w-16 origin-left bg-gradient-to-r from-cyan-400 to-transparent md:w-24"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            />
          </motion.div>

          <div
            className="space-y-5 text-base leading-relaxed text-white/70 md:text-xl"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            <motion.p variants={item}>
              I&apos;m Harsh, a solo full-stack and AI developer based in Patna, India.
              I don&apos;t treat AI as a feature to bolt on — every product I build has
              it wired into the core, from computer-vision gemstone analysis to
              voice-first personal assistants.
            </motion.p>
            <motion.p variants={item}>
              I&apos;m currently studying Computer Science and Data Analytics at IIT
              Patna, but most of what I actually know came from shipping something at
              2 a.m. that had to work by morning.
            </motion.p>
            <motion.p variants={item}>
              Outside coursework, I took my family&apos;s 25-year-old jewellery business
              fully digital, building the billing system it now runs on daily. The
              long-term plan is to found my own company.
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-14 grid grid-cols-2 gap-4 md:mt-16 md:grid-cols-4 md:gap-5"
        >
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={item}>
              <TiltCard disabled={!!reduceMotion}>
                <div
                  className="text-lg font-bold text-cyan-400 md:text-2xl"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  {stat.value}
                </div>
                <div className="mt-1.5 font-mono text-[10px] text-white/40 md:text-xs">
                  {stat.label}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-14 grid gap-x-10 gap-y-8 sm:grid-cols-2 md:mt-16"
        >
          {skills.map((group) => (
            <motion.div key={group.category} variants={item}>
              <h3 className="mb-3 font-mono text-xs text-white/40 md:text-sm">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={reduceMotion ? undefined : { scale: 1.08, y: -2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    className="rounded-full border border-white/5 bg-white/5 px-3 py-1.5 font-mono text-xs text-white/70 transition-colors duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-400 md:text-sm"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
