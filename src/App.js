import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import FeaturedGame from './components/FeaturedGame';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NetworkBackground from './components/NetworkBackground';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="text-secondary text-2xl font-mono animate-pulse">
          Loading...
        </div>
      </div>
    );
  }

  return (
    <div className="App bg-primary min-h-screen relative">
      <NetworkBackground />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <FeaturedGame />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App; 