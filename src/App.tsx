import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import VideoDetails from './components/VideoDetails';

function App() {
  const location = useLocation();
  const [isWorkSectionVisible, setIsWorkSectionVisible] = useState(false);

  useEffect(() => {
    // Gérer la couleur de fond en fonction du scroll
    const handleScroll = () => {
      const workSection = document.getElementById('projects');
      if (workSection) {
        const { top } = workSection.getBoundingClientRect();
        // Détecter si la section "WORK" est dans la vue
        if (top < window.innerHeight && top > 0) {
          setIsWorkSectionVisible(true);
        } else {
          setIsWorkSectionVisible(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Gérer la navigation par ancre via location.hash
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        isWorkSectionVisible ? 'bg-black text-white' : 'bg-white text-black'
      }`}
    >
      <Header />
      <Routes>
  <Route
    path="/"
    element={
      <>
        <Hero />
        <div className="mt-30">
          <Projects id="projects" />
        </div>
        <Contact id="contact" />
      </>
    }
  />
  {/* Route pour la page de détails de la vidéo */}
  <Route path="/video/:title" element={<VideoDetails />} />
</Routes>
      <Footer />
    </div>
  );
}

export default App;
