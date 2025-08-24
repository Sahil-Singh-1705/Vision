'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X} from 'lucide-react';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-zinc-900 text-white w-full sticky top-0 z-50 px-4">
      <nav className="w-full py-4 flex justify-between items-center">
       <div className="italic text-2xl pl-2 font-bold hover:scale-105 transition-transform duration-200 flex flex-row items-center gap-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="35"
          viewBox="0 0 24 24"
          fill="black"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-eye"
        >
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
          <circle cx="12" cy="12" r="4" fill="red" />
        </svg>
         <Link href='/'>Vision</Link>
       </div>
        <div className="hidden md:flex space-x-4">
          {[
            { name: 'Home', path: '/' },
            { name: 'About', path: '/about' },
            { name: 'Services', path: '/services' },
            { name: 'Contact', path: '/contact' },
          ].map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`px-4 py-2 rounded font-bold transition ${
                pathname === link.path
                  ? 'text-red-500'
                  : 'text-white hover:text-red-500'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-[#f0f0f0] focus:outline-none">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-zinc-900 px-4 pb-4 space-y-2">
          <Link href="/" onClick={() => setMenuOpen(false)} className="block px-4 py-2 rounded font-bold hover:text-red-500 transition">Home</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)} className="block px-4 py-2 rounded font-bold hover:text-red-500 transition">About</Link>
          <Link href="/services" onClick={() => setMenuOpen(false)} className="block px-4 py-2 rounded font-bold hover:text-red-500 transition">Services</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)} className="block px-4 py-2 rounded font-bold hover:text-red-500 transition">Contact</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
