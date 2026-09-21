import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import About from "@/components/About";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="bg-[#121212] min-h-screen text-white selection:bg-white/30 selection:text-white">
      {/* Scrollytelling Section */}
      <div className="relative">
        <ScrollyCanvas />
        <Overlay />
      </div>

      {/* About Section */}
      <About />

      {/* Projects Section */}
      <Projects />
      
      {/* Simple Footer */}
      <footer className="py-8 text-center text-white/50 text-sm border-t border-white/5 bg-[#0b0b0b]">
        <p>© {new Date().getFullYear()} <span className="text-white font-medium">Harsh Raj</span> • Developed by Harsh Raj. All rights reserved.</p>
      </footer>
    </main>
  );
}
