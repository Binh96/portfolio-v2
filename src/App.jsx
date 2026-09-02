import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Footer from './components/Footer';
import CareerTerminalModal from './components/CareerTerminalModal';
import ContactModal from './components/ContactModal';
import { LanguageProvider } from './context/LanguageContext';

export default function App() {
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <LanguageProvider>
      <div className="bg-slate-50 text-slate-900 bg-grid-pattern min-h-screen relative selection:bg-cyan-500 selection:text-white">
        {/* Navigation Bar */}
        <Navbar 
          onOpenCrawl={() => setTerminalOpen(true)} 
          onOpenContact={() => setContactOpen(true)}
        />

        {/* Main Content Sections */}
        <main>
          <Hero onOpenCrawl={() => setTerminalOpen(true)} />
          <About />
          <Projects />
          <Experience />
        </main>

        {/* Transmission Footer */}
        <Footer />

        {/* Career Intro Terminal Log Modal */}
        <CareerTerminalModal isOpen={terminalOpen} onClose={() => setTerminalOpen(false)} />

        {/* Transmission Email Contact Modal */}
        <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
      </div>
    </LanguageProvider>
  );
}
