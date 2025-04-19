import {useLocale} from '../hooks/useLocale';
import {ArrowRight, Code2} from 'lucide-react';

export default function Hero() {
  const { t } = useLocale();

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-subtle overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-radial from-indigo-100/50 to-transparent opacity-60"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-300/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-300/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center space-y-8">
          {/* Logo Animation */}
          <div className="flex justify-center mb-8">
            <div className="p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl animate-float">
              <img src="/pablic/logo.png" alt="Logo" className="h-24 w-24" />
            </div>
          </div>

          {/* Main Content */}
          <h1 className="text-5xl md:text-7xl font-bold animate-fade-up">
            <span className="text-gradient">{t('hero.title')}</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: '0.2s' }}>
            {t('hero.subtitle')}
          </p>
          
          <div className="flex justify-center space-x-6 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <button onClick={scrollToContact} className="btn-primary group">
              {t('hero.cta')}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full p-1">
            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce-slow mx-auto"></div>
          </div>
        </div>
      </div>
    </div>
  );
}