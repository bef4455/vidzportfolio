import React from 'react';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  category: string;
  thumbnail: string;
  videoUrl: string;
}

export default function ProjectCard({ title, category, thumbnail, videoUrl }: ProjectCardProps) {
  // Encode le titre de la vidéo pour éviter les problèmes de caractères spéciaux
  const encodedTitle = encodeURIComponent(title);

  return (
    <Link to={`/video/${encodedTitle}`} state={{ videoUrl, title, category }}>
      <div className="group relative overflow-hidden rounded-lg cursor-pointer">
        <div className="aspect-video w-full">
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <Play className="mx-auto mb-2" size={48} />
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-gray-300">{category}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
