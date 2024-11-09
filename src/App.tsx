import { useEffect, useState } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import VideoDetails from './components/VideoDetails';

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [scrollTarget, setScrollTarget] = useState<string | null>(null);

  useEffect(() => {
    console.log('useEffect in App triggered. Current location: ', location);
    if (scrollTarget) {
      console.log(`Navigating to / with scrollTarget: ${scrollTarget}`);
      navigate('/', { replace: true });
      setTimeout(() => {
        setTimeout(() => {
          console.log(`Attempting to scroll to: #${scrollTarget}`);
          const element = document.getElementById(scrollTarget);
          if (element) {
            console.log(`Element for hash #${scrollTarget} found. Scrolling to it.`);
            element.scrollIntoView({ behavior: 'smooth' });
          } else {
            console.log(`Element for hash #${scrollTarget} not found.`);
          }
          setScrollTarget(null);
        }, 100); // Ajout d'un délai court pour garantir que la navigation est terminée
      });
    }
  }, [scrollTarget, location, navigate]);

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        console.log(`Scrolling to hash: ${location.hash}`);
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        console.log(`Element for hash ${location.hash} not found.`);
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-black text-white">
      <Header setScrollTarget={setScrollTarget} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero isMenuOpen={false} />
              <div className="mt-30">
                <Projects id="projects" />
              </div>
              <Contact id="contact" />
            </>
          }
        />
        <Route path="/video/:title" element={<VideoDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
