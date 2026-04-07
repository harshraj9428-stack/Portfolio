import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="bg-[#121212] min-h-screen text-white selection:bg-white/30 selection:text-white">
      {/* Scrollytelling Section */}
      <div className="relative">
        <ScrollyCanvas />
        <Overlay />
      </div>

      {/* Projects Section */}
      <Projects />
      
      {/* Simple Footer */}
      <footer className="py-8 text-center text-gray-500 text-sm border-t border-white/5 bg-[#121212]">
        <p>© {new Date().getFullYear()} Creative AI Developer. All rights reserved.</p>
      </footer>
    </main>
  );
}
