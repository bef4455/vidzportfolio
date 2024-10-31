import React from 'react';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/40 to-black">
        <img
          src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba"
          alt="Hero background"
          className="w-full h-full object-cover opacity-50"
        />
      </div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
          Crafting Visual Stories
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
          Professional video editor bringing your vision to life through compelling storytelling
        </p>
      </div>
    </section>
  );
}