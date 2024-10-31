import React, { useRef } from 'react';
import ProjectCard from './ProjectCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
  {
    title: "Mountain Adventure",
    category: "Commercial",
    thumbnail: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba",
    videoUrl: "#"
  },
  {
    title: "Urban Stories",
    category: "Documentary",
    thumbnail: "https://images.unsplash.com/photo-1682687220063-4742bd7c8f1b",
    videoUrl: "#"
  },
  {
    title: "Nature's Beauty",
    category: "Short Film",
    thumbnail: "https://images.unsplash.com/photo-1682687220199-d0124f48f95b",
    videoUrl: "#"
  },
  {
    title: "City Lights",
    category: "Music Video",
    thumbnail: "https://images.unsplash.com/photo-1682686581660-3693f0c588d2",
    videoUrl: "#"
  },
  {
    title: "Ocean Dreams",
    category: "Documentary",
    thumbnail: "https://images.unsplash.com/photo-1682687220945-922198770e60",
    videoUrl: "#"
  }
];

export default function Projects() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
        
        <div className="relative group">
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-1/2"
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} />
          </button>

          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-6 pb-4 snap-x snap-mandatory scrollbar-hide"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {projects.map((project, index) => (
              <div key={index} className="flex-none w-[300px] md:w-[400px] snap-start">
                <ProjectCard {...project} />
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-x-1/2"
            aria-label="Scroll right"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}