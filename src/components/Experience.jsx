import React from 'react';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-20 bg-white border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION TITLE */}
        <div className="flex items-center space-x-4 mb-14">
          <div className="h-8 w-2 bg-cyan-500 cyber-cyan-glow"></div>
          <h2 className="font-orbitron text-3xl font-extrabold tracking-wider text-slate-900 uppercase">
            {t('experience.sectionTitle')} <span className="text-slate-400 text-sm font-normal block sm:inline sm:ml-2">{t('experience.subTitle')}</span>
          </h2>
        </div>

        {/* TIMELINE TREE */}
        <div className="relative border-l-2 border-slate-200 ml-4 sm:ml-8 space-y-12 pl-6 sm:pl-10">
          
          {/* JOB 1: MTV HI-TEK VIETNAM */}
          <div className="relative group">
            {/* Node Bullet */}
            <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-cyan-400 border-2 border-white cyber-cyan-glow group-hover:scale-125 transition"></div>

            <div className="bg-slate-50 border border-slate-200 p-6 clip-corner shadow-md space-y-4 hover:border-cyan-300 transition">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3 font-orbitron">
                <div>
                  <h3 className="font-bold text-xl text-slate-900">{t('experience.exp1Role')}</h3>
                  <p className="text-cyan-600 text-sm font-semibold">{t('experience.exp1Company')}</p>
                </div>
                <div className="flex items-center space-x-2 text-xs text-slate-500 bg-white px-3 py-1.5 rounded border border-slate-200 self-start sm:self-auto">
                  <Calendar className="w-4 h-4 text-cyan-600" />
                  <span>{t('experience.exp1Date')}</span>
                </div>
              </div>

              <div className="text-xs font-orbitron font-semibold text-rose-600 bg-rose-50 px-3 py-1 rounded inline-block">
                {t('experience.exp1Tag')}
              </div>

              <ul className="space-y-2.5 text-slate-600 text-sm leading-relaxed font-medium">
                <li className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-500 flex-shrink-0 mt-0.5" />
                  <span>{t('experience.exp1Bullet1')}</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-500 flex-shrink-0 mt-0.5" />
                  <span>{t('experience.exp1Bullet2')}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* JOB 2: 3S HUE INTERSOFT */}
          <div className="relative group">
            {/* Node Bullet */}
            <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-rose-500 border-2 border-white cyber-rose-glow group-hover:scale-125 transition"></div>

            <div className="bg-slate-50 border border-slate-200 p-6 clip-corner shadow-md space-y-4 hover:border-rose-300 transition">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3 font-orbitron">
                <div>
                  <h3 className="font-bold text-xl text-slate-900">{t('experience.exp2Role')}</h3>
                  <p className="text-rose-600 text-sm font-semibold">{t('experience.exp2Company')}</p>
                </div>
                <div className="flex items-center space-x-2 text-xs text-slate-500 bg-white px-3 py-1.5 rounded border border-slate-200 self-start sm:self-auto">
                  <Calendar className="w-4 h-4 text-rose-600" />
                  <span>{t('experience.exp2Date')}</span>
                </div>
              </div>

              <div className="text-xs font-orbitron font-semibold text-cyan-600 bg-cyan-50 px-3 py-1 rounded inline-block">
                {t('experience.exp2Tag')}
              </div>

              <ul className="space-y-2.5 text-slate-600 text-sm leading-relaxed font-medium">
                <li className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                  <span>{t('experience.exp2Bullet1')}</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                  <span>{t('experience.exp2Bullet2')}</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                  <span>{t('experience.exp2Bullet3')}</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                  <span>{t('experience.exp2Bullet4')}</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
