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
      <div className="flex-grow flex flex-col justify-center items-center container mx-auto px-4 py-4 md:py-8 relative z-30">
        {/* Titre et Détails de la Vidéo */}
        <div className="mb-2 md:mb-4 text-center">
          <h1 className="text-xl md:text-2xl font-bold mb-1">{title}</h1>
          <p className="text-gray-500 text-sm md:text-base">{category}</p>
        </div>

        {/* Contenu de la Vidéo */}
        <div
          className="w-full flex-grow flex items-center justify-center mb-8 cursor-pointer"
          onClick={handleVideoClick}
        >
          {videoUrl && (
            <div className="w-full max-w-3xl h-[30vh] md:h-[40vh]">
              <iframe
                src={videoUrl}
                title={title}
                className="w-full h-full rounded-lg shadow-lg"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
