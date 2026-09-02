import React, { useState } from 'react';
import { Volume2, VolumeX, Radio, Globe, Music } from 'lucide-react';
import { toggleLofiMusic } from '../utils/audio';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar({ onOpenCrawl, onOpenContact }) {
  const [musicOn, setMusicOn] = useState(false);
  const { lang, toggleLanguage, t } = useLanguage();

  const handleToggleMusic = () => {
    const isPlaying = toggleLofiMusic();
    setMusicOn(isPlaying);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* LOGO: BinhPhan */}
        <div 
          className="flex items-center space-x-3 cursor-pointer group"
        >
          <div>
            <span className="font-orbitron font-black text-2xl tracking-wider text-slate-900 group-hover:text-cyan-600 transition">
              Binh<span className="text-rose-600">Phan</span>
            </span>
            <span className="block text-[10px] font-orbitron uppercase tracking-widest text-slate-500">
              Full-Stack / Back-end
            </span>
          </div>
        </div>

        {/* NAV LINKS */}
        <nav className="hidden md:flex items-center space-x-8 font-orbitron text-sm font-semibold tracking-wider">
          <a href="#about" className="text-slate-700 hover:text-cyan-600 transition py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-cyan-500 hover:after:w-full after:transition-all">
            {t('nav.about')}
          </a>
          <a href="#projects" className="text-slate-700 hover:text-rose-600 transition py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-rose-500 hover:after:w-full after:transition-all">
            {t('nav.projects')}
          </a>
          <a href="#experience" className="text-slate-700 hover:text-cyan-600 transition py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-cyan-500 hover:after:w-full after:transition-all">
            {t('nav.experience')}
          </a>
        </nav>

        {/* AUDIO CONTROLS, LANGUAGE TOGGLE & ACTION */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          {/* LANGUAGE SWITCHER BUTTON */}
          <button 
            onClick={toggleLanguage}
            className="px-3 py-2 rounded-lg bg-cyan-50 border border-cyan-300 text-cyan-700 hover:bg-cyan-100 transition text-xs font-orbitron font-bold flex items-center space-x-1.5 shadow-sm"
            title="Switch Language"
          >
            <Globe className="w-4 h-4 text-cyan-600" />
            <span className="uppercase">{lang === 'vi' ? 'VI 🇻🇳' : 'EN 🇺🇸'}</span>
          </button>

          {/* CHILL CAFE LOFI MUSIC TOGGLE */}
          <button 
            onClick={handleToggleMusic} 
            className={`hidden sm:flex px-3 py-2 rounded-lg border transition text-xs font-orbitron items-center space-x-2 ${musicOn ? 'bg-cyan-50 border-cyan-400 text-cyan-700 shadow-sm' : 'bg-slate-100 border-slate-300 text-slate-700 hover:bg-slate-200'}`}
            title="Toggle Chill Cafe Lofi Music (Low Volume)"
          >
            <Music className={`w-4 h-4 ${musicOn ? 'text-cyan-600 animate-pulse' : 'text-slate-400'}`} />
            <span>{musicOn ? t('nav.soundOn') : t('nav.soundOff')}</span>
          </button>

          {/* INTERACTIVE CONTACT / TRANSMISSION MODAL TRIGGER BUTTON */}
          <button 
            onClick={onOpenContact} 
            className="hidden sm:inline-flex items-center px-5 py-2.5 bg-slate-900 text-white font-orbitron text-xs font-bold uppercase tracking-wider clip-corner-sm hover:bg-cyan-600 transition shadow-md hover:shadow-cyan-500/20"
          >
            <Radio className="w-4 h-4 mr-2 text-cyan-400 animate-pulse" /> {t('nav.contact')}
          </button>
        </div>
      </div>
    </header>
  );
}
