import React from 'react';
import { Play } from 'lucide-react';

interface VideoCardProps {
  title: string;
  thumbnail: string;
  category: string;
  duration: string;
}

function VideoCard({ title, thumbnail, category, duration }: VideoCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg">
      <div className="aspect-video w-full">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
              {category}
            </span>
            <span className="text-sm font-medium">{duration}</span>
          </div>
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <button className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
            <Play size={16} /> Watch Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;