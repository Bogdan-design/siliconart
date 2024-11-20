import React from 'react';
import { LocaleContext, useLocaleProvider } from './hooks/useLocale';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  const localeValue = useLocaleProvider();

  return (
    <LocaleContext.Provider value={localeValue}>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Contact />
      </div>
    </LocaleContext.Provider>
  );
}

export default App;