import React from 'react'; // Facultatif, selon la version de React

export default function Footer() {
  return (
    <footer className="bg-black py-8 text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 space-y-4 md:space-y-0">
        {/* Texte copyright */}
        <p className="text-xs md:text-sm text-center md:text-left">
          &copy; 2025 B4_Lab. All rights reserved.
        </p>

        {/* Icônes des réseaux sociaux */}
        <div className="flex items-center space-x-4">
          <a href="https://www.instagram.com/b4.lab/" target="_blank" rel="noopener noreferrer">
            <img src="/1298747_instagram_brand_logo_social media_icon.svg" alt="Instagram" className="h-5 w-5 md:h-6 md:w-6" />
          </a>
          <a href="https://www.youtube.com/channel/UCqMCtzsEvRMl9nTAdB3VgGw" target="_blank" rel="noopener noreferrer">
            <img src="/317714_video_youtube_icon.svg" alt="YouTube" className="h-6 w-6 md:h-7 md:w-7" />
          </a>
          {/* Bouton Fiverr */}
          <a href="https://fr.fiverr.com/b4_lab" target="_blank" rel="noopener noreferrer">
            <img src="/fiverr-1.svg" alt="Fiverr" className="h-6 w-6 md:h-7 md:w-7" />
          </a>
        </div>
      </div>
    </footer>
  );
}