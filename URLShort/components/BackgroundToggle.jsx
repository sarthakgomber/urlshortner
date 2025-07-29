'use client';

import { useEffect, useState } from 'react';

export default function BackgroundToggle() {
  const [bg, setBg] = useState('/bg2.png'); // default: moon

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('background');
    if (saved) setBg(saved);
  }, []);

  // Update background and localStorage whenever bg changes
  useEffect(() => {
    const body = document.body;

    body.style.transition = 'background-image 0.5s ease-in-out';
    body.style.backgroundImage = `url(${bg})`;
    body.style.backgroundSize = 'cover';
    body.style.backgroundRepeat = 'no-repeat';
    body.style.backgroundPosition = 'center';

    localStorage.setItem('background', bg);
  }, [bg]);

  // Toggle between bg1 and bg2
  const toggleBackground = () => {
    setBg((prev) => (prev === '/bg1.png' ? '/bg2.png' : '/bg1.png'));
  };

  return (
    <button
      onClick={toggleBackground}
      className="fixed top-3 right-4 z-50 p-2 bg-white/90 text-black dark:bg-zinc-800 dark:text-white rounded-full shadow-lg hover:scale-110 transition-transform"
    >
      {bg === '/bg1.png' ? '☀️' : '🌙'}
    </button>
  );
}
