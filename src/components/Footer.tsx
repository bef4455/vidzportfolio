import React from 'react'; // Facultatif, selon la version de React

export default function Footer() {
  return (
    <footer className="bg-black py-8 text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4">
        <p className="text-sm">&copy; 2024 B4_Lab. All rights reserved.</p>
        <div className="flex items-center space-x-4">
          <a href="https://www.instagram.com/b4.lab/" target="_blank" rel="noopener noreferrer">
            {/* Utilisation directe du chemin public pour le SVG */}
            <img src="/1298747_instagram_brand_logo_social media_icon.svg" alt="Instagram" className="h-6 w-6" />
          </a>
          <a href="https://www.youtube.com/channel/UCqMCtzsEvRMl9nTAdB3VgGw" target="_blank" rel="noopener noreferrer">
            {/* Utilisation directe du chemin public pour le SVG */}
            <img src="/317714_video_youtube_icon.svg" alt="Instagram" className="h-7 w-7" />
          </a>
        </div>
      </div>
    </footer>
  );
}
