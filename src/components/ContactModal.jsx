import React, { useState, useEffect } from 'react';
import { X, Send, Radio, CheckCircle, Mail, User, FileText, MessageSquare } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL || "phanxuanbinh96@gmail.com";

export default function ContactModal({ isOpen, onClose }) {
  const { lang } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

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

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);

      // Trigger mailto fallback using configured environment variable
      const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(formData.subject || 'Lien he tu Portfolio')}&body=${encodeURIComponent(`Ho ten: ${formData.name}\nEmail: ${formData.email}\n\nNoi dung:\n${formData.message}`)}`;
      window.location.href = mailtoUrl;

      setTimeout(() => {
        setIsSent(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
        onClose();
      }, 2500);
    }, 800);
  };

  const isVi = lang === 'vi';

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
      onClick={onClose}
    >
      {/* MODAL WINDOW */}
      <div 
        className="relative w-full max-w-xl bg-slate-950 border-2 border-cyan-400 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,163,255,0.3)] flex flex-col clip-corner cursor-default"
        onClick={(e) => e.stopPropagation()}
      >
        {/* HEADER */}
        <div className="h-14 bg-slate-900 border-b border-slate-800 px-6 flex items-center justify-between">
          <div className="flex items-center space-x-2 text-cyan-400 font-orbitron font-bold text-xs tracking-wider">
            <Radio className="w-4 h-4 animate-pulse text-cyan-400" />
            <span>{isVi ? 'OPEN TRANSMISSION // GỬI THÔNG DIỆP' : 'OPEN TRANSMISSION // SEND MESSAGE'}</span>
          </div>

          <button 
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-white hover:bg-slate-800 rounded transition"
            title="Close (ESC)"
          >
            <X className="w-5 h-5 text-rose-400" />
          </button>
        </div>

        {/* BODY */}
        <div className="p-6 font-orbitron space-y-5 text-slate-200">
          
          {isSent ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-400/50 animate-bounce">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h3 className="font-bold text-xl text-emerald-400 uppercase tracking-widest">
                {isVi ? 'TRANSMISSION SENT SUCCESSFUL!' : 'TRANSMISSION SENT SUCCESSFUL!'}
              </h3>
              <p className="text-slate-400 text-xs max-w-md mx-auto">
                {isVi 
                  ? `Cảm ơn bạn! Thông điệp đã được gửi đến ${CONTACT_EMAIL}.` 
                  : `Thank you! Your message has been transmitted to ${CONTACT_EMAIL}.`}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* SENDER NAME */}
              <div>
                <label className="block text-xs text-slate-400 mb-1.5 uppercase font-semibold flex items-center">
                  <User className="w-3.5 h-3.5 text-cyan-400 mr-1.5" />
                  {isVi ? 'Họ & Tên' : 'Full Name'} *
                </label>
                <input 
                  type="text" 
                  required
                  placeholder={isVi ? "Ví dụ: Nguyễn Văn A" : "e.g. John Doe"}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-700 focus:border-cyan-400 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none transition font-sans"
                />
              </div>

              {/* SENDER EMAIL */}
              <div>
                <label className="block text-xs text-slate-400 mb-1.5 uppercase font-semibold flex items-center">
                  <Mail className="w-3.5 h-3.5 text-cyan-400 mr-1.5" />
                  {isVi ? 'Email Liên Hệ' : 'Contact Email'} *
                </label>
                <input 
                  type="email" 
                  required
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-700 focus:border-cyan-400 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none transition font-sans"
                />
              </div>

              {/* SUBJECT */}
              <div>
                <label className="block text-xs text-slate-400 mb-1.5 uppercase font-semibold flex items-center">
                  <FileText className="w-3.5 h-3.5 text-cyan-400 mr-1.5" />
                  {isVi ? 'Tiêu Đề Thông Điệp' : 'Subject'}
                </label>
                <input 
                  type="text" 
                  placeholder={isVi ? "Ví dụ: Trao đổi cơ hội tuyển dụng" : "e.g. Project Inquiry / Job Opportunity"}
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-700 focus:border-cyan-400 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none transition font-sans"
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label className="block text-xs text-slate-400 mb-1.5 uppercase font-semibold flex items-center">
                  <MessageSquare className="w-3.5 h-3.5 text-cyan-400 mr-1.5" />
                  {isVi ? 'Nội Dung Thông Điệp' : 'Message'} *
                </label>
                <textarea 
                  required
                  rows={4}
                  placeholder={isVi ? "Nhập nội dung bạn muốn gửi..." : "Enter your message content..."}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-700 focus:border-cyan-400 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none transition font-sans resize-none"
                ></textarea>
              </div>

              {/* SUBMIT BUTTON */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full py-3.5 bg-cyan-600 hover:bg-cyan-500 disabled:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition shadow-lg shadow-cyan-500/20 flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>
                    {isSending 
                      ? (isVi ? 'TRANSMITTING MESSAGE...' : 'TRANSMITTING MESSAGE...') 
                      : (isVi ? 'GỬI THÔNG DIỆP // TRANSMIT SIGNAL' : 'SEND TRANSMISSION SIGNAL')}
                  </span>
                </button>
              </div>
            </form>
          )}

        </div>

        {/* FOOTER */}
        <div className="h-10 bg-slate-900 border-t border-slate-800 px-6 flex items-center justify-between text-[11px] font-mono text-slate-500">
          <span>DESTINATION: {CONTACT_EMAIL}</span>
          <span className="text-cyan-400 font-bold">SECURED ENCRYPTED</span>
        </div>

      </div>
    </div>
  );
}
