import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 py-8 px-4">
      <div className="max-w-7xl mx-auto text-center text-gray-400">
        <p>© {new Date().getFullYear()} B4.Lab. All rights reserved.</p>
      </div>
    </footer>
  );
}