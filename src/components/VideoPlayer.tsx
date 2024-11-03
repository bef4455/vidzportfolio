import React, { useRef, useEffect } from 'react';
import videojs, { VideoJsPlayerOptions, VideoJsPlayer } from 'video.js';
import 'video.js/dist/video-js.css';

interface VideoPlayerProps {
  options: VideoJsPlayerOptions;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ options }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const playerRef = useRef<VideoJsPlayer | null>(null);

  useEffect(() => {
    // Vérifier si la référence vidéo est définie et que le lecteur n'est pas encore initialisé
    if (videoRef.current && !playerRef.current) {
      playerRef.current = videojs(videoRef.current, options, () => {
        console.log('Video.js player is ready');
      });

      // Gestion des erreurs du lecteur
      playerRef.current.on('error', () => {
        const error = playerRef.current?.error();
        if (error) {
          console.error(`Video.js Error Code: ${error.code}`, error.message);
        }
      });
    }

    // Nettoyage du lecteur lorsque le composant est démonté
    return () => {
      if (playerRef.current) {
        playerRef.current.dispose();
        playerRef.current = null;
      }
    };
  }, [options]);

  return (
    <div data-vjs-player className="relative w-full h-full">
      <video
        ref={videoRef}
        className="video-js vjs-big-play-centered w-full h-full object-cover"
        controls={false}
        muted
        playsInline
        autoPlay
        loop
        preload="auto"
      />
    </div>
  );
};

export default VideoPlayer;
