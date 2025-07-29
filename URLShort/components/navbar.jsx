import React from 'react';
import Link from 'next/link';
import BackgroundToggles from './BackgroundToggle';

const navbar = () => {
  return (
    <nav className='fixed top-0 left-0 w-full z-50 h-16 backdrop-blur-md bg-white/10 border-b border-white/20 flex justify-between px-4 items-center text-white'>
      <div className='logo font-bold text-lg'>BitLinks</div>
      <ul className='flex justify-center gap-4 items-center'>
        <Link href="/"><li>Home</li></Link>
        <Link href="/about"><li>About</li></Link>
        <Link href="/shorten"><li>Shorten</li></Link>
        <Link href="/contact"><li>Contact Us</li></Link>
        <li className='px-5'>
          <BackgroundToggles/>
        </li>
      </ul>
    </nav>
  );
};

export default navbar;
