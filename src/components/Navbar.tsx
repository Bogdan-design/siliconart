import { useState } from 'react';
import { Menu, X, Globe} from 'lucide-react';
import { useLocale } from '../hooks/useLocale';
import {Language} from "../types";

const languages:{code:Language,name:string}[] = [
  { code: 'en', name: 'English' },
  { code: 'pl', name: 'Polski' },
  { code: 'ru', name: 'Русский' },
  { code: 'uk', name: 'Українська' }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { locale, setLocale, t } = useLocale();

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <img src="/pablic/20250419_0910_SiliconArt Logo Design_remix_01js6e1kr4egprbk99n49ea0kx.png" alt="Logo" className="h-12 w-34 mr-2" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-indigo-600">
              {t('nav.home')}
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-indigo-600">
              {t('nav.about')}
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-indigo-600">
              {t('nav.services')}
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="text-gray-700 hover:text-indigo-600">
              {t('nav.portfolio')}
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-indigo-600">
              {t('nav.contact')}
            </button>
            
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-indigo-600">
                <Globe className="h-5 w-5 mr-1" />
                <span>{languages.find(lang => lang.code === locale)?.name}</span>
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setLocale(lang.code)}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50"
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <button onClick={() => scrollToSection('home')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-indigo-600">
            {t('nav.home')}
          </button>
          <button onClick={() => scrollToSection('about')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-indigo-600">
            {t('nav.about')}
          </button>
          <button onClick={() => scrollToSection('services')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-indigo-600">
            {t('nav.services')}
          </button>
          <button onClick={() => scrollToSection('portfolio')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-indigo-600">
            {t('nav.portfolio')}
          </button>
          <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-indigo-600">
            {t('nav.contact')}
          </button>
          
          <div className="px-3 py-2">
            <div className="font-medium text-gray-500 mb-2">Select Language</div>
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLocale(lang.code);
                  setIsOpen(false);
                }}
                className="block w-full text-left py-2 text-sm text-gray-700 hover:text-indigo-600"
              >
                {lang.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}