"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Eye } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [visitorCount, setVisitorCount] = useState<number>(3500);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    try {
      const BASE_COUNT = 3500;
      // Start reference epoch
      const START_DATE = new Date('2026-11-16T00:00:00Z').getTime();
      const now = Date.now();
      
      // Calculate realistic organic visitor growth based on elapsed time (~1 visitor every 1-2 hours)
      const hoursElapsed = Math.max(0, Math.floor((now - START_DATE) / (1000 * 60 * 60)));
      const timeIncrement = Math.floor(hoursElapsed * 0.75);

      const storedCount = localStorage.getItem('bhumi_visitor_count');
      let currentCount = storedCount ? parseInt(storedCount, 10) : (BASE_COUNT + timeIncrement);

      if (isNaN(currentCount) || currentCount < BASE_COUNT) {
        currentCount = BASE_COUNT + timeIncrement;
      }

      // Increment count on each new browser session
      const sessionKey = 'bhumi_visited_session';
      if (!sessionStorage.getItem(sessionKey)) {
        currentCount += 1;
        sessionStorage.setItem(sessionKey, 'true');
        localStorage.setItem('bhumi_visitor_count', currentCount.toString());
      } else {
        localStorage.setItem('bhumi_visitor_count', currentCount.toString());
      }

      setVisitorCount(currentCount);
    } catch {
      setVisitorCount(3500);
    }
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Vastu Tips', href: '#tips' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-5 md:px-10 flex items-center justify-between transition-all duration-300 ${
        scrolled
          ? 'h-[60px] bg-gradient-to-br from-[#041a0e]/95 to-[#082d18]/95 shadow-[0_4px_30px_rgba(0,0,0,0.5),0_1px_0_rgba(201,168,76,0.2)]'
          : 'h-[70px] bg-gradient-to-br from-[#041a0e]/90 to-[#082d18]/90 shadow-[0_2px_20px_rgba(0,0,0,0.4)] border-b border-[#C9A84C]/30'
      } backdrop-blur-md`}
    >
      <a href="#home" className="flex items-center gap-3 no-underline">
        <img
          src="https://vividspaces.solutions/wp-content/uploads/2024/11/BSDL-Logo-1024x1024.png"
          alt="Logo"
          className="w-[45px] h-[45px] rounded-full border-2 border-[#C9A84C] object-cover"
        />
        <span
          className="font-serif text-[1.3rem] text-[#E8C96D] font-semibold tracking-wide"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Bhumi Shah
        </span>
      </a>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-2 list-none m-0 p-0">
        {navLinks.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              className="relative text-white/75 no-underline text-[0.82rem] font-medium tracking-widest uppercase px-3.5 py-2 rounded transition-all duration-250 hover:text-[#E8C96D] hover:bg-[#C9A84C]/10 hover:shadow-[0_0_20px_rgba(232,201,109,0.4)] group font-sans"
            >
              {link.name}
              <span className="absolute bottom-0.5 left-1/2 right-1/2 h-[1px] bg-[#E8C96D] transition-all duration-250 opacity-0 group-hover:left-3.5 group-hover:right-3.5 group-hover:opacity-100"></span>
            </a>
          </li>
        ))}

        {/* Dropdown */}
        <li
          className="relative group"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <span className="relative flex items-center cursor-pointer text-white/75 no-underline text-[0.82rem] font-medium tracking-widest uppercase px-3.5 py-2 rounded transition-all duration-250 hover:text-[#E8C96D] hover:bg-[#C9A84C]/10 hover:shadow-[0_0_20px_rgba(232,201,109,0.4)] font-sans">
            Courses <ChevronDown className="w-4 h-4 ml-1" />
            <span className="absolute bottom-0.5 left-1/2 right-1/2 h-[1px] bg-[#E8C96D] transition-all duration-250 opacity-0 group-hover:left-3.5 group-hover:right-3.5 group-hover:opacity-100"></span>
          </span>
          
          <AnimatePresence>
            {dropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-[#0a2618]/95 backdrop-blur-md border border-[#C9A84C]/30 rounded-md shadow-xl py-2 flex flex-col"
              >
                <a href="#courses" className="px-4 py-2 text-[0.85rem] text-white/80 hover:text-[#E8C96D] hover:bg-[#C9A84C]/10 transition-colors uppercase tracking-wider font-sans">Vastu Coaching</a>
                <a href="#courses" className="px-4 py-2 text-[0.85rem] text-white/80 hover:text-[#E8C96D] hover:bg-[#C9A84C]/10 transition-colors uppercase tracking-wider font-sans">Numerology Course</a>
                <a href="#courses" className="px-4 py-2 text-[0.85rem] text-white/80 hover:text-[#E8C96D] hover:bg-[#C9A84C]/10 transition-colors uppercase tracking-wider font-sans">Tarot Reading Course</a>
              </motion.div>
            )}
          </AnimatePresence>
        </li>

        <li>
          <a
            href="#testimonials"
            className="relative text-white/75 no-underline text-[0.82rem] font-medium tracking-widest uppercase px-3.5 py-2 rounded transition-all duration-250 hover:text-[#E8C96D] hover:bg-[#C9A84C]/10 hover:shadow-[0_0_20px_rgba(232,201,109,0.4)] group font-sans"
          >
            Testimonials
            <span className="absolute bottom-0.5 left-1/2 right-1/2 h-[1px] bg-[#E8C96D] transition-all duration-250 opacity-0 group-hover:left-3.5 group-hover:right-3.5 group-hover:opacity-100"></span>
          </a>
        </li>
        <li>
          <a
            href="#faq"
            className="relative text-white/75 no-underline text-[0.82rem] font-medium tracking-widest uppercase px-3.5 py-2 rounded transition-all duration-250 hover:text-[#E8C96D] hover:bg-[#C9A84C]/10 hover:shadow-[0_0_20px_rgba(232,201,109,0.4)] group font-sans"
          >
            FAQ
            <span className="absolute bottom-0.5 left-1/2 right-1/2 h-[1px] bg-[#E8C96D] transition-all duration-250 opacity-0 group-hover:left-3.5 group-hover:right-3.5 group-hover:opacity-100"></span>
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="relative text-white/75 no-underline text-[0.82rem] font-medium tracking-widest uppercase px-3.5 py-2 rounded transition-all duration-250 hover:text-[#E8C96D] hover:bg-[#C9A84C]/10 hover:shadow-[0_0_20px_rgba(232,201,109,0.4)] group font-sans"
          >
            Contact
            <span className="absolute bottom-0.5 left-1/2 right-1/2 h-[1px] bg-[#E8C96D] transition-all duration-250 opacity-0 group-hover:left-3.5 group-hover:right-3.5 group-hover:opacity-100"></span>
          </a>
        </li>

        {/* Visitor Counter besides Contact */}
        <li className="ml-2 pl-2 border-l border-[#C9A84C]/30 flex items-center">
          <div
            title="Total Visitors"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-[#C9A84C]/35 text-[#E8C96D] text-[0.8rem] font-medium tracking-wider shadow-[0_0_15px_rgba(201,168,76,0.12)] hover:border-[#E8C96D] hover:bg-white/10 transition-all duration-300 select-none cursor-default group"
          >
            <Eye className="w-3.5 h-3.5 text-[#E8C96D] group-hover:scale-110 transition-transform duration-300" />
            <span className="font-sans tabular-nums font-semibold tracking-wide">
              {visitorCount.toLocaleString()}
            </span>
          </div>
        </li>
      </ul>

      {/* Mobile Right Section: Visitor Counter + Menu Toggle */}
      <div className="flex items-center gap-2.5 md:hidden">
        <div
          title="Total Visitors"
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-[#C9A84C]/35 text-[#E8C96D] text-[0.75rem] font-medium tracking-wider shadow-[0_0_10px_rgba(201,168,76,0.1)] select-none"
        >
          <Eye className="w-3.5 h-3.5 text-[#E8C96D]" />
          <span className="font-sans tabular-nums font-semibold">
            {visitorCount.toLocaleString()}
          </span>
        </div>

        <button
          className="text-[#E8C96D] p-2 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-[100%] left-0 w-full bg-gradient-to-b from-[#041a0e] to-[#082d18] border-b border-[#C9A84C]/30 shadow-2xl overflow-hidden md:hidden"
          >
            <ul className="flex flex-col py-4 px-6 gap-4 list-none m-0">
              {[...navLinks, {name: 'Courses', href: '#courses'}, {name: 'Testimonials', href: '#testimonials'}, {name: 'FAQ', href: '#faq'}, {name: 'Contact', href: '#contact'}].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-white/80 hover:text-[#E8C96D] text-[1rem] font-medium tracking-widest uppercase font-sans"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li className="pt-2 border-t border-[#C9A84C]/20 flex items-center justify-between text-white/70 text-xs">
                <span>Total Visitors</span>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-[#C9A84C]/30 text-[#E8C96D] text-xs font-semibold">
                  <Eye className="w-3.5 h-3.5 text-[#E8C96D]" />
                  <span className="tabular-nums">{visitorCount.toLocaleString()}</span>
                </div>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
