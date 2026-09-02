import React, { useEffect } from 'react';
import { X, Terminal, Cpu, CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function CareerTerminalModal({ isOpen, onClose }) {
  const { t } = useLanguage();

  // Listen for Escape (ESC) key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' || e.key === 'Esc') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
      onClick={onClose}
    >
      {/* HIGH-TECH TERMINAL WINDOW */}
      <div 
        className="relative w-full max-w-4xl h-[75vh] bg-slate-950 border-2 border-cyan-500/60 rounded-xl overflow-hidden shadow-[0_0_50px_rgba(0,163,255,0.3)] flex flex-col clip-corner cursor-default"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* TERMINAL TOP HEADER BAR */}
        <div className="h-11 bg-slate-900 border-b border-slate-800 px-4 flex items-center justify-between font-mono text-xs text-slate-400">
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
            <span className="ml-2 text-cyan-400 font-bold flex items-center space-x-1.5">
              <Terminal className="w-3.5 h-3.5" />
              <span>binhphan@system-core:~ $ cat career_logs.sh</span>
            </span>
          </div>

          <div className="flex items-center space-x-3">
            <span className="hidden sm:inline-flex items-center space-x-1 text-emerald-400 text-[11px]">
              <CheckCircle className="w-3 h-3 mr-1" /> KERNEL: ONLINE
            </span>
            <button 
              onClick={onClose} 
              className="p-1 text-slate-400 hover:text-white hover:bg-slate-800 rounded transition"
              title="Close Terminal (ESC)"
            >
              <X className="w-5 h-5 text-rose-400" />
            </button>
          </div>
        </div>

        {/* TERMINAL CONTENT BODY */}
        <div className="flex-1 p-6 font-mono overflow-y-auto space-y-6 text-sm sm:text-base leading-relaxed text-slate-200">
          
          {/* SYSTEM INITIALIZATION */}
          <div className="text-xs text-slate-500 space-y-1 pb-2 border-b border-slate-900">
            <p>[SYSTEM_INIT] Loading Phan Xuan Binh Career Data Stream...</p>
            <p>[STATUS_CHECK] Memory allocation OK | Architecture: Microservices & DDD</p>
            <p className="text-cyan-400">[EXEC] Executing script: ./binh_phan_journey.sh --verbose</p>
          </div>

          {/* LOG SECTION 1 */}
          <div className="space-y-2 bg-slate-900/50 p-4 rounded-lg border border-slate-800/80">
            <div className="flex items-center space-x-2 text-cyan-400 text-xs font-bold uppercase tracking-wider">
              <Cpu className="w-4 h-4" />
              <span>// PHASE 01: ACADEMIC FOUNDATION (2015 - 2019)</span>
            </div>
            <p className="text-slate-300 pl-4 border-l-2 border-cyan-500">
              {t('terminal.p1')}
            </p>
          </div>

          {/* LOG SECTION 2 */}
          <div className="space-y-2 bg-slate-900/50 p-4 rounded-lg border border-slate-800/80">
            <div className="flex items-center space-x-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
              <Cpu className="w-4 h-4" />
              <span>// PHASE 02: PRODUCTION SYSTEMS & HANDS-ON EXPERIENCE (2022 - PRESENT)</span>
            </div>
            <p className="text-slate-300 pl-4 border-l-2 border-emerald-500">
              {t('terminal.p2')}
            </p>
          </div>

          {/* LOG SECTION 3 */}
          <div className="space-y-2 bg-slate-900/50 p-4 rounded-lg border border-slate-800/80">
            <div className="flex items-center space-x-2 text-rose-400 text-xs font-bold uppercase tracking-wider">
              <Cpu className="w-4 h-4" />
              <span>// PHASE 03: CAREER HORIZON & TECHNICAL LEADERSHIP GOAL</span>
            </div>
            <p className="text-slate-300 pl-4 border-l-2 border-rose-500">
              {t('terminal.p3')}
            </p>
          </div>

          {/* BLINKING CURSOR & PROMPT */}
          <div className="flex items-center space-x-2 text-emerald-400 text-sm font-bold pt-2">
            <span>binhphan@system-core:~ $</span>
            <span className="w-2.5 h-5 bg-emerald-400 animate-pulse"></span>
          </div>

        </div>

        {/* TERMINAL FOOTER */}
        <div className="h-10 bg-slate-900 border-t border-slate-800 px-4 flex items-center justify-between text-xs font-mono text-slate-500">
          <span>UTF-8 | LF | SH</span>
          <button 
            onClick={onClose}
            className="px-3 py-1 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded transition text-xs"
          >
            EXIT LOGS [ESC]
          </button>
        </div>

      </div>
    </div>
  );
}
