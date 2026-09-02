import React, { useEffect } from 'react';
import { X, Server, Database, Cpu, Calendar, CheckCircle2, ShieldCheck, Layers, Terminal } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function ProjectDetailModal({ project, isOpen, onClose }) {
  const { lang } = useLanguage();

  // Listen for ESC key
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

  if (!isOpen || !project) return null;

  // Labels Dictionary
  const uiLabels = {
    vi: {
      labelRole: "// VAI TRÒ (ROLE)",
      labelCompany: "// ĐƠN VỊ / DỰ ÁN",
      labelArch: "// KIẾN TRÚC",
      labelDuration: "// THỜI GIAN THỰC HIỆN",
      titleOverview: "Tổng Quan Dự Án (Overview)",
      titleHighlights: "Phạm Vi Kỹ Thuật & Đóng Góp Nổi Bật",
      titleTechStack: "CÔNG NGHỆ CHÍNH (TECH STACK & TOOLS)",
      btnClose: "ĐÓNG (CLOSE) [ESC]"
    },
    en: {
      labelRole: "// ROLE",
      labelCompany: "// ORGANIZATION / PROJECT",
      labelArch: "// ARCHITECTURE",
      labelDuration: "// TIMELINE",
      titleOverview: "Project Overview",
      titleHighlights: "Technical Scope & Key Contributions",
      titleTechStack: "TECH STACK & TOOLS",
      btnClose: "CLOSE [ESC]"
    }
  };

  const labels = uiLabels[lang] || uiLabels.vi;

  // Detail Content Dictionary
  const detailsData = {
    1: {
      vi: {
        role: "Full-Stack / Back-end Developer",
        company: "3S HUE Intersoft (Dự án 3SI)",
        arch: "Microservices Architecture (NestJS + Kafka + Keycloak)",
        duration: "10/2023 - 04/2026",
        overview: "Hệ thống Quản lý Logistics & Giao vận 20-GL_TMS & 20-GGC được xây dựng dựa trên kiến trúc Microservices phân tán hiện đại, giải quyết bài toán điều phối vận tải, quản lý đơn hàng và theo dõi hành trình theo thời gian thực.",
        highlights: [
          "Xây dựng & phân tách dịch vụ Backend theo kiến trúc Microservices với NestJS & TypeScript.",
          "Tích hợp Apache Kafka cho cơ chế truyền nhận thông điệp bất đồng bộ (Event-Driven Messaging), giảm thiểu độ trễ giữa các dịch vụ.",
          "Triển khai hệ thống xác thực & phân quyền tập trung (SSO/RBAC) bằng Keycloak.",
          "Giám sát hiệu năng và sức khỏe hệ thống theo thời gian thực bằng Prometheus & Grafana.",
          "Tối ưu hóa các câu truy vấn PostgreSQL và cấu hình Indexing, giúp cải thiện 40% thời gian phản hồi API."
        ]
      },
      en: {
        role: "Full-Stack / Back-end Developer",
        company: "3S HUE Intersoft (3SI Project)",
        arch: "Microservices Architecture (NestJS + Kafka + Keycloak)",
        duration: "10/2023 - 04/2026",
        overview: "Logistics & Transport Management Platform 20-GL_TMS & 20-GGC built on modern distributed microservices architecture to streamline transport dispatch, order tracking, and real-time fleet telemetry.",
        highlights: [
          "Architected and developed modular backend services with NestJS & TypeScript.",
          "Implemented asynchronous event-driven inter-service messaging using Apache Kafka.",
          "Integrated Keycloak for centralized single sign-on (SSO) and role-based access control (RBAC).",
          "Configured Prometheus & Grafana telemetry stack for real-time microservices monitoring.",
          "Optimized PostgreSQL queries and database indexing, improving API response latency by 40%."
        ]
      }
    },
    2: {
      vi: {
        role: "Full-Stack Developer (Freelance)",
        company: "MTV HI-TEK VIỆT NAM",
        arch: "Enterprise ERP System (Python FastAPI + NextJS + AWS S3)",
        duration: "05/2026 - 07/2026",
        overview: "Hệ thống Quản trị Nguồn lực Doanh nghiệp (Enterprise ERP) chuyên sâu quản lý quy trình Đơn hàng (Orders), Thanh toán (Payments) và Xuất hóa đơn (Invoices) với khả năng xử lý dữ liệu tải cao.",
        highlights: [
          "Phân tích yêu cầu nghiệp vụ trực tiếp với Business Analysts (BA) & Project Managers (PM).",
          "Phát triển RESTful APIs tốc độ cao bằng Python FastAPI và ORM SQLAlchemy / PostgreSQL.",
          "Xây dựng hàng đợi xử lý ngầm (Background Task Queue) với Celery & Redis để sinh file PDF hóa đơn và xử lý dữ liệu nặng bất đồng bộ.",
          "Tích hợp lưu trữ đám mây AWS S3 & CloudFront CDN, giúp tăng tốc độ upload/download tài liệu và hình ảnh gấp 2.5 lần.",
          "Xây dựng các thành phần giao diện người dùng mượt mà bằng React (NextJS) kết hợp TailwindCSS."
        ]
      },
      en: {
        role: "Full-Stack Developer (Freelance)",
        company: "MTV HI-TEK VIETNAM",
        arch: "Enterprise ERP System (Python FastAPI + NextJS + AWS S3)",
        duration: "05/2026 - 07/2026",
        overview: "Internal Enterprise ERP System designed for managing Orders, Payments, and Automated Invoicing workflows with high-throughput file asset management.",
        highlights: [
          "Collaborated directly with BAs and PMs to translate complex business rules into system specifications.",
          "Engineered high-performance RESTful APIs leveraging Python FastAPI and PostgreSQL.",
          "Configured Celery & Redis background workers for asynchronous invoice PDF generation and file processing.",
          "Integrated AWS S3 and CloudFront CDN asset pipelines, accelerating document upload/download speeds by 2.5x.",
          "Crafted responsive, intuitive user interfaces with React (NextJS) and TailwindCSS."
        ]
      }
    },
    3: {
      vi: {
        role: "Back-end Developer",
        company: "3S HUE Intersoft (Dự án 3SI)",
        arch: "Enterprise Domain-Driven Design (Java + DDD + SFTP)",
        duration: "02/2022 - 09/2023",
        overview: "Hệ thống Quản lý Lương Doanh nghiệp 25-UKS được thiết kế dành riêng cho các tập đoàn có cấu trúc nhân sự phức tạp, áp dụng chặt chẽ mô hình Thiết kế Hướng Tền miền (Domain-Driven Design).",
        highlights: [
          "Áp dụng chuẩn mực Domain-Driven Design (DDD), phân tách rõ ràng các tầng Domain, Application, Infrastructure và Presentation.",
          "Viết các thuật toán tính toán lương, phúc lợi và thuế phức tạp bằng Java Backend.",
          "Xây dựng đường truyền dữ liệu SFTP mã hóa tự động để trao đổi file bảng lương định kỳ với các bên ngân hàng & đối tác.",
          "Thiết kế giao diện quản lý dữ liệu trực quan bằng VueJS và Vuetify UI component library."
        ]
      },
      en: {
        role: "Back-end Developer",
        company: "3S HUE Intersoft (3SI Project)",
        arch: "Enterprise Domain-Driven Design (Java + DDD + SFTP)",
        duration: "02/2022 - 09/2023",
        overview: "Enterprise Payroll & Salary Management System 25-UKS built for large organizations, strictly adhering to Domain-Driven Design (DDD) principles.",
        highlights: [
          "Enforced Domain-Driven Design (DDD) patterns separating Bounded Contexts, Aggregates, and Infrastructure layers.",
          "Engineered complex salary calculation engines and tax computation rules in Java.",
          "Built automated SFTP secure file transfer pipelines for scheduled payroll data batch syncing.",
          "Developed rich dashboard interfaces using VueJS and Vuetify components."
        ]
      }
    },
    4: {
      vi: {
        role: "Full-Stack / Frontend Developer",
        company: "3S HUE Intersoft (Dự án 3SI)",
        arch: "Modern Web Application (ReactJS + Java REST APIs)",
        duration: "02/2022 - 12/2022",
        overview: "Ứng dụng Đặt lịch hẹn và Quản lý Lịch trình 20-PHS hỗ trợ đặt chỗ, theo dõi tiến độ dịch vụ và tự động đồng bộ hóa lịch trình cho khách hàng và quản trị viên.",
        highlights: [
          "Phát triển giao diện ứng dụng web responsive bằng ReactJS, tối ưu hóa trải nghiệm người dùng.",
          "Kết nối và tích hợp liền mạch với hệ thống Java RESTful APIs Backend.",
          "Xử lý đồng bộ dữ liệu thời gian thực, quản lý trạng thái ứng dụng (State Management) hiệu quả.",
          "Tham gia kiểm thử E2E (End-to-End) đảm bảo hệ thống hoạt động ổn định trước khi bàn giao."
        ]
      },
      en: {
        role: "Full-Stack / Frontend Developer",
        company: "3S HUE Intersoft (3SI Project)",
        arch: "Modern Web Application (ReactJS + Java REST APIs)",
        duration: "02/2022 - 12/2022",
        overview: "Appointment Scheduling & Operations Management App 20-PHS providing real-time booking, schedule tracking, and service management for end users.",
        highlights: [
          "Built intuitive frontend web interfaces with ReactJS tailored for high usability.",
          "Integrated Java RESTful APIs with robust error handling and response caching.",
          "Managed real-time application state and schedule synchronization.",
          "Executed thorough end-to-end testing cycles to ensure high availability and stability."
        ]
      }
    }
  };

  const info = detailsData[project.id]?.[lang] || detailsData[project.id]?.vi;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
      onClick={onClose}
    >
      {/* MODAL WINDOW */}
      <div 
        className="relative w-full max-w-3xl max-h-[85vh] bg-white border-2 border-cyan-400 rounded-2xl overflow-hidden shadow-2xl flex flex-col clip-corner cursor-default"
        onClick={(e) => e.stopPropagation()}
      >
        {/* MODAL HEADER */}
        <div className="bg-slate-900 text-white p-6 relative border-b border-slate-800">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-rose-500"></div>

          <div className="flex justify-between items-start">
            <div>
              <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 border border-cyan-400/40 text-[11px] font-orbitron font-bold rounded-full inline-block mb-2">
                {project.category}
              </span>
              <h3 className="font-orbitron font-extrabold text-2xl text-white">
                {project.title}
              </h3>
            </div>

            <button 
              onClick={onClose}
              className="p-1.5 bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white rounded-lg transition"
              title="Close (ESC)"
            >
              <X className="w-6 h-6 text-rose-400" />
            </button>
          </div>
        </div>

        {/* MODAL BODY */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-700 text-sm leading-relaxed">
          
          {/* META METRICS GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-orbitron text-xs">
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
              <span className="text-slate-400 block text-[10px] uppercase">{labels.labelRole}</span>
              <span className="font-bold text-slate-900">{info?.role}</span>
            </div>
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
              <span className="text-slate-400 block text-[10px] uppercase">{labels.labelCompany}</span>
              <span className="font-bold text-cyan-700">{info?.company}</span>
            </div>
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
              <span className="text-slate-400 block text-[10px] uppercase">{labels.labelArch}</span>
              <span className="font-bold text-emerald-700">{info?.arch}</span>
            </div>
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
              <span className="text-slate-400 block text-[10px] uppercase">{labels.labelDuration}</span>
              <span className="font-bold text-rose-600">{info?.duration}</span>
            </div>
          </div>

          {/* OVERVIEW */}
          <div>
            <h4 className="font-orbitron font-bold text-sm text-slate-900 uppercase tracking-wider mb-2 flex items-center">
              <Layers className="w-4 h-4 text-cyan-600 mr-2" /> {labels.titleOverview}
            </h4>
            <p className="bg-slate-50 p-4 rounded-lg border border-slate-200 text-slate-700 font-medium">
              {info?.overview}
            </p>
          </div>

          {/* KEY TECHNICAL HIGHLIGHTS */}
          <div>
            <h4 className="font-orbitron font-bold text-sm text-slate-900 uppercase tracking-wider mb-3 flex items-center">
              <Terminal className="w-4 h-4 text-emerald-600 mr-2" /> {labels.titleHighlights}
            </h4>
            <ul className="space-y-2.5">
              {info?.highlights.map((item, idx) => (
                <li key={idx} className="flex items-start space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* TECH STACK TAGS */}
          <div>
            <h4 className="font-orbitron font-bold text-xs text-slate-400 uppercase tracking-wider mb-2">
              {labels.titleTechStack}
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span key={idx} className="px-3 py-1 bg-slate-900 text-cyan-400 font-orbitron font-bold text-xs rounded-md shadow-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* MODAL FOOTER */}
        <div className="p-4 bg-slate-100 border-t border-slate-200 flex justify-end font-orbitron">
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-slate-900 text-white hover:bg-cyan-600 font-bold text-xs uppercase clip-corner-sm transition"
          >
            {labels.btnClose}
          </button>
        </div>

      </div>
    </div>
  );
}
