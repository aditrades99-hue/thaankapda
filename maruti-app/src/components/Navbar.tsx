"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  // Prevent hydration mismatch on initial render with scroll-dependent classes
  if (!mounted) return null;

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-zinc-950/80 backdrop-blur-md shadow-lg border-b border-zinc-800/50 py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="flex justify-between items-center px-6 md:px-12 max-w-7xl mx-auto">
        <Link href="/" className="font-serif text-2xl md:text-3xl text-rose-500 tracking-wider font-bold uppercase hover:text-rose-400 transition-colors">
          Maruti Textile Empire
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link href="#collections" className="text-zinc-300 hover:text-rose-500 transition-colors text-sm uppercase tracking-wider font-semibold">
            Collections
          </Link>
          <Link href="#calculator" className="text-zinc-300 hover:text-rose-500 transition-colors text-sm uppercase tracking-wider font-semibold">
            Saving
          </Link>
          <Link href="#wholesale" className="text-zinc-300 hover:text-rose-500 transition-colors text-sm uppercase tracking-wider font-semibold">
            Wholesale
          </Link>
          <Link href="#about" className="text-zinc-300 hover:text-rose-500 transition-colors text-sm uppercase tracking-wider font-semibold">
            About
          </Link>
        </div>

        <Link href="#contact" className="hidden md:inline-flex items-center justify-center px-6 py-2.5 bg-rose-600 text-white text-sm uppercase tracking-wider font-bold rounded-full hover:bg-white hover:text-black transition-all shadow-md">
          Contact Us
        </Link>

        <button
          className="md:hidden text-gold p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-zinc-950/95 backdrop-blur-xl shadow-2xl border-t border-zinc-800 flex flex-col p-4 md:hidden">
          <Link href="#collections" onClick={() => setIsMobileMenuOpen(false)} className="py-4 px-4 text-zinc-300 hover:text-gold font-sans border-b border-zinc-800/50 uppercase tracking-wider text-sm font-semibold">Collections</Link>
          <Link href="#calculator" onClick={() => setIsMobileMenuOpen(false)} className="py-4 px-4 text-zinc-300 hover:text-gold font-sans border-b border-zinc-800/50 uppercase tracking-wider text-sm font-semibold">Saving</Link>
          <Link href="#wholesale" onClick={() => setIsMobileMenuOpen(false)} className="py-4 px-4 text-zinc-300 hover:text-gold font-sans border-b border-zinc-800/50 uppercase tracking-wider text-sm font-semibold">Wholesale</Link>
          <Link href="#about" onClick={() => setIsMobileMenuOpen(false)} className="py-4 px-4 text-zinc-300 hover:text-gold font-sans border-b border-zinc-800/50 uppercase tracking-wider text-sm font-semibold">About</Link>
          <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="py-4 px-4 text-gold font-sans uppercase tracking-wider text-sm font-bold">Contact Us</Link>
        </div>
      )}
    </nav>
  );
}
