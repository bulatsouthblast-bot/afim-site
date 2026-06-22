"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { getTranslation, type Language, type TranslationKey } from "@/lib/i18n";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: TranslationKey) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);
const storageKey = "afim-language";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setCurrentLanguage] = useState<Language>("ru");

  useEffect(() => {
    const restoreLanguage = window.setTimeout(() => {
      const savedLanguage = window.localStorage.getItem(storageKey);
      if (savedLanguage === "ru" || savedLanguage === "kg" || savedLanguage === "en") {
        setCurrentLanguage(savedLanguage);
      }
    }, 0);

    return () => window.clearTimeout(restoreLanguage);
  }, []);

  const setLanguage = (nextLanguage: Language) => {
    window.localStorage.setItem(storageKey, nextLanguage);
    setCurrentLanguage(nextLanguage);
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const translation = getTranslation(language);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: (key) => translation[key] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }

  return context;
}
