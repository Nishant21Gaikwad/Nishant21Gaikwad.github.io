import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import SplashScreen from './components/SplashScreen';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Disable scrolling while splash screen is active
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, [loading]);

  return (
    <div className="bg-background min-h-screen text-white font-sans selection:bg-primary/30 relative">
      <AnimatePresence mode="wait">
        {loading && <SplashScreen key="splash" />}
      </AnimatePresence>

      <div className={`transition-opacity duration-1000 ${loading ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'}`}>
        <Navbar />
        <main>
          <Hero />
          <Projects />
          <Education />
          <Experience />
          <Skills />
          <Contact />
        </main>
      </div>
    </div>
  );
}

export default App;
