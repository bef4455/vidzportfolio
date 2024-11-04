import React, { useEffect, useState } from 'react';

export default function Hero({ isMenuOpen }) {
  const [isTextVisible, setIsTextVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Cache le texte si l'utilisateur a défilé de plus de 50 pixels
      if (window.scrollY > 50) {
        setIsTextVisible(false);
      } else {
        // Affiche le texte si l'utilisateur est tout en haut de la page
        setIsTextVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Nettoyage de l'événement lors du démontage du composant
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-start pt-20 md:pt-32">
      {/* Vidéo avec une hauteur réduite */}
      <div
        className={`relative w-full overflow-hidden h-[50vh] md:h-[60vh] flex items-center transition-opacity duration-500 ${
          isMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <video
          className="w-full h-full object-cover"
          src="/Showreel.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      {/* Texte sous la vidéo, qui disparaît au défilement */}
      <div
        className={`relative z-10 text-center px-6 mt-8 md:mt-12 backdrop-blur-sm bg-black/40 p-6 rounded-lg max-w-3xl mx-auto transition-opacity duration-1000 ${
          isTextVisible && !isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <h1 className="text-3xl md:text-5xl lg:text-6xl mb-4 text-white font-semibold">
          Créateur d’Imaginaires
        </h1>
        <p className="text-base md:text-xl text-gray-300 max-w-2xl mx-auto font-semibold">
          Montage Vidéo - Réalisation - Cadrage et Prise de Vue - Mixage Sonore
        </p>
      </div>
    </section>
  );
}
