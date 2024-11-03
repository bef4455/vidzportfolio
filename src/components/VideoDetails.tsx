import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function VideoDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const { videoUrl, title } = location.state || {};

  // Si `videoUrl` n'est pas disponible, redirigez vers l'accueil
  useEffect(() => {
    if (!videoUrl) {
      navigate('/'); // Redirige vers la page d'accueil si les informations sont manquantes
    }
  }, [videoUrl, navigate]);

  // Transforme l'URL de la vidéo en URL d'embed
  const embedUrl = videoUrl && videoUrl.includes("youtu.be")
    ? videoUrl.replace("youtu.be/", "www.youtube.com/embed/")
    : videoUrl;

  useEffect(() => {
    // Ajoute `overflow-hidden` au body pour désactiver le scroll
    document.body.style.overflow = 'hidden';

    // Supprime `overflow-hidden` du body lorsque le composant est démonté
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  if (!videoUrl) {
    // Affiche un message de chargement ou une page vide pendant la redirection
    return <div className="text-white text-center">Loading...</div>;
  }

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center">
      {embedUrl ? (
        <iframe
          src={embedUrl}
          title={title}
          className="w-full h-full"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      ) : (
        <p className="text-white">La vidéo n'est pas disponible.</p>
      )}
    </div>
  );
}

export default VideoDetails;