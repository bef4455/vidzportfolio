import { useRef } from 'react';
import ProjectCard from './ProjectCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
  {
    title: "WORKSHOP OMBRAGE X JORDAN | 2025",
    category: "BTS",
    thumbnail: "https://img.youtube.com/vi/akDz9P-5JUE/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/akDz9P-5JUE"
  },  
  {
    title: "LumJR X New Era | 2025",
    category: "Commercial",
    thumbnail: "https://img.youtube.com/vi/2gjq7A5MDQ0/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/2gjq7A5MDQ0"
  }, 
  {
    title: "MAROCCO - Travel Film | 2025",
    category: "Travel",
    thumbnail: "https://img.youtube.com/vi/vYffx8VaV6w/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/vYffx8VaV6w"
  },
  {
    title: "Showreels | 2024",
    category: "Lifestyle",
    thumbnail: "https://img.youtube.com/vi/V64uxfd4_zY/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/V64uxfd4_zY"
  },
  {
    title: "HBC GAGNY VS CSM Finances - iPhone 11 Pro | 2024",
    category: "Sport",
    thumbnail: "https://img.youtube.com/vi/KGaXZSxRO5Q/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/KGaXZSxRO5Q"
  },
  {
    title: "THAILAND' - iPhone 11 Pro w/ Dji Osmo mobile | 2024",
    category: "Travel",
    thumbnail: "https://img.youtube.com/vi/oAkj9qmHPPs/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/oAkj9qmHPPs"
  },
  {
    title: "Donna La Mulatta - No me importa - iPhone 11 Pro w/ Dji Osmo mobile | 2022",
    category: "Music Video",
    thumbnail: "https://img.youtube.com/vi/ejrMUCztbVM/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/ejrMUCztbVM"
  },
  {
    title: "Quentin Pontonier - Interview (Cyclones Magazine) | 2016",
    category: "Documentary",
    thumbnail: "https://img.youtube.com/vi/sZ8aajiBgXI/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/sZ8aajiBgXI"
  },
  {
    title: "Gallery Art | 2020",
    category: "Lifestyle Art",
    thumbnail: "https://img.youtube.com/vi/mbUxkdD1Ppo/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/mbUxkdD1Ppo"
  },
  {
    title: "BMW E30 Ride | 2020",
    category: "Lifestyle",
    thumbnail: "https://img.youtube.com/vi/BfaxAcqzkTI/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/BfaxAcqzkTI"
  },
  {
    title: "Short Vietnam | 2023",
    category: "Travel",
    thumbnail: "https://img.youtube.com/vi/dRRcA5xVhYk/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/dRRcA5xVhYk"
  },
  {
    title: "Parifornie III | 2016",
    category: "Commercial",
    thumbnail: "https://img.youtube.com/vi/tqyyYQ60NbA/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/tqyyYQ60NbA"
  },
  {
    title: "Izzyfix Anniversaire | 2020",
    category: "Commercial",
    thumbnail: "https://img.youtube.com/vi/OXWnIb4azjc/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/OXWnIb4azjc"
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
