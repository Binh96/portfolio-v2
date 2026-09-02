import React from 'react';
import { ArrowRight, Terminal, Cpu, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import NeuralCoreMatrix from './NeuralCoreMatrix';

export default function Hero({ onOpenCrawl }) {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[92vh] pt-24 pb-12 flex flex-col items-center justify-center overflow-hidden">
      
      {/* Ambient Sci-Fi Core Glows */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-cyan-400/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-rose-500/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* HEADLINE */}
      <div className="z-20 text-center max-w-4xl px-4 space-y-4 mb-4">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 bg-white/90 border border-cyan-300 text-cyan-700 text-xs font-orbitron font-bold uppercase tracking-widest rounded-full shadow-sm backdrop-blur-md">
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 animate-ping"></span>
          <span>{t('hero.badge')}</span>
        </div>

        <h1 className="font-orbitron text-4xl sm:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight leading-tight">
          {t('hero.titleStart')} <span className="text-cyber-cyan">{t('hero.titleEnd')}</span>.
        </h1>
      </div>

      {/* 3-COLUMN SYMMETRICAL FLANKING HUD GRID */}
      <div className="z-20 max-w-7xl w-full px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center my-2">
        
        {/* LEFT COLUMN (4 COLS): HERO.SUB PROFILE CARD */}
        <div className="lg:col-span-4 order-2 lg:order-1 text-left space-y-4">
          <div className="p-6 bg-white/85 backdrop-blur-md border border-cyan-300/80 rounded-2xl shadow-xl relative clip-corner">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
            
            <div className="flex items-center space-x-2 mb-3">
              <Cpu className="w-4 h-4 text-cyan-600" />
              <span className="font-orbitron text-xs font-bold uppercase tracking-wider text-cyan-700">
                DEVELOPER PROFILE STATEMENT
              </span>
            </div>

            <p className="text-slate-700 text-sm sm:text-base font-medium leading-relaxed">
              {t('hero.sub')}
            </p>
          </div>
        </div>

        {/* CENTER COLUMN (4 COLS): 3D SCROLL GRAPHIC */}
        <div className="lg:col-span-4 order-1 lg:order-2 flex justify-center">
          <NeuralCoreMatrix />
        </div>

        {/* RIGHT COLUMN (4 COLS): ACTION BUTTONS & TELEMETRY */}
        <div className="lg:col-span-4 order-3 text-left space-y-4">
          <div className="p-6 bg-white/85 backdrop-blur-md border border-rose-300/80 rounded-2xl shadow-xl relative clip-corner space-y-4">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-500 to-cyan-500"></div>

            <div className="flex items-center space-x-2 mb-2">
              <ShieldCheck className="w-4 h-4 text-rose-600" />
              <span className="font-orbitron text-xs font-bold uppercase tracking-wider text-rose-700">
                CORE NAVIGATION CONTROLS
              </span>
            </div>

            {/* HERO ACTION BUTTONS */}
            <div className="flex flex-col space-y-3">
              <a 
                href="#projects" 
                className="w-full px-6 py-3.5 bg-cyan-600 text-white font-orbitron font-bold text-xs sm:text-sm tracking-wider uppercase clip-corner hover:bg-cyan-700 transition shadow-lg shadow-cyan-500/20 flex items-center justify-center space-x-2"
              >
                <span>{t('hero.btnProjects')}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button 
                onClick={onOpenCrawl}
                className="w-full px-6 py-3.5 bg-white border border-slate-300 text-slate-800 font-orbitron font-bold text-xs sm:text-sm tracking-wider uppercase clip-corner hover:border-slate-400 hover:bg-slate-100 transition flex items-center justify-center space-x-2 shadow-sm"
              >
                <Terminal className="w-4 h-4 text-rose-600" />
                <span>{t('hero.btnCrawl')}</span>
              </button>
            </div>

            {/* TELEMETRY BADGE */}
            <div className="pt-2 flex items-center justify-between text-[11px] font-orbitron text-slate-500 border-t border-slate-200">
              <span className="flex items-center space-x-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>STATUS: SYSTEM ONLINE</span>
              </span>
              <span className="text-cyan-600 font-semibold">LATENCY: 12ms</span>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
}
