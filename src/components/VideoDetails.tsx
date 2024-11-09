import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function VideoDetails() {
  const location = useLocation();
  const { videoUrl, title, category } = location.state || {};
  const [isOverlayActive, setIsOverlayActive] = useState(false);

  // Gestion du clic/tap pour activer ou désactiver l'overlay sombre
  const handleVideoClick = () => {
    setIsOverlayActive((prev) => !prev);
  };

  return (
    <div className="relative flex flex-col min-h-screen overflow-hidden">
      {/* Overlay sombre sur toute la page lorsqu'on clique sur la vidéo sur mobile */}
      {isOverlayActive && (
        <div className="absolute inset-0 bg-black/70 z-20 transition-opacity duration-500"></div>
      )}

      {/* Contenu principal de la page */}
      <div className="flex-grow flex flex-col justify-center items-center container mx-auto px-2 py-4 relative z-30 md:py-8 md:px-4">
        {/* Titre et Détails de la Vidéo */}
        <div className="mb-4 md:mb-16 text-center">
          <h1 className="text-lg md:text-3xl font-bold mb-2 md:mb-4">{title}</h1>
          <p className="text-gray-500 text-sm md:text-base md:mb-8">{category}</p>
        </div>

        {/* Contenu de la Vidéo */}
        <div
          className="w-full flex items-center justify-center cursor-pointer md:flex-grow"
          onClick={handleVideoClick}
        >
          {videoUrl && (
            <>
              {/* Version Mobile */}
              <div className="w-full max-w-3xl h-[50vh] md:hidden">
                <iframe
                  src={videoUrl}
                  title={title}
                  className="w-full h-full rounded-lg shadow-lg"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              
              {/* Version Laptop */}
              <div className="hidden md:block w-full h-[40vh] md:h-[60vh]">
                <iframe
                  src={videoUrl}
                  title={title}
                  className="w-full h-full rounded-lg shadow-lg"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
