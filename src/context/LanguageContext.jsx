import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../i18n/translations';

const LanguageContext = createContext();

const DEFAULT_LANG = import.meta.env.VITE_DEFAULT_LANG || 'en';

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('portfolio_lang') || DEFAULT_LANG;
  });

  useEffect(() => {
    localStorage.setItem('portfolio_lang', lang);
  }, [lang]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'vi' ? 'en' : 'vi'));
  };

  const t = (path) => {
    const keys = path.split('.');
    let current = translations[lang];
    for (const k of keys) {
      if (current && current[k] !== undefined) {
        current = current[k];
      } else {
        return path; // Fallback to key path if missing
      }
    }
    return current;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
