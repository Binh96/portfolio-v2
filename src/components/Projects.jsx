import React, { useState } from 'react';
import { Server, Database, Cpu, Calendar, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import ProjectDetailModal from './ProjectDetailModal';

export default function Projects() {
  const [filter, setFilter] = useState('ALL');
  const [selectedProject, setSelectedProject] = useState(null);
  const { t } = useLanguage();

  const projectsData = [
    {
      id: 1,
      title: t('projects.p1Title'),
      category: t('projects.p1Badge'),
      desc: t('projects.p1Desc'),
      icon: Server,
      iconColor: 'text-cyan-400',
      badgeBg: 'bg-cyan-500',
      borderHover: 'hover:border-cyan-400',
      titleHover: 'group-hover:text-cyan-600',
      tags: ['#NestJS', '#Microservices', '#Kafka', '#Keycloak', '#Docker', '#PostgreSQL'],
      type: 'MICROSERVICES'
    },
    {
      id: 2,
      title: t('projects.p2Title'),
      category: t('projects.p2Badge'),
      desc: t('projects.p2Desc'),
      icon: Database,
      iconColor: 'text-rose-500',
      badgeBg: 'bg-rose-600',
      borderHover: 'hover:border-rose-400',
      titleHover: 'group-hover:text-rose-600',
      tags: ['#FastAPI', '#NextJS', '#Redis', '#Celery', '#AWS_S3', '#CloudFront'],
      type: 'ERP'
    },
    {
      id: 3,
      title: t('projects.p3Title'),
      category: t('projects.p3Badge'),
      desc: t('projects.p3Desc'),
      icon: Cpu,
      iconColor: 'text-cyan-400',
      badgeBg: 'bg-cyan-500',
      borderHover: 'hover:border-cyan-400',
      titleHover: 'group-hover:text-cyan-600',
      tags: ['#Java', '#DDD', '#VueJS', '#Vuetify', '#SFTP', '#PostgreSQL'],
      type: 'ENTERPRISE'
    },
    {
      id: 4,
      title: t('projects.p4Title'),
      category: t('projects.p4Badge'),
      desc: t('projects.p4Desc'),
      icon: Calendar,
      iconColor: 'text-rose-500',
      badgeBg: 'bg-rose-600',
      borderHover: 'hover:border-rose-400',
      titleHover: 'group-hover:text-rose-600',
      tags: ['#ReactJS', '#Java', '#API_Integration', '#Agile'],
      type: 'FRONTEND'
    }
  ];

  const filteredProjects = filter === 'ALL' ? projectsData : projectsData.filter(p => p.type.includes(filter));

  return (
    <section id="projects" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION TITLE */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-12">
          <div className="flex items-center space-x-4">
            <div className="h-8 w-2 bg-rose-500 cyber-rose-glow"></div>
            <h2 className="font-orbitron text-3xl font-extrabold tracking-wider text-slate-900 uppercase">
              {t('projects.sectionTitle')} <span className="text-slate-400 text-sm font-normal block sm:inline sm:ml-2">{t('projects.subTitle')}</span>
            </h2>
          </div>

          {/* FILTER BUTTONS */}
          <div className="flex flex-wrap gap-2 font-orbitron text-xs font-bold">
            <button 
              onClick={() => setFilter('ALL')}
              className={`px-4 py-2 rounded border transition ${filter === 'ALL' ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-700 hover:text-cyan-600 border-slate-200'}`}
            >
              {t('projects.btnAll')}
            </button>
            <button 
              onClick={() => setFilter('MICROSERVICES')}
              className={`px-4 py-2 rounded border transition ${filter === 'MICROSERVICES' ? 'bg-cyan-600 text-white border-cyan-600' : 'bg-white text-slate-700 hover:text-cyan-600 border-slate-200'}`}
            >
              {t('projects.btnMicro')}
            </button>
            <button 
              onClick={() => setFilter('ERP')}
              className={`px-4 py-2 rounded border transition ${filter === 'ERP' ? 'bg-rose-600 text-white border-rose-600' : 'bg-white text-slate-700 hover:text-rose-600 border-slate-200'}`}
            >
              {t('projects.btnErp')}
            </button>
          </div>
        </div>

        {/* PROJECTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((proj) => {
            const IconComp = proj.icon;
            return (
              <div 
                key={proj.id}
                onClick={() => setSelectedProject(proj)}
                className={`bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-xl ${proj.borderHover} transition-all duration-300 group flex flex-col clip-corner cursor-pointer`}
              >
                <div className="h-44 bg-slate-900 relative overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent z-10"></div>
                  <div className={`${proj.iconColor} group-hover:scale-110 transition duration-500 flex flex-col items-center`}>
                    <IconComp className="w-14 h-14 animate-pulse" />
                    <span className="font-orbitron text-xs mt-2 tracking-widest uppercase">PRODUCTION SYSTEM</span>
                  </div>
                  <span className={`absolute top-3 left-3 z-20 px-2.5 py-1 ${proj.badgeBg} text-white text-[10px] font-orbitron font-bold rounded`}>
                    {proj.category}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className={`font-orbitron font-bold text-xl text-slate-900 ${proj.titleHover} transition`}>
                      {proj.title}
                    </h3>
                    <p className="text-slate-600 text-sm mt-2 font-medium leading-relaxed">
                      {proj.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2">
                    <div className="flex flex-wrap gap-1.5 font-orbitron text-[10px] font-semibold text-slate-500">
                      {proj.tags.map((t, idx) => <span key={idx} className="bg-slate-100 px-2 py-0.5 rounded">{t}</span>)}
                    </div>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(proj);
                      }}
                      className="text-cyan-600 hover:text-cyan-800 font-orbitron text-xs font-bold flex items-center"
                    >
                      {t('projects.btnDetails')} <ExternalLink className="w-3.5 h-3.5 ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* INTERACTIVE PROJECT DETAIL MODAL */}
      <ProjectDetailModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
}
