import { useState, useCallback, createContext, useContext } from 'react';
import { Language, LocaleContent } from '../types';
import { en } from '../locales/en';
import { pl } from '../locales/pl';
import { ru } from '../locales/ru';
import { uk } from '../locales/uk';

const locales: Record<Language, LocaleContent> = {
  en,
  pl,
  ru,
  uk
};

interface LocaleContextType {
  locale: Language;
  setLocale: (locale: Language) => void;
  t: (key: string) => string;
}

export const LocaleContext = createContext<LocaleContextType>({
  locale: 'en',
  setLocale: () => {},
  t: () => '',
});

export const useLocaleProvider = () => {
  const [locale, setLocale] = useState<Language>('en');

  const t = useCallback((key: string) => {
    const keys = key.split('.');
    let value: any = locales[locale];
    
    for (const k of keys) {
      if (!value || !value[k]) {
        console.warn(`Translation missing for key: ${key} in locale: ${locale}`);
        return locales.en[keys[0]]?.[keys[1]] || key;
      }
      value = value[k];
    }
    
    return value;
  }, [locale]);

  return { locale, setLocale, t };
};

export const useLocale = () => useContext(LocaleContext);