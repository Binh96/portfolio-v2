import React from 'react';
import { Radio, Mail, Github, Linkedin, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const CONTACT_PHONE = import.meta.env.VITE_CONTACT_PHONE || "0764 648 930";
const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL || "phanxuanbinh96@gmail.com";
const GITHUB_URL = import.meta.env.VITE_GITHUB_URL || "https://github.com/Binh96";
const LINKEDIN_URL = import.meta.env.VITE_LINKEDIN_URL || "https://www.linkedin.com/in/binhpx96/";

export default function Footer() {
  const { lang, t } = useLanguage();

  const locationText = lang === 'vi' 
    ? (import.meta.env.VITE_LOCATION_VI || "Cầu Kiệu, TP. Hồ Chí Minh, Việt Nam")
    : (import.meta.env.VITE_LOCATION_EN || "Cau Kieu, Ho Chi Minh City, Viet Nam");

  return (
    <footer id="contact" className="bg-slate-900 text-white py-16 relative overflow-hidden border-t-4 border-cyan-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        <div className="inline-flex items-center space-x-3 px-4 py-2 bg-slate-800 rounded-full border border-slate-700 text-cyan-400 text-xs font-orbitron">
          <Radio className="w-4 h-4 animate-pulse" />
          <span>{t('footer.readyBadge')}</span>
        </div>

        <h2 className="font-orbitron text-3xl sm:text-4xl font-extrabold tracking-widest uppercase text-white">
          {t('footer.headline')}
        </h2>

        <p className="text-slate-400 max-w-xl mx-auto text-sm font-medium leading-relaxed">
          {t('footer.sub')}
        </p>

        {/* Contact info badges */}
        <div className="flex flex-wrap justify-center items-center gap-6 font-orbitron text-xs text-slate-300">
          <div className="flex items-center space-x-2 bg-slate-800/80 px-4 py-2 rounded-lg border border-slate-700">
            <Phone className="w-4 h-4 text-cyan-400" />
            <span>{CONTACT_PHONE}</span>
          </div>
          <div className="flex items-center space-x-2 bg-slate-800/80 px-4 py-2 rounded-lg border border-slate-700">
            <Mail className="w-4 h-4 text-cyan-400" />
            <span>{CONTACT_EMAIL}</span>
          </div>
          <div className="flex items-center space-x-2 bg-slate-800/80 px-4 py-2 rounded-lg border border-slate-700">
            <MapPin className="w-4 h-4 text-cyan-400" />
            <span>{locationText}</span>
          </div>
        </div>

        <div className="pt-4 flex justify-center space-x-6">
          <a 
            href={`mailto:${CONTACT_EMAIL}`}
            className="p-3 bg-slate-800 hover:bg-cyan-600 text-white rounded-lg transition border border-slate-700 hover:border-cyan-400 shadow-md"
            title="Email Phan Xuan Binh"
          >
            <Mail className="w-6 h-6" />
          </a>
          <a 
            href={GITHUB_URL} 
            target="_blank" 
            rel="noreferrer" 
            className="p-3 bg-slate-800 hover:bg-cyan-600 text-white rounded-lg transition border border-slate-700 hover:border-cyan-400 shadow-md"
            title="GitHub Profile"
          >
            <Github className="w-6 h-6" />
          </a>
          <a 
            href={LINKEDIN_URL} 
            target="_blank" 
            rel="noreferrer" 
            className="p-3 bg-slate-800 hover:bg-rose-600 text-white rounded-lg transition border border-slate-700 hover:border-rose-400 shadow-md"
            title="LinkedIn Profile"
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </div>

        {/* COPYRIGHT & DESIGN NOTE */}
        <div className="pt-10 border-t border-slate-800 text-slate-500 font-orbitron text-xs flex flex-col items-center gap-3">
          <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-4">
            <span>{t('footer.rights')}</span>
            <span className="text-cyan-400">FULL-STACK & BACK-END DEVELOPER</span>
          </div>
          
          {/* High-Tech System UI Theme Note */}
          <div className="pt-2 text-[11px] text-slate-400 tracking-wider flex items-center justify-center space-x-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            <span>{t('footer.designNote')}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
          </div>
        </div>

      </div>
    </footer>
  );
}
