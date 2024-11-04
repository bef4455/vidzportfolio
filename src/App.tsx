import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import VideoDetails from './components/VideoDetails';

function App() {
  const location = useLocation();

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
    <div className="min-h-screen bg-black text-white">
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
