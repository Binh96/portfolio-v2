import React from 'react';
import { ShieldCheck, Zap, Mail, Phone, MapPin, Linkedin, Github, GraduationCap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import avatarImg from '../assets/avatar.jpg';

const DEV_NAME = import.meta.env.VITE_DEVELOPER_NAME || "PHAN XUÂN BÍNH";
const CONTACT_PHONE = import.meta.env.VITE_CONTACT_PHONE || "0764 648 930";
const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL || "phanxuanbinh96@gmail.com";
const GITHUB_URL = import.meta.env.VITE_GITHUB_URL || "https://github.com/Binh96";
const LINKEDIN_URL = import.meta.env.VITE_LINKEDIN_URL || "https://www.linkedin.com/in/binhpx96/";

export default function About() {
  const { lang, t } = useLanguage();

  const locationText = lang === 'vi' 
    ? (import.meta.env.VITE_LOCATION_VI || "Cầu Kiệu, TP. Hồ Chí Minh, Việt Nam")
    : (import.meta.env.VITE_LOCATION_EN || "Cau Kieu, Ho Chi Minh City, Viet Nam");

  return (
    <section id="about" className="py-20 bg-white border-y border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION TITLE */}
        <div className="flex items-center space-x-4 mb-12">
          <div className="h-8 w-2 bg-cyan-500 cyber-cyan-glow"></div>
          <h2 className="font-orbitron text-3xl font-extrabold tracking-wider text-slate-900 uppercase">
            {t('about.sectionTitle')} <span className="text-slate-400 text-sm font-normal block sm:inline sm:ml-2">{t('about.subTitle')}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* PROFILE CARD (LEFT) */}
          <div className="lg:col-span-5 bg-slate-50 border border-slate-200 p-6 clip-corner shadow-md relative space-y-6">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-rose-500"></div>

            <div className="flex items-center space-x-5">
              <div className="relative">
                {/* IMPORTED AVATAR ASSET (ROBUST ON GITHUB PAGES & ALL BASE PATHS) */}
                <div className="w-24 h-24 rounded-xl bg-slate-900 border-2 border-cyan-400 flex items-center justify-center overflow-hidden shadow-lg cyber-cyan-glow">
                  <img 
                    src={avatarImg} 
                    alt={DEV_NAME} 
                    className="w-full h-full object-cover hover:scale-110 transition duration-300"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-7 h-7 bg-cyan-500 rounded-full flex items-center justify-center text-white text-xs shadow">
                  <ShieldCheck className="w-4 h-4" />
                </div>
              </div>

              <div>
                <h3 className="font-orbitron font-bold text-xl text-slate-900">{DEV_NAME}</h3>
                <p className="text-cyan-600 font-orbitron text-xs font-semibold uppercase tracking-wider">{t('about.role')}</p>
                <p className="text-slate-500 text-xs mt-1">{t('about.goal')}</p>
              </div>
            </div>

            {/* Contacts Info List */}
            <div className="space-y-2.5 text-xs font-orbitron text-slate-700 border-t border-slate-200 pt-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-cyan-600" />
                <span>{CONTACT_PHONE}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-cyan-600" />
                <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-cyan-600 transition">{CONTACT_EMAIL}</a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-cyan-600" />
                <span>{locationText}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Github className="w-4 h-4 text-cyan-600" />
                <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="hover:text-cyan-600 transition">github.com/Binh96</a>
              </div>
              <div className="flex items-center space-x-3">
                <Linkedin className="w-4 h-4 text-cyan-600" />
                <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="hover:text-cyan-600 transition">linkedin.com/in/binhpx96</a>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-200 font-orbitron text-xs">
              <div className="bg-white p-3 rounded border border-slate-200">
                <span className="text-slate-400 block text-[10px]">{t('about.expLabel')}</span>
                <span className="font-bold text-slate-800 text-sm">{t('about.expYears')}</span>
              </div>
              <div className="bg-white p-3 rounded border border-slate-200">
                <span className="text-slate-400 block text-[10px]">{t('about.projLabel')}</span>
                <span className="font-bold text-cyan-600 text-sm">{t('about.projDone')}</span>
              </div>
              <div className="bg-white p-3 rounded border border-slate-200">
                <span className="text-slate-400 block text-[10px]">{t('about.archLabel')}</span>
                <span className="font-bold text-emerald-600 text-sm">{t('about.archValue')}</span>
              </div>
              <div className="bg-white p-3 rounded border border-slate-200">
                <span className="text-slate-400 block text-[10px]">{t('about.stackLabel')}</span>
                <span className="font-bold text-rose-600 text-sm">{t('about.stackValue')}</span>
              </div>
            </div>

            {/* Education Badge */}
            <div className="bg-white p-4 rounded border border-slate-200 flex items-start space-x-3 font-orbitron text-xs">
              <GraduationCap className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-slate-900 block">{t('about.eduSchool')}</span>
                <span className="text-slate-500 text-[11px]">{t('about.eduMajor')}</span>
              </div>
            </div>
          </div>

          {/* BIO & TECH STACK (RIGHT) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-orbitron text-2xl font-bold text-slate-800">
              {t('about.headline')}
            </h3>

            <p className="text-slate-600 leading-relaxed text-base font-medium">
              {t('about.bio')}
            </p>

            {/* SKILLS */}
            <div className="space-y-4 pt-2">
              <h4 className="font-orbitron text-sm font-bold uppercase tracking-wider text-slate-700 flex items-center">
                <Zap className="w-4 h-4 text-cyan-500 mr-2" /> {t('about.skillsHeader')}
              </h4>

              {/* Skill 1: 70% */}
              <div>
                <div className="flex justify-between text-xs font-orbitron font-semibold mb-1">
                  <span className="text-slate-800">NODEJS / NESTJS / JAVASCRIPT / TYPESCRIPT</span>
                  <span className="text-cyan-600">70%</span>
                </div>
                <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-full bg-cyan-500 cyber-cyan-glow rounded-full" style={{ width: '70%' }}></div>
                </div>
              </div>

              {/* Skill 2: 50% */}
              <div>
                <div className="flex justify-between text-xs font-orbitron font-semibold mb-1">
                  <span className="text-slate-800">MICROSERVICES / DOMAIN-DRIVEN DESIGN (DDD) / KAFKA</span>
                  <span className="text-rose-600">50%</span>
                </div>
                <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-full bg-rose-500 cyber-rose-glow rounded-full" style={{ width: '50%' }}></div>
                </div>
              </div>

              {/* Skill 3: 50% */}
              <div>
                <div className="flex justify-between text-xs font-orbitron font-semibold mb-1">
                  <span className="text-slate-800">JAVA / PYTHON (FASTAPI) / CELERY / REDIS</span>
                  <span className="text-cyan-600">50%</span>
                </div>
                <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-full bg-cyan-500 cyber-cyan-glow rounded-full" style={{ width: '50%' }}></div>
                </div>
              </div>

              {/* Skill 4: 50% */}
              <div>
                <div className="flex justify-between text-xs font-orbitron font-semibold mb-1">
                  <span className="text-slate-800">POSTGRESQL / MYSQL / DOCKER / KEYCLOAK / PROMETHEUS</span>
                  <span className="text-rose-600">50%</span>
                </div>
                <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-full bg-rose-500 cyber-rose-glow rounded-full" style={{ width: '50%' }}></div>
                </div>
              </div>

              {/* Skill 5: 40% */}
              <div>
                <div className="flex justify-between text-xs font-orbitron font-semibold mb-1">
                  <span className="text-slate-800">REACTJS / NEXTJS / ANGULAR / VUEJS / CYPRESS</span>
                  <span className="text-cyan-600">40%</span>
                </div>
                <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-full bg-cyan-500 cyber-cyan-glow rounded-full" style={{ width: '40%' }}></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
