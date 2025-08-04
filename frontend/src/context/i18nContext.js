import React, { createContext, useState, useEffect, useContext } from 'react';

const I18nContext = createContext();

export const I18nProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  
  useEffect(() => {
    // Detectar idioma del navegador
    const browserLang = navigator.language.split('-')[0];
    setLanguage(['en', 'es'].includes(browserLang) ? browserLang : 'en');
  }, []);

  const t = (key) => {
    const translations = require(`../locales/${language}.json`);
    return translations[key] || key;
  };

  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => useContext(I18nContext);