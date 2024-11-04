import React, { useRef } from 'react';
import ProjectCard from './ProjectCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
  {
    title: "Showreels",
    category: "Lifestyle",
    thumbnail: "https://img.youtube.com/vi/SW7VaYFA9LY/maxresdefault.jpg",
    videoUrl: "https://youtu.be/SW7VaYFA9LY"
  },
  {
    title: "HBC GAGNY VS CSM Finances - 2024",
    category: "Sport",
    thumbnail: "https://img.youtube.com/vi/KGaXZSxRO5Q/maxresdefault.jpg",
    videoUrl: "https://youtu.be/KGaXZSxRO5Q"
  },
  {
    title: "THAILAND 24' - iPhone 11 Pro w/ Dji Osmo mobile",
    category: "Travel",
    thumbnail: "https://img.youtube.com/vi/oAkj9qmHPPs/maxresdefault.jpg",
    videoUrl: "https://youtu.be/oAkj9qmHPPs"
  },
  {
    title: "Donna La Mulatta - No me importa - iPhone 11 Pro w/ Dji Osmo mobile",
    category: "Music Video",
    thumbnail: "https://img.youtube.com/vi/ejrMUCztbVM/maxresdefault.jpg",
    videoUrl: "https://youtu.be/ejrMUCztbVM"
  },
  {
    title: "Quentin Pontonier - Interview (Cyclones Magazine)",
    category: "Documentary",
    thumbnail: "https://img.youtube.com/vi/sZ8aajiBgXI/maxresdefault.jpg",
    videoUrl: "https://youtu.be/sZ8aajiBgXI"
  },
  {
    title: "Gallery Art",
    category: "Lifestyle Art",
    thumbnail: "https://img.youtube.com/vi/mbUxkdD1Ppo/maxresdefault.jpg",
    videoUrl: "https://youtu.be/mbUxkdD1Ppo"
  },
  {
    title: "BMW E30 Ride",
    category: "Lifestyle",
    thumbnail: "https://img.youtube.com/vi/BfaxAcqzkTI/maxresdefault.jpg",
    videoUrl: "https://youtu.be/BfaxAcqzkTI"
  },
  {
    title: "Short Vietnam 2023",
    category: "Travel",
    thumbnail: "https://img.youtube.com/vi/dRRcA5xVhYk/maxresdefault.jpg",
    videoUrl: "https://youtu.be/dRRcA5xVhYk"
  },
  {
    title: "Parifornie III",
    category: "Commercial",
    thumbnail: "https://img.youtube.com/vi/tqyyYQ60NbA/maxresdefault.jpg",
    videoUrl: "https://youtu.be/tqyyYQ60NbA"
  },
  {
    title: "Izzyfix Anniversaire",
    category: "Commercial",
    thumbnail: "https://img.youtube.com/vi/OXWnIb4azjc/maxresdefault.jpg",
    videoUrl: "https://youtube.com/shorts/OXWnIb4azjc"
  }
];

export default function Projects() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -600 : 600; 
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="projects" className="py-20 px-4 md:px-2">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl md:text-2xl font-bold mb-8 md:mb-12 text-center">WORK</h2>
        
        <div className="relative group">
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-1/2"
            aria-label="Scroll left"
          >
            <ChevronLeft size={20} /> {/* Réduit la taille de l'icône */}
          </button>

          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-4 md:gap-6 pb-4 snap-x snap-mandatory scrollbar-hide"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {projects.map((project, index) => (
              <div key={index} className="flex-none w-[250px] md:w-[400px] snap-start"> {/* Réduit la largeur des cartes sur mobile */}
                <ProjectCard {...project} />
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-x-1/2"
            aria-label="Scroll right"
          >
            <ChevronRight size={20} /> {/* Réduit la taille de l'icône */}
          </button>
        </div>
      </div>
    </section>
  );
}
