"use client";
import React from 'react';
import { Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#020d07] to-[#041a0e] text-white pt-[60px] px-[5%] pb-[30px] border-t border-[#C9A84C]/30">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-[60px] mb-[50px]">
          {/* Brand */}
          <div>
            <h3 className="text-[#E8C96D] font-serif text-[1.4rem] font-semibold mb-3">Bhumi Shah</h3>
            <p className="text-white/50 text-[0.85rem] leading-[1.7] font-light">
              Divine Touch & Logical Solutions. Transforming spaces and enhancing lives through the ancient science of Vastu, combined with Numerology, Tarot Reading, and Graphology.
            </p>
            <div className="mt-5 flex gap-3">
              <a href="https://instagram.com/bhumi_divinetouch_logical_soln" target="_blank" rel="noopener noreferrer" className="text-[#E8C96D] hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="https://www.facebook.com/share/14ShALofaSP/" target="_blank" rel="noopener noreferrer" className="text-[#E8C96D] hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="mailto:bhumi231284@gmail.com" className="text-[#E8C96D] hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[#E8C96D] text-[0.75rem] tracking-[0.2em] uppercase mb-4 font-semibold">Navigation</h4>
            <ul className="space-y-2 list-none p-0 m-0">
              <li><a href="#home" className="text-white/50 text-[0.85rem] hover:text-[#E8C96D] transition-colors font-light no-underline">Home</a></li>
              <li><a href="#about" className="text-white/50 text-[0.85rem] hover:text-[#E8C96D] transition-colors font-light no-underline">About</a></li>
              <li><a href="#services" className="text-white/50 text-[0.85rem] hover:text-[#E8C96D] transition-colors font-light no-underline">Services</a></li>
              <li><a href="#courses" className="text-white/50 text-[0.85rem] hover:text-[#E8C96D] transition-colors font-light no-underline">Courses</a></li>
              <li><a href="#testimonials" className="text-white/50 text-[0.85rem] hover:text-[#E8C96D] transition-colors font-light no-underline">Testimonials</a></li>
              <li><a href="#faq" className="text-white/50 text-[0.85rem] hover:text-[#E8C96D] transition-colors font-light no-underline">FAQ</a></li>
              <li><a href="#contact" className="text-white/50 text-[0.85rem] hover:text-[#E8C96D] transition-colors font-light no-underline">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[#E8C96D] text-[0.75rem] tracking-[0.2em] uppercase mb-4 font-semibold">Services</h4>
            <ul className="space-y-2 list-none p-0 m-0">
              <li><a href="#services" className="text-white/50 text-[0.85rem] hover:text-[#E8C96D] transition-colors font-light no-underline">Home & Industrial Vastu</a></li>
              <li><a href="#services" className="text-white/50 text-[0.85rem] hover:text-[#E8C96D] transition-colors font-light no-underline">Vastu Consultation</a></li>
              <li><a href="#services" className="text-white/50 text-[0.85rem] hover:text-[#E8C96D] transition-colors font-light no-underline">Tarot Reading</a></li>
              <li><a href="#services" className="text-white/50 text-[0.85rem] hover:text-[#E8C96D] transition-colors font-light no-underline">Numerology</a></li>
              <li><a href="#services" className="text-white/50 text-[0.85rem] hover:text-[#E8C96D] transition-colors font-light no-underline">Graphology</a></li>
              <li><a href="#courses" className="text-white/50 text-[0.85rem] hover:text-[#E8C96D] transition-colors font-light no-underline">Courses</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 flex flex-wrap justify-between items-center gap-3">
          <p className="text-white/35 text-[0.8rem] m-0 font-light">
            © 2024 Bhumi Shah Divine Touch & Logical Solutions. All rights reserved.
          </p>
          <p className="text-white/35 text-[0.8rem] m-0 font-light">
            Vastu · Numerology · Tarot · Graphology
          </p>
        </div>
      </div>
    </footer>
  );
}
